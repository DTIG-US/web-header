import { Component, OnInit } from '@angular/core';
import * as siteData from '../../data.json'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerData: any = (siteData as any).default;
  constructor() {

  }

}
