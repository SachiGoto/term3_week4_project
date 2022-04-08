import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  // heroImage = "https://greenwhale.eu/wp-content/uploads/2021/11/biciu-vasko-drobele-maisto-plevele-panaudojimas-1024x1024.jpg"

  // heroImage = "./assets/greenAroundTheWorld.jpg";
  heroImage = "./assets/heroImage_beewax_wrap.webp";
  svg="url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e);"

  ngOnInit(): void {
  }

}
