import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  perfils = ['foto1', 'foto2', 'foto3'];

  onClick(item){
    
    const perfil = this.perfils.splice(item, 1);
    console.log(this.perfils);
  }

  constructor() { }

  ngOnInit() {

  }

}
