//-------Module Importation -------//
/**import Express Module****/
const express = require("express");
/**import Module Body Parser****/
const bodyParser = require("body-parser");
/**import Module Path (module interne)****/
const path = require("path");
/**import Module Multer ****/
const multer = require("multer");
/**import Module Bycript ****/
const bcrypt = require("bcrypt");
/**import Module Axios ****/
const axios = require("axios");
/**import Mongoose Module ****/
const mongoose = require("mongoose");
// import ObjectID
const { ObjectId } = require("mongodb");
// Connect APP to DB (projetVenteDB)
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/projetVenteDB');

////----------Express Application--------////
// creates express application //
const app = express();
/** Module Importation  ****/
const User = require("./models/user");
const Products = require("./models/products");
const Contact = require("./models/contact");
const Publication = require("./models/publication");
const Publicite = require("./models/publicite");
const Purchase = require("./models/purchase");
const Response = require("./models/return");

// send JSON responses
app.use(bodyParser.json());
// Get Objects from Request
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
// Folder confiquration
app.use('/images', express.static(path.join('backend/images')));

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'application/pdf': 'pdf',
    'video/mp4': 'mp4',



};
const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});

////-------------------Buisness Logic ----------------------------------////
////--------------------Partie Admin------------------------------------////
//**********************signup Admin************************************/// */
app.post("/admin/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log("Here into BL: Signup");
    const url = req.protocol + "://" + req.get("host");
    let path = req.file
        ? url + "/images/" + req.file.filename
        : url + "/images/" + "bilel.jpg";
    console.log("URL", url);
    // http://localhost:3007
    bcrypt.hash(req.body.password, 8).then((cryptedPwd) => {
        console.log("Here crypted Password", cryptedPwd);
        let admin = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            date: req.body.date,
            email: req.body.email,
            telephone: req.body.telephone,
            adresse: req.body.adresse,
            password: cryptedPwd,
            role: req.body.role,
            gender: req.body.gender,
            avatar: path,


        });
        admin.save((error, doc) => {
            console.log("Here error", error);
            console.log("Here doc", doc);
            if (error) {
                if (error.errors.email) {
                    res.json({ message: "Email exist" });

                }
            } else {
                res.json({ message: "Added with success" });
            }
        });
    });
});
//**********************Get All Admin************************************/// */
app.get("/admin", (req, res) => {
    console.log("Here into BL: Get All admin");
    User.find({ "role": { "$in": "admin" } }).then((docs) => {
        res.json({ admin: docs });
    });
});
//**********************Get Admin By Id************************************/// */
app.get("/admin/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Get admin By ID", id);
    User.findOne({ _id: id }).then((doc) => {
        console.log("Here doc", doc);
        doc
            ? res.json({ admin: doc })
            : res.json({ message: "Admin does not exist" });
    });


}

);
//**********************Delete Admin************************************/// */
app.delete("/admin/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Admin By ID", id);
    User.deleteOne({ _id: id }).then((response) => {
        console.log("Here response admin after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
//**********************Update Admin************************************/// */
app.put("/admin", (req, res) => {
    console.log("here into BL:Update Admin", req.body);

    User.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "Admin is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});

////-------------------Buisness Logic ----------------------------------////
////--------------------Partie Owner------------------------------------////
//**********************signup Owner************************************/// */
app.post("/owners/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log("Here into BL: Signup");
    const url = req.protocol + "://" + req.get("host");
    let path = req.file
        ? url + "/images" + req.file.filename
        : url + "/images/" + "bilel.jpg";
    console.log("URL", url);
    // http://localhost:3007
    bcrypt.hash(req.body.password, 8).then((cryptedPwd) => {
        console.log("Here crypted Pwd", cryptedPwd);
        let owner = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            date: req.body.date,
            telephone: req.body.telephone,
            email: req.body.email,
            password: cryptedPwd,
            adresse: req.body.adresse,
            matricule: req.body.matricule,
            role: req.body.role,
            status: req.body.status,
            gender: req.body.gender,
            avatar: path,
        });
        owner.save((error, doc) => {
            console.log("Here error", error);
            console.log("Here doc", doc);
            if (error) {
                if (error.errors.email) {
                    res.json({ message: "Email exist" });
                }
            } else {
                res.json({ message: "Added with success" });
            }
        });
    });
});

//**********************Get All Owner************************************ *///
app.get("/owners", (req, res) => {
    console.log("Here into BL: Get All Owner");
    User.find({ "role": { "$in": "owner" } }).then((docs) => {
        res.json({ owner: docs });
    });
});
//**********************Get Owner By Id************************************ *///
app.get("/owners/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Get owners By ID", id);
    User.findOne({ _id: id }).then((doc) => {
        console.log("Here doc", doc);
        doc
            ? res.json({ owner: doc })
            : res.json({ message: "Owners does not exist" });
    });


}

);
//**********************Delete Admin************************************/// */
app.delete("/owners/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Admin By ID", id);
    User.deleteOne({ _id: id }).then((response) => {
        console.log("Here response owner after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
//*********************Updat Owners************************************ *///
app.put("/owners", (req, res) => {
    console.log("here into BL:Update Awners", req.body);

    User.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "Owners is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
})

////-------------------Buisness Logic ----------------------------------////
////--------------------Partie Clients------------------------------------////
//**********************signup Clients************************************/// */

app.post("/clients/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log("Here into BL: Signup");
    const url = req.protocol + "://" + req.get("host");
    let path = req.file
        ? url + "/images" + req.file.filename
        : url + "/images/" + "bilel.jpg";
    console.log("URL", url);
    // http://localhost:3007
    bcrypt.hash(req.body.password, 8).then((cryptedPwd) => {
        console.log("Here crypted Pwd", cryptedPwd);
        let client = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            date: req.body.date,
            email: req.body.email,
            telephone: req.body.telephone,
            adresse: req.body.adresse,
            password: cryptedPwd,
            status: req.body.status,
            role: req.body.role,
            gender: req.body.gender,
            avatar: path,
        });
        client.save((error, doc) => {
            console.log("Here error", error);
            console.log("Here doc", doc);
            if (error) {
                if (error.errors.email) {
                    res.json({ message: "Email exist" });
                }
            } else {
                res.json({ message: "Added with success" });
            }
        });
    });
});

//**************************Get All Client************************************** *///
app.get("/clients", (req, res) => {
    console.log("Here into BL: Get All Client");
    User.find({ "role": { "$in": "client" } }).then((docs) => {
        res.json({ client: docs });
    });
});
//**********************Get Client By Id************************************ *///
app.get("/clients/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Get clients By ID", id);
    User.findOne({ _id: id }).then((doc) => {
        console.log("Here doc", doc);
        doc
            ? res.json({ client: doc })
            : res.json({ message: "clients does not exist" });
    });


}

);
//**********************Delete Client************************************/// */
app.delete("/clients/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Client By ID", id);
    User.deleteOne({ _id: id }).then((response) => {
        console.log("Here response client after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
//**********************Update Client************************************/// */
app.put("/clients", (req, res) => {
    console.log("here into BL:Update Clients", req.body);

    User.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "Clients is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
})

////-------------------Buisness Logic ----------------------------------////
////--------------------Partie Login------------------------------------////
//**********************Login************************************/// */
app.post("/clients/login", (req, res) => {
    console.log("Here into login", req.body);
    let patient;
    User.findOne({ $or: [{ email: req.body.email }, { telephone: req.body.telephone }] }).then((doc) => {
        if (!doc) {
            res.json({ msg: "0" });

        }
        patient = doc;
        return bcrypt.compare(req.body.password, doc.password);
    }).then(
        (pwdResponse) => {
            console.log("here pwdResponse ", pwdResponse);
            if (!pwdResponse) {
                res.json({ msg: "1" });

            } else {
                // send user information {id , fName, lName, role}
                let userTosend = {
                    id: patient._id,
                    fName: patient.firstName,
                    lName: patient.lastName,
                    role: patient.role,
                };
                res.json({ patient: userTosend, msg: "2" });

            }
        });


});


////-------------------Buisness Logic ----------------------------------////
////--------------------Partie Products------------------------------------////
//**********************Add Products************************************/// */
app.post("/products", (req, res) => {
    console.log("Here into BL: Add products", req.body);
    let product = new Products({
        name: req.body.name,
        type: req.body.type,
        reference: req.body.reference,
        stock: req.body.stock,
        price: req.body.price,
        supplier: req.body.supplier,
        status: req.body.status,
        // disponible : req.body.disponible,
        ownersId: req.body.ownersId,


    });
    console.log("here add products", product);
    product.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });

        } else {
            res.json({ message: "Error" });
        }
    });
});
//**********************All Products************************************/// */
app.get("/products/all", (req, res) => {
    console.log("here products with owners");
    Products.aggregate(
        [
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "ownersId", // filed from the input documents
                    foreignField: "_id", // field from the documents of the "from" collection
                    as: "produits", // output array field
                },
            },
        ],
        (error, docs) => {
            console.log("here all products", docs);
            res.status(200).json({
                produits: docs,
            });
        }
    );
})
//**********************All Products by id************************************/// */
app.get("/products/:id", (req, res) => {
    console.log("here products with id", req.params.id);
    Products.aggregate(
        [
            {
                $match: { ownersId: ObjectId(req.params.id) }, ///$match:pour filtrer les documents d'une collection
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "ownersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "owners", // output array field
                },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "userId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "users", // output array field

                },

            },

        ],

        (error, docs) => {
            console.log("here  pubs by owners id", docs);
            res.status(200).json({
                produit: docs,
            });
        }
    );

})
//**********************Confirme products par admin************************************/// */
app.post("/products/status/:id", (req, res) => {
    console.log("here id ", req.params.id);
    let id = req.params.id;
    Products.updateOne({ _id: id }, { status: "confirmed" }).then((docs) => {
        (response) => {
            console.log("here response after update", response);
            if (response.modifiedCount == 1) {
                res.json({ message: `status N° : Edited with success` })
            } else {
                res.json({ message: `Not Edited` })
            }
        }
    })
})
//**********************Consulter The Products Confirmer By Clients************************************/// */
app.get("/products/", (req, res) => {
    console.log("here products with id", req.params.id);
    Products.aggregate(
        [
            {
                $match: { status: "confirmed" },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "ownersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "owners", // output array field
                },
            },


        ],
        (error, docs) => {
            console.log("here  products by owners id", docs);
            res.status(200).json({
                produit: docs,
            });
        }
    );

})
//**********************Delete Products Owners************************************/// */
app.delete("/products/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Products Owners By ID", id);
    Products.deleteOne({ _id: id }).then((response) => {
        console.log("Here response products owners after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
//**********************Get Products Sans Agregate************************************/// */
app.get("/updProducts/:y", (req, res) => {
    let id = req.params.y;
    console.log("Here into BL : Get updproducts By ID", id);
    Products.findOne({ _id: id }).then((doc) => {
        console.log("here doc", doc);
        doc
            ? res.json({ principale: doc })
            : res.json({ message: "upproducts does not exist" });
    });
})
//**********************Update Products Owners************************************/// */
app.put("/updProducts", (req, res) => {
    console.log("here into BL:Update Products", req.body);
    Products.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "Products is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
})
//**********************Disponibilite products By Owners************************************/// */
// app.post("/products/disponible/dispo/:id", (req, res) => {
//     console.log("here id ", req.params.id);
//     let id = req.params.id;
//     Products.updateOne({ _id: id }, { disponible: "disponible" }).then((docs) => {
//         (response) => {
//             console.log("here response after update", response);
//             if (response.modifiedCount == 1) {
//                 res.json({ message: `state N° : Edited with success` })
//             } else {
//                 res.json({ message: `Not Edited` })
//             }
//         }
//     })
// })

//**********************Search Products by name , price , stock************************************/// */
app.post("/products/search", (req, res) => {
    let searchObj = req.body;
    console.log(searchObj);
    Products.find({
        $or: [
            { name: searchObj.name },
            { price: searchObj.price },
            { stock: searchObj.stock },
        ],
    }).then((docs) => {
        res.json({ searchTab: docs });
    });
});
////-------------------Buisness Logic ----------------------------------////
////--------------------Partie Contact------------------------------------////
//**********************Add Contact************************************/// */
app.post("/contact", (req, res) => {
    console.log("Here into BL: Add Contact", req.body);
    let contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
    });
    console.log("here add contact", contact);
    contact.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Add with success" });

        } else {
            res.json({ message: "Error" });

        }
    });
});
//**********************Get All Contact************************************/// */
app.get("/contact/contact/all", (req, res) => {
    console.log("Here into BL: Get All Contact Problem");
    Contact.find().then((docs) => {
        res.json({ contact: docs });
    });
});
////-------------------Buisness Logic ----------------------------------////
////--------------------Partie Publications Owners------------------------------------////
//**********************Add Publication************************************/// */
app.post("/publications", (req, res) => {
    console.log("Here into BL: Add Publication Owners", req.body);
    let publication = new Publication({
        subject: req.body.subject,
        description: req.body.description,
        status: req.body.status,
        ownersId: req.body.ownersId,
    });
    console.log("Here add publications", publication);
    publication.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });

        } else {
            res.json({ message: "Error" });
        }
    });
});
//**********************Get All Publications************************************/// */
app.get("/publications/all/pup/pup/pup", (req, res) => {
    console.log("here publications with owners");
    Publication.aggregate(
        [

            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "ownersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "publications", // output array field
                },
            },
        ],
        (error, docs) => {
            console.log("here all publications", docs);
            res.status(200).json({
                publications: docs,
            });
        }
    );

})
//**********************Get All Publications By ID************************************/// */
app.get("/publications/:id", (req, res) => {
    console.log("here publications with id", req.params.id);
    Publication.aggregate(
        [
            {
                $match: { ownersId: ObjectId(req.params.id) }, ///$match:pour filtrer les documents d'une collection
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "ownersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "owners", // output array field
                },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "userId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "users", // output array field

                },

            },

        ],

        (error, docs) => {
            console.log("here  pubs by owners id", docs);
            res.status(200).json({
                exams: docs,
            });
        }
    );

})
//**********************Confirmer Publications Owners By Admin************************************/// */

app.post("/publications/status/:id", (req, res) => {
    console.log("here id ", req.params.id);
    let id = req.params.id;
    Publication.updateOne({ _id: id }, { status: "confirmed" }).then((docs) => {
        (response) => {
            console.log("here response after update", response);
            if (response.modifiedCount == 1) {
                res.json({ message: `status N° : Edited with success` })
            } else {
                res.json({ message: `Not Edited` })
            }
        }
    })
})
//**********************Consulter Publications Confirmed Owners By Admin************************************/// */

app.get("/publications/", (req, res) => {
    console.log("here publications owners with id", req.params.id);
    Publication.aggregate(
        [
            {
                $match: { status: "confirmed" },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "ownersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "owners", // output array field
                },
            },


        ],
        (error, docs) => {
            console.log("here  publications by owners id", docs);
            res.status(200).json({
                pubs: docs,
            });
        }
    );

})
//**********************Consulter Publications Confirmed Owners By Admin************************************/// */
app.delete("/publications/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete publications By ID", id);
    Publication.deleteOne({ _id: id }).then((response) => {
        console.log("Here response publications after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
//**********************Get Publications Owners Sans Agregate************************************/// */
app.get("/updPublications/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL : Get updpublications By ID", id);
    Publication.findOne({ _id: id }).then((doc) => {
        console.log("here doc", doc);
        doc
            ? res.json({ controle: doc })
            : res.json({ message: "uppublications does not exist" });
    });
})
//**********************Update Publications Owners************************************/// */
app.put("/updPublications", (req, res) => {
    console.log("here into BL:Update Publications", req.body);
    Publication.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "Publications is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
})

////-------------------Buisness Logic ----------------------------------////
////--------------------Partie Publications Clients------------------------------------////
//**********************Add Publication************************************/// */
app.post("/publicites", (req, res) => {
    console.log("Here into BL: Add Publication Clients", req.body);
    let publicite = new Publicite({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        gender: req.body.gender,
        status: req.body.status,
        clientId: req.body.clientId,
    });
    console.log("Here add publications clients", publicite);
    publicite.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });

        } else {
            res.json({ message: "Error" });
        }
    });
});
//**********************All Products************************************/// */
app.get("/publicites/all/all/all", (req, res) => {
    console.log("here publications with clients");
    Publicite.aggregate(
        [
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "clientId", // filed from the input documents
                    foreignField: "_id", // field from the documents of the "from" collection
                    as: "publication", // output array field
                },
            },
        ],
        (error, docs) => {
            console.log("here all publications clients", docs);
            res.status(200).json({
                publication: docs,
            });
        }
    );
})
//**********************Get All Publications By ID************************************/// */
app.get("/publicites/:id", (req, res) => {
    console.log("here publications clients with id", req.params.id);
    Publicite.aggregate(
        [
            {
                $match: { clientId: ObjectId(req.params.id) }, ///$match:pour filtrer les documents d'une collection
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "clientId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "client", // output array field
                },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "userId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "users", // output array field

                },

            },

        ],

        (error, docs) => {
            console.log("here  pubs by clients id", docs);
            res.status(200).json({
                work: docs,
            });
        }
    );

})
//**********************Delete Publications Clients************************************/// */
app.delete("/publicites/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete publications Clients By ID", id);
    Publicite.deleteOne({ _id: id }).then((response) => {
        console.log("Here response publications clients after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
//**********************Get Publications Clients Sans Agregate************************************/// */
app.get("/updPubl/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL : Get updpublications By ID", id);
    Publicite.findOne({ _id: id }).then((doc) => {
        console.log("here doc", doc);
        doc
            ? res.json({ controle: doc })
            : res.json({ message: "uppublications does not exist" });
    });
})
//**********************Update Publications Clients************************************/// */
app.put("/updPubl", (req, res) => {
    console.log("here into BL:Update Publications", req.body);
    Publicite.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "Publications is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
})
////-------------------Buisness Logic ----------------------------------////
////--------------------Partie Purchase Clients------------------------------------////
//**********************Add Purchase************************************/// */
app.post("/ventes", (req, res) => {
    console.log("Here into BL: Add purchase", req.body);
    let vente = new Purchase({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        type: req.body.type,
        products: req.body.products,
        price: req.body.price,
        quantity: req.body.quantity,
        status: req.body.status,
        clientId: req.body.clientId,

    });
    console.log("here add purchase products", vente);
    vente.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });
        } else {
            res.json({ message: "Error" });
        }
    });
});
//**********************Gett all Purchase Clients************************************/// */
app.get("/ventes/all", (req, res) => {
    console.log("here purchase products with clients");
    Purchase.aggregate(
        [

            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "clientId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "pure", // output array field
                },
            },
        ],
        (error, docs) => {
            console.log("here all purchase products clients", docs);
            res.status(200).json({
                pure: docs,
            });

        }
    );

})
//**********************Get Purchase Clients By Id************************************/// */
app.get("/ventes/:id", (req, res) => {
    console.log("here purchase with id", req.params.id);
    Purchase.aggregate(
        [
            {
                $match: { clientId: ObjectId(req.params.id) }, ///$match:pour filtrer les documents d'une collection
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "clientId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "client", // output array field
                },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "userId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "users", // output array field

                },

            },

        ],

        (error, docs) => {
            console.log("here  purchase products by id", docs);
            res.status(200).json({
                vendre: docs,
            });
        }
    );

})
//**********************Confirme Purchase Clients By Admin************************************/// */
app.post("/ventes/status/:id", (req, res) => {
    console.log("here id ", req.params.id);
    let id = req.params.id;
    Purchase.updateOne({ _id: id }, { status: "confirmed" }).then((docs) => {
        (response) => {
            console.log("here response after update", response);
            if (response.modifiedCount == 1) {
                res.json({ message: `status N° : Edited with success` })
            } else {
                res.json({ message: `Not Edited` })
            }
        }
    })
})
//**********************Consulter Confirme Purchase Clients************************************/// */
app.get("/ventes/", (req, res) => {
    console.log("here ventes confirme with id", req.params.id);
    Purchase.aggregate(
        [
            {
                $match: { status: "confirmed" },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "clientId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "client", // output array field
                },
            },


        ],
        (error, docs) => {
            console.log("here  purchase by clients id", docs);
            res.status(200).json({
                conforme: docs,
            });
        }
    );

})
//**********************Consulter Confirme Purchase Clients************************************/// */
app.delete("/ventes/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete purchase Clients By ID", id);
    Purchase.deleteOne({ _id: id }).then((response) => {
        console.log("Here purchase clients after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
//**********************Get Purchase Clients Sans Agregate************************************/// */
app.get("/updPurchases/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL : Get updpurchase By ID", id);
    Purchase.findOne({ _id: id }).then((doc) => {
        console.log("here doc", doc);
        doc
            ? res.json({ repond: doc })
            : res.json({ message: "uppurchase does not exist" });
    });
})
//**********************Update Purchase Clients************************************/// */
app.put("/updPurchases", (req, res) => {
    console.log("here into BL:Update Purchase", req.body);
    Purchase.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "Purchase is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
})
///-------------------Buisness Logic ----------------------------------////
////--------------------Partie Return Response Owners of Clients------------------------------------////
//**********************Add Response************************************/// */
app.post("/responses", (req, res) => {
    console.log("Here into BL: Add return response owners", req.body);
    let response = new Response({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
        status: req.body.status,
        ownersId: req.body.ownersId,

    });
    console.log("here aded return response", response);
    response.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });
        } else {
            res.json({ message: "Error" });
        }
    });
});
//**********************Gett All Response************************************/// */
app.get("/responses/all/reponse/reponse/reponse", (req, res) => {
    console.log("here het all return response with owners");
    Response.aggregate(
        [

            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "ownersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "examens", // output array field
                },
            },
        ],
        (error, docs) => {
            console.log("here all return response", docs);
            res.status(200).json({
                examens: docs,
            });
        }
    );

})
//**********************Gett Response Owners By Id************************************/// */
app.get("/responses/:id", (req, res) => {
    console.log("here response with id", req.params.id);
    Response.aggregate(
        [
            {
                $match: { ownersId: ObjectId(req.params.id) }, ///$match:pour filtrer les documents d'une collection
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "ownersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "owners", // output array field
                },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "userId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "users", // output array field

                },

            },

        ],

        (error, docs) => {
            console.log("here  return response by id", docs);
            res.status(200).json({
                exams: docs,
            });
        }
    );

})
//********************** Status Response Owners By Id************************************/// */
app.post("/responses/status/:id", (req, res) => {
    console.log("here id ", req.params.id);
    let id = req.params.id;
    Response.updateOne({ _id: id }, { status: "confirmed" }).then((docs) => {
        (response) => {
            console.log("here response after update", response);
            if (response.modifiedCount == 1) {
                res.json({ message: `status N° : Edited with success` })
            } else {
                res.json({ message: `Not Edited` })
            }
        }
    })
})
//********************** See Return Response Confirme Owners By Clients************************************/// */
app.get("/responses/", (req, res) => {
    console.log("here see response with id", req.params.id);
    Response.aggregate(
        [
            {
                $match: { status: "confirmed" },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "ownersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "owners", // output array field
                },
            },


        ],
        (error, docs) => {
            console.log("here  see response by owners id", docs);
            res.status(200).json({
                pubs: docs,
            });
        }
    );

})
//********************** Delete Return Response Confirme Owners By Clients************************************/// */
app.delete("/responses/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Return Response By ID", id);
    Response.deleteOne({ _id: id }).then((response) => {
        console.log("Here return response owners after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
//**********************Get Response Sans Agregate************************************/// */
app.get("/updResponses/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL : Get updresponse By ID", id);
    Response.findOne({ _id: id }).then((doc) => {
        console.log("here doc", doc);
        doc
            ? res.json({ info: doc })
            : res.json({ message: "upresponse does not exist" });
    });
})
//**********************Update Response************************************/// */
app.put("/updResponses", (req, res) => {
    console.log("here into BL:Update Response", req.body);
    Response.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "Responses is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
})



///-------------------Buisness Logic ----------------------------------////
////--------------------Partie Weather API------------------------------------////
//**********************Search Weather API************************************/// */
app.post("/weathers", (req, res) => {
    console.log("here city", req.body.city);
    const country = req.body.city;
    const apiKey = "1122374eb0970f8256d663f779a390bd";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`
    axios.get(apiUrl)
        .then((response) => {
            console.log('Here response', response);
            const weather = response.data.main;
            const result = {
                temp: weather.temp,
                pressure: weather.pressure,
                humidity: weather.humidity,
                tempMin: weather.temp_min,
                tempMax: weather.temps_max,


            };
            res.json({ result: result });

        })
})
////--------------------Partie Sport API------------------------------------////
//**********************Search Sport API************************************/// */
app.post("/weathers/foot", (req, res) => {
    console.log("here club", req.body.club);
    const country = req.body.club;
    const apiKey = "36fb86b087msh5aca69a948af08ap17c9adjsnfbfd736daaf3";
    const apiUrl = `https://football-pro.p.rapidapi.com/api/v2.0/fixtures/${apiKey}+${country}`;
    axios.get(apiUrl)
        .then((response) => {
            console.log('Here response', response);
            // const weather = response.data.main;
            // const result = {
            //     temp: weather.temp,
            //     pressure: weather.pressure,
            //     humidity: weather.humidity,
            //     tempMin:weather.temp_min,
            //     tempMax: weather.temps_max,


            // };
            res.json({ result: result });

        })
})


///---------App Exportation--------///
// make app importable from another files
module.exports = app;