import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GauOnlineShopping';
  products = [
  {productPicture:"download (1).jpg",productPrice:350,productDescription:"meroon Lacaste watch for ladies"},
  {productPicture:"download (2).jpg" ,productPrice:160,productDescription:"earth jewellery, lime in color"},
  {productPicture:"shopping.png" ,productPrice:100,productDescription:"black leather handbag"},
  {productPicture:"download.jpg" ,productPrice:599,productDescription:"gold with small diamonds"}];
  //{productPicture:"download (3).jpg" ,productPrice:130,productDescription:"disk Earring with a figure"}];
newCart:String='';
newDescription:string='';

totalAmt:any =0;
//newQnty:number=null;
newProduct=[]
newProd(product){
this.newProduct.push(product);
this.totalCartAmount(product.productPrice)

}
delete(newPro){
  let index=this.newProduct.indexOf(this.products)
  this.newProduct.splice(index,1)
  this.totalAmtSub(newPro.productPrice)
}
totalCartAmount(newPrice){
  this.totalAmt+=newPrice
}
 totalAmtSub(newPrice){
   this.totalAmt-=newPrice
}
}

 


