import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductCategory } from 'src/app/models/product-category';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class MenuComponent implements OnInit {
  title='menu'
  categories:any;
  products:any;
  role:any;
  constructor( private _menuService: MenuService,
    public _tokenStorage: TokenStorageService,public _auth: AuthService) { }

  ngOnInit(): void {
    this._menuService.getCategory().subscribe(
      (data)=>{
        this.categories = data;
        console.log(this.categories);
      },
      (error)=>{console.log(error)}
    )
    if(this._auth.isLoggedIn()){
      this.role = this._tokenStorage.getUser().roles[0].roleType;
      }
  }

  productByCategory(category:ProductCategory){
    console.log(category);
  }

  getProduct(category:string){
    this._menuService.getProduct(category).subscribe(
      (data)=>{
        this.products = data;
        console.log(this.products);
      },
      (error)=>{console.log(error)}
    )
  }

}
