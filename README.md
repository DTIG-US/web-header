# web-header — Navigation Header Component

This submodule contains the `HeaderComponent` for the **IH Hand Sanitation** portal. It defines the navigation bar structure including company branding, logo, and an off-canvas primary menu.

- [CHANGELOG](CHANGELOG.md)
- [CLIFF NOTES](CLIFF_NOTES.md)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Usage](#usage)
- [Component API](#component-api)
- [Data Structure](#data-structure)
- [Dependencies](#dependencies)
- [Bootstrap Components & Directives](#bootstrap-components--directives)
- [Customization](#customization)
- [Testing](#testing)

---

## Overview

The `HeaderComponent` renders a responsive navigation bar containing:

- A **logo image** linked to the homepage
- A **toggle button** that opens an off-canvas side menu on mobile
- A **list of navigation menu items** driven by `data.json`

Files in this submodule:

| File | Purpose |
| --- | --- |
| `header.component.ts` | Component class — loads `data.json` and exposes `headerData` |
| `header.component.html` | Template — Bootstrap navbar, off-canvas menu, and nav links |
| `header.component.css` | Component-scoped styles |
| `header.component.spec.ts` | Unit tests (Karma + Jasmine) |

---

## Usage

Add the selector to your root application template (`app.html`):

```html
<app-header></app-header>
```

Import the component in your root `App` component (Angular v20+ standalone — no NgModule required):

```typescript
import { Component } from '@angular/core';
import { HeaderComponent } from './web-header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.html',
})
export class App {}
```

---

## Component API

```typescript
// header.component.ts
@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerData: any = (siteData as any).default;
}
```

> [!NOTE]
> `standalone: true` is the default in Angular v20+ and is **not** explicitly set in the decorator.

---

## Data Structure

The component reads `../../data.json` relative to `src/app/`. The expected shape for the header section:

```json
{
  "logo": "path/to/logo.png",
  "title": "Your App Title",
  "menu": [
    { "label": "Home", "url": "/home" },
    { "label": "About", "url": "/about" }
  ]
}
```

Adjust the file path and structure in `header.component.ts` to match your project's `data.json` location.

---

## Dependencies

- [Bootstrap 5](https://getbootstrap.com/) — navbar, off-canvas, and button components
- [@angular/common](https://angular.dev/api/common) — `CommonModule` for structural directives

---

## Bootstrap Components & Directives

The template uses the following Bootstrap classes and components:

| Class / Component | Role |
| --- | --- |
| `navbar` | Root navigation bar container |
| `navbar-brand` | Logo image with homepage link |
| `btn` | Toggle button for the off-canvas menu |
| `offcanvas` | Hidden sidebar revealed on mobile menu toggle |
| `offcanvas-header` | Title bar and close button inside the off-canvas panel |
| `btn-close` | Closes the off-canvas menu |
| `navbar-nav` | List container for menu items |
| `nav-item` | Individual menu item wrapper |
| `nav-link` | Clickable navigation link |

---

## Customization

- Modify `data.json` to change the logo, title, and menu items.
- Edit `header.component.css` to adjust branding colors, spacing, or typography.
- Ensure proper responsiveness and WCAG AA accessibility (color contrast, focus management, ARIA attributes) when making visual changes.

---

## Testing

Unit tests are located in `header.component.spec.ts` using Angular testing utilities and the Jasmine framework. Run all tests with:

```bash
ng test
```

The test suite verifies the component creates successfully (`should create`).
