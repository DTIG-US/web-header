import { Component, OnInit } from '@angular/core';
import * as siteData from '../../data.json'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true as boolean,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerData: any = (siteData as any).default;
  constructor() {

  }

}
