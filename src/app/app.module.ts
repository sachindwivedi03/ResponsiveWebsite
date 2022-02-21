import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const appRoutes : Routes = [
  {path: '', component: HomeBodyComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'services', component: ServicesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeBodyComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    BlogsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' }),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }