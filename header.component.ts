import { Component } from '@angular/core';
import * as siteData from '../../data.json';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headerData: any = (siteData as any).default;
}
