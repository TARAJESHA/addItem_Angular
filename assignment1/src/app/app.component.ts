 
import {Component } from '@angular/core';    
    
export class MyItems {    
  Value: string;    
  constructor(Value:string)    
  {    
    this.Value = Value;    
  }    
}    
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'Working With Array In Angular 5';    

  myItems: MyItems[] = new Array();    
  IsForUpdate: boolean = false;    
  newItem: any = {};    
  updatedItem: any;    
   
  AddItem() {    
    this.myItems.push(    
      this.newItem    
    );    
    this.newItem = {};    
  }  
  EditItem(i:any) {  
    this.newItem.Value = this.myItems[i].Value;  
    this.updatedItem = i;  
    this.IsForUpdate = true;  
  }  
     
  UpdateItem() {  
    let data = this.updatedItem;  
    for (let i = 0; i < this.myItems.length; i++) {  
      if (i == data) {  
        this.myItems[i].Value = this.newItem.Value;  
      }  
    }  
    this.IsForUpdate = false;  
    this.newItem = {};  
  }      
  DeleteItem(i:any) {  
    this.myItems.splice(i, 1);  
  }  
  }
 

 
