import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-app';
  name = ' Two-Strings in Data Binding ';
  imagepath = 'assets/template.png';
  text = 'This Image is for your Understanding';
  passValueToComponent(e: any) {
    console.log(e.target.value);
    this.defaultVal = e.target.value;
  }
  defaultVal = 'Text Here';
  buttonClick() {
    console.log();
  }
  passedAValue(e: any) {
    console.log(e.target.value);
  }

  defaultVal1 = '';
  check(defaultVal1: any) {
    if (defaultVal1 === 'submit') {
      return true;
    } else {
      return false;
    }
  }

  // isApproved = false;
  // approve(BooleanValue: boolean) {
  //   this.isApproved = BooleanValue;
  //   console.log(this.isApproved);
  // }
  // alphabets = ['a', 'b', 'c'];
  // isApproved = false;
  // approve(BooleanValue: boolean) {
  //   this.isApproved = BooleanValue;
  //   console.log(this.isApproved);
  // }
  // defaultNumber = 0;

  products = [
    {
      title: 'Milk',
      price: 'Rs.60',
    },
    {
      title: 'Panner',
      price: 'Rs.100',
    },
    {
      title: 'Milk Shake',
      price: 'Rs.120',
    },
    {
      title: 'Butter Milk',
      price: 'Rs.60',
    },
  ];
  productname = '';
  productprice = '';
  boolval = true;
  productnumber = 0;
  search(productname: string) {
    for (let item of this.products) {
      if (item.title == productname) {
        this.productprice = item.price;
        this.boolval = true;
        console.log(this.productprice);
      } else {
        this.boolval = false;
      }
    }
  }
}
