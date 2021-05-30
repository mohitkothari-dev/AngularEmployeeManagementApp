import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [{
    name: "",
    email: "",
    contact: ""
  }];

  onCreateUser(uname: { value: any; }, uemail: { value: any; }, ucontact: { value: any; }){
    console.log("Clicked");
    this.users.push({
      name:uname.value,
      email:uemail.value,
      contact:ucontact.value
    });
    uname.value = "";
    uemail.value = "";
    ucontact.value = "";
  }

  /*onDeleteAll(){
    this.users.splice(this.users.length - this.users.length);
  }*/

  onDeleteEmp(item: any){
    this.users.splice(item, 1);
  }

  onPromoteEmp(item: any){
    alert("Employee has been promoted");
  }

  onResignedEmp(item: any){
    alert("Employee has resigned");
  }
}
