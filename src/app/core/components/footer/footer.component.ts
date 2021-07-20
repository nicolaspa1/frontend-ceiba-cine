import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public copyright: any;
  fecha :Date = new Date();
  constructor() { 
    this.copyright = {nombre: 'Nicolas', apellido: 'Pinzon' , fecha : this.fecha };

  }

  ngOnInit(): void {
  }

}
