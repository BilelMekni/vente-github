import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { OfferComponent } from './components/offer/offer.component';
import { ProductsComponent } from './components/products/products.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { ProduitComponent } from './components/produit/produit.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackComponent } from './components/back/back.component';
import { HomeComponent } from './components/home/home.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { SignupClientsComponent } from './components/signup-clients/signup-clients.component';
import { SignupOwnerComponent } from './components/signup-owner/signup-owner.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { PrinicipaleComponent } from './components/prinicipale/prinicipale.component';
import { PubliciteComponent } from './components/publicite/publicite.component';
import { SoldesComponent } from './components/soldes/soldes.component';
import { TechnologieComponent } from './components/technologie/technologie.component';
import { SportComponent } from './components/sport/sport.component';
import { BannerComponent } from './components/banner/banner.component';
import { CarsoulComponent } from './components/carsoul/carsoul.component';
import { GenderPipe } from './pipes/gender.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ContactComponent } from './components/contact/contact.component';
import { SearchComponent } from './components/search/search.component';
import { InformationAdminComponent } from './components/information-admin/information-admin.component';
import { InformationOwnerComponent } from './components/information-owner/information-owner.component';
import { InformationClientComponent } from './components/information-client/information-client.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { OwnerTableComponent } from './components/owner-table/owner-table.component';
import { ClientTableComponent } from './components/client-table/client-table.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { PublicationOwnerComponent } from './components/publication-owner/publication-owner.component';
import { PublicationClientComponent } from './components/publication-client/publication-client.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ContactTableComponent } from './components/contact-table/contact-table.component';
import { LigneComponent } from './components/ligne/ligne.component';
import { ProductsConfirmeComponent } from './components/products-confirme/products-confirme.component';
import { ShopDetailComponent } from './components/shop-detail/shop-detail.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { PublicationsTableComponent } from './components/publications-table/publications-table.component';
import { ConfirmePublicationsComponent } from './components/confirme-publications/confirme-publications.component';
import { AutresDetailsComponent } from './components/autres-details/autres-details.component';
import { PublicationsClientsTableComponent } from './components/publications-clients-table/publications-clients-table.component';
import { PurchaseProductsComponent } from './components/purchase-products/purchase-products.component';
import { VoirAchatComponent } from './components/voir-achat/voir-achat.component';
import { PurchaseTableComponent } from './components/purchase-table/purchase-table.component';
import { PurchaseConfirmeComponent } from './components/purchase-confirme/purchase-confirme.component';
import { ReturnResponsePurchaseComponent } from './components/return-response-purchase/return-response-purchase.component';
import { MyFilterPipe } from './pipes/my-filter.pipe';
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

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HeaderComponent,
    FeaturedComponent,
    CategoriesComponent,
    OfferComponent,
    ProductsComponent,
    SubscribeComponent,
    ProduitComponent,
    VendorComponent,
    FooterComponent,
    BackComponent,
    HomeComponent,
    SignupAdminComponent,
    SignupClientsComponent,
    SignupOwnerComponent,
    LoginComponent,
    AdminComponent,
    PrinicipaleComponent,
    PubliciteComponent,
    SoldesComponent,
    TechnologieComponent,
    SportComponent,
    BannerComponent,
    CarsoulComponent,
    GenderPipe,
    ContactComponent,
    SearchComponent,
    InformationAdminComponent,
    InformationOwnerComponent,
    InformationClientComponent,
    AdminTableComponent,
    OwnerTableComponent,
    ClientTableComponent,
    AddProductComponent,
    PublicationOwnerComponent,
    PublicationClientComponent,
    ProductsTableComponent,
    ContactTableComponent,
    LigneComponent,
    ProductsConfirmeComponent,
    ShopDetailComponent,
    PublicationsTableComponent,
    ConfirmePublicationsComponent,
    AutresDetailsComponent,
    PublicationsClientsTableComponent,
    PurchaseProductsComponent,
    VoirAchatComponent,
    PurchaseTableComponent,
    PurchaseConfirmeComponent,
    ReturnResponsePurchaseComponent,
    MyFilterPipe,
    WeatherComponent,
    FootballComponent,
    ResponseTableComponent,
    ResponseConfirmeComponent,
    UpdateAdminComponent,
    UpdateOwnersComponent,
    UpdateClientComponent,
    UpdateProductsComponent,
    UpdatePublicationsComponent,
    UpdatePublClientComponent,
    UpdatePurchaseComponent,
    UpdateResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
