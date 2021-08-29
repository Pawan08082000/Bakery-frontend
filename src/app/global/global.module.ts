import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalRoutingModule } from './global-routing.module';
import { HeaderComponent } from './header/header.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    GlobalRoutingModule,
    MatIconModule,
    MatToolbarModule,
    LayoutModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatGridListModule,MatCardModule,
    MatCarouselModule.forRoot()
  ],
  exports:[
    HeaderComponent,FooterComponent,LoaderComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class GlobalModule { }
