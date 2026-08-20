import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import * as siteData from '../../data.json';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the brand logo with correct alt text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logoImg = compiled.querySelector('.nav-logo-img') as HTMLImageElement;
    expect(logoImg).toBeTruthy();
    expect(logoImg.src).toContain(component.headerData.logo);
    expect(logoImg.alt).toBe(`${component.headerData.title} logo`);
  });

  it('should render the MENU trigger button pointing to offcanvasNav', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const menuBtn = compiled.querySelector('.nav-menu-btn') as HTMLButtonElement;
    expect(menuBtn).toBeTruthy();
    expect(menuBtn.getAttribute('data-bs-target')).toBe('#offcanvasNav');
    expect(menuBtn.textContent).toContain('MENU');
  });

  it('should render the offcanvas panel with correct labels', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const offcanvas = compiled.querySelector('#offcanvasNav') as HTMLElement;
    expect(offcanvas).toBeTruthy();
    
    const title = compiled.querySelector('#offcanvasNavLabel') as HTMLElement;
    expect(title).toBeTruthy();
    expect(title.textContent?.trim()).toBe(component.headerData.title);
  });

  it('should dynamically render menu items from site data', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const menuItems = compiled.querySelectorAll('.offcanvas-nav li a');
    const mockMenu = (siteData as any).default.menu;
    
    expect(menuItems.length).toBe(mockMenu.length);
    menuItems.forEach((linkEl, index) => {
      const link = linkEl as HTMLAnchorElement;
      expect(link.getAttribute('href')).toBe(mockMenu[index].url);
      expect(link.textContent?.trim()).toBe(mockMenu[index].label);
    });
  });
});

