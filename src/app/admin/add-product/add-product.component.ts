import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { MenuService } from 'src/app/services/menu.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  productForm = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
    price: [null, Validators.required],
    unitInStock: [null, Validators.required],
    ratings: null,
    category: [null, Validators.required],
    createdAt: [new Date(), Validators.required],
    updatedAt: [
      new Date(),
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),
    ],
  });

  categories: any;

  hasUnitNumber = false;

  constructor(
    private fb: FormBuilder,
    private _menuService: MenuService,
    private _snackBar: MatSnackBar,
    public _route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    if(this._route.snapshot.url.length>1){
      this._menuService.getProductById(this._route.snapshot.params["id"]).subscribe(
        (data) => {
          this.productForm.patchValue(data[0]);
          console.log(this.productForm);
        },
        (error) => {
          console.log(error);
        }
      );
    }else{
      this._menuService.getCategory().subscribe(
        (data) => {
          this.categories = data;
          console.log(this.categories);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  onSubmit(): void {
    console.log(this.productForm.value);
    if(this._route.snapshot.params["id"]){
      if (this.productForm.valid) {
        this._menuService.editProduct(this.productForm.value).subscribe(
          (data) => {
            console.log(data);
            this._snackBar.open('Product updated', 'OK', {
              duration: 2000,
            });
            // this.productForm.reset();
          },
          (error) => {
            console.log(error);
            this._snackBar.open(error.error.message, 'OK', {
              duration: 2000,
            });
            this.productForm.reset();
          }
        );
      }
    }else{
      if (this.productForm.valid) {
        this._menuService.addProducts(this.productForm.value).subscribe(
          (data) => {
            console.log(data);
            this._snackBar.open('Product Added', 'OK', {
              duration: 2000,
            });
            // this.productForm.reset();
          },
          (error) => {
            console.log(error);
            this._snackBar.open(error.error.message, 'OK', {
              duration: 2000,
            });
            this.productForm.reset();
          }
        );
      }
    }
  
    console.log('out of if condition');
  }

}
