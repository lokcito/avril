import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Object;
  _user: User;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }
  firstClick() {
    this.api.firstClick();
  }
  listUsers() {
  	this.api.getUsers().subscribe(data => {
  		this.users = data;
  		console.log(">>>", this.users);
  	});
  }
  createOne() {
  	this._user = new User();
  	this._user.id = 23;
  	console.log("pre new", this._user);
  	this.api.addUser(this._user).subscribe(data => {
  		console.log("response", data);
  	});
  }
}
