import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { SignupClientsComponent } from './components/signup-clients/signup-clients.component';
import { SignupOwnerComponent } from './components/signup-owner/signup-owner.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchComponent } from './components/search/search.component';
import { InformationAdminComponent } from './components/information-admin/information-admin.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { OwnerTableComponent } from './components/owner-table/owner-table.component';
import { ClientTableComponent } from './components/client-table/client-table.component';
import { InformationOwnerComponent } from './components/information-owner/information-owner.component';
import { InformationClientComponent } from './components/information-client/information-client.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { PublicationOwnerComponent } from './components/publication-owner/publication-owner.component';
import { PublicationClientComponent } from './components/publication-client/publication-client.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ContactTableComponent } from './components/contact-table/contact-table.component';
import { LigneComponent } from './components/ligne/ligne.component';
import { ProductsConfirmeComponent } from './components/products-confirme/products-confirme.component';
import { ShopDetailComponent } from './components/shop-detail/shop-detail.component';
import { PublicationsTableComponent } from './components/publications-table/publications-table.component';
import { ConfirmePublicationsComponent } from './components/confirme-publications/confirme-publications.component';
import { PublicationsClientsTableComponent } from './components/publications-clients-table/publications-clients-table.component';
import { PurchaseProductsComponent } from './components/purchase-products/purchase-products.component';
import { VoirAchatComponent } from './components/voir-achat/voir-achat.component';
import { PurchaseTableComponent } from './components/purchase-table/purchase-table.component';
import { PurchaseConfirmeComponent } from './components/purchase-confirme/purchase-confirme.component';
import { ReturnResponsePurchaseComponent } from './components/return-response-purchase/return-response-purchase.component';
import { WeatherComponent } from './components/weather/weather.component';
import { FootballComponent } from './components/football/football.component';
import { ResponseTableComponent } from './components/response-table/response-table.component';
import { ResponseConfirmeComponent } from './components/response-confirme/response-confirme.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';
import { UpdateOwnersComponent } from './components/update-owners/update-owners.component';
import { UpdateClientComponent } from './components/update-client/update-client.component';
import { UpdateProductsComponent } from './components/update-products/update-products.component';
import { UpdatePublicationsComponent } from './components/update-publications/update-publications.component';
import { UpdatePublClientComponent } from './components/update-publ-client/update-publ-client.component';
import { UpdatePurchaseComponent } from './components/update-purchase/update-purchase.component';
import { UpdateResponseComponent } from './components/update-response/update-response.component';


const routes: Routes = [
  //localhost 4208:// Home
  { path: "", component: HomeComponent },
  //localhost 4208:// SignupAdmin
  { path: "signupAdmin", component: SignupAdminComponent },
  //localhost 4208:// SiguupClients
  { path: "signupClients", component: SignupClientsComponent },
  //localhost 4208:// SignupOwner
  { path: "signupOwner", component: SignupOwnerComponent },
  //localhost 4208:// Login
  { path: "login", component: LoginComponent },
  //localhost 4208:// Contact
  { path: "contact", component: ContactComponent },
  //localhost 4208:// Search
  { path: "search", component: SearchComponent },
  //localhost 4208:// Information admin
  { path: "admin", component: InformationAdminComponent },
  //localhost 4208:// Admin table
  { path: "adminTable", component: AdminTableComponent },
  //localhost 4208:// Update Admin
  { path: "updateAdmin/:id", component: UpdateAdminComponent },
  //localhost 4208:// Owner table
  { path: "ownerTable", component: OwnerTableComponent },
  //localhost 4208:// Client table
  { path: "clientTable", component: ClientTableComponent },
  //localhost 4208:// Update Owners
  { path: "updateOwners/:id", component: UpdateOwnersComponent },
  //localhost 4208:// Update Clients 
  { path: "updateClients/:id", component: UpdateClientComponent },
  //localhost 4208:// Information owner
  { path: "espaceOwner", component: InformationOwnerComponent },
  //localhost 4208:// Information Client
  { path: "espaceClient", component: InformationClientComponent },
  //localhost 4208:// Add Product
  { path: "addProduct", component: AddProductComponent },
  //localhost 4208:// Publications Owner
  { path: "publicationsOwner", component: PublicationOwnerComponent },
  //localhost 4208:// Publications Table Owner
  { path: "publicationsTable", component: PublicationsTableComponent },
  //localhost 4208:// Update Publications 
  { path: "updatePublications/:id", component: UpdatePublicationsComponent },
  //localhost 4208:// Publications Clients
  { path: "publicationsClients", component: PublicationClientComponent },
  //localhost 4208:// Publications Clients Table
  { path: "publicationsClientsTable", component: PublicationsClientsTableComponent },
  //localhost 4208:// Update Publications Clients
  { path: "updatePublicationClient/:id", component: UpdatePublClientComponent },
  //localhost 4208:// Publications Confirme
  { path: "publicationsConfirme", component: ConfirmePublicationsComponent },
  //localhost 4208:// Products Table
  { path: "productsTable", component: ProductsTableComponent },
  //localhost 4208:// Products Table
  { path: "updateProducts/:id", component: UpdateProductsComponent },
  //localhost 4208:// Products Confirme
  { path: "productsConfirme", component: ProductsConfirmeComponent },
  //localhost 4208:// Contact Table
  { path: "contactTable", component: ContactTableComponent },
  //localhost 4208:// Lingne Interface 
  { path: "ligneInterface", component: LigneComponent },
  //localhost 4208:// Shop Detail 
  { path: "shopDetail", component: ShopDetailComponent },
  //localhost 4208:// Purchase Products 
  { path: "purchaseProducts", component: PurchaseProductsComponent },
  //localhost 4208:// Purchase Products Table
  { path: "purchaseTable", component: PurchaseTableComponent },
  //localhost 4208:// Update Purchase
  { path: "updatePurchase/:id", component: UpdatePurchaseComponent },
  //localhost 4208:// Voir Achat Products 
  { path: "voirAchat", component: VoirAchatComponent },
  //localhost 4208:// Purchase Clients Confirme 
  { path: "purchaseConfirme", component: PurchaseConfirmeComponent },
  //localhost 4208:// Return Purchase By Owners  
  { path: "returnResponse", component: ReturnResponsePurchaseComponent },
  //localhost 4208:// Update Response Owners By Clients  
  { path: "updateResponses/:id", component: UpdateResponseComponent },
  //localhost 4208:// Weather api  
  { path: "weatherApi", component: WeatherComponent },
  //localhost 4208:// Weather api  
  { path: "footApi", component: FootballComponent },
  //localhost 4208:// Response Table  
  { path: "responseTable", component: ResponseTableComponent },
  //localhost 4208:// Response Table Confirme  
  { path: "responseConfirme", component: ResponseConfirmeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
