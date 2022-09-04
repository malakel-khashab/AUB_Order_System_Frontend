import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddingService } from '../adding.service';
import { Product } from '../Models/products';

@Component({
  selector: 'app-addnewproductpage',
  templateUrl: './addnewproductpage.component.html',
  styleUrls: ['./addnewproductpage.component.css']
})
export class AddnewproductpageComponent implements OnInit {
  addproductform = new FormGroup({
    product_Name:new FormControl('',[Validators.required]),
    product_Category: new FormControl('',[Validators.required]),
    product_Description: new FormControl('',[Validators.required]),
    product_Price: new FormControl('',[Validators.required])
  });
  products: Product[]=[];
  isImageSaved: boolean = false;
  cardImageBase64: string = '';
  CurrentImage: string ='';
  constructor(private route: Router,private addingService: AddingService) { }
  Back () :void  {
    this.route.navigate([''])
  }
  submit () {
    let product=new Product();
    product.product_Category = this.addproductform.controls.product_Category.value?.toString();
    product.product_Name = this.addproductform.controls.product_Name.value?.toString();
    product.product_Description = this.addproductform.controls.product_Description.value?.toString();
    product.product_Price = this.addproductform.controls.product_Price.value?.toString();
    product.product_Image=this.CurrentImage;
    this.addingService.addProductList(product).subscribe(data =>{});
    window.alert('You successfully added a new product');
  }
  txtChange(){
    console.log('form status  :'+this.addproductform.valid);
  }

  ngOnInit(): void {
  }
  CreateBase64String(fileInput: any) {   
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;         
          this.isImageSaved = true;
          this.CurrentImage=this.cardImageBase64;
          console.log(imgBase64Path);
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);debugger
    }
  }
}
