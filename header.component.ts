import { Component, OnInit } from '@angular/core';
import * as siteData from '../../data.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  standalone: true,
  imports: [CommonModule],
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headerData: any = (siteData as any).default;
}
