
# Header Component HTML

This is the HTML template file for the Angular component `HeaderComponent`. It defines the structure and layout of the header navigation bar for the application. The header contains a logo, a toggle button to open an off-canvas menu, and a list of menu items.

Click [here](/CHANGELOG.md) for the CHANGE LOG

Click [here](/CLIFF_NOTES.md) for the CLIFF NOTES

## Usage

To use this component in your Angular application, follow these steps:

1. Create a new component or use an existing one that will include the header. For example, you can add the following selector to include the `HeaderComponent`:

```html
<app-header></app-header>
```

2. Make sure to import and declare the `HeaderComponent` in the appropriate module:

```typescript
import { HeaderComponent } from 'path/to/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  // Other module configurations...
})
export class AppModule { }
```

3. To provide data for the header, the component uses a data file `data.json`, which should be placed in the correct location within your project's directory structure. The `data.json` file should contain the necessary data for the header, including the `logo`, `title`, and `menu` items. For example:

```json
{
  "logo": "path/to/logo.png",
  "title": "Your App Title",
  "menu": [
    { "label": "Home", "url": "/home" },
    { "label": "About", "url": "/about" },
    // Add more menu items as needed
  ]
}
```

4. In the `header.component.ts` file, the component reads the data from the `data.json` file and assigns it to the `headerData` property. Here's the TypeScript code for the `HeaderComponent`:

```typescript
import { Component } from '@angular/core';
import * as siteData from '../../data.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerData: any = (siteData as any).default;

  constructor() { }
}
```

## Dependencies

This component relies on the Bootstrap framework for styling and functionality. Make sure to include the required Bootstrap styles and scripts in your project for the component to work correctly.

## Components and Directives

The template uses the following Bootstrap components and directives:

- `navbar`: Represents the header navigation bar.
- `navbar-brand`: Displays the logo image with a link to the homepage.
- `btn`: The button element for the off-canvas menu toggle.
- `offcanvas`: Provides a hidden sidebar menu that appears when the toggle button is clicked.
- `offcanvas-header`: Displays the title and a close button in the off-canvas menu.
- `btn-close`: Closes the off-canvas menu when clicked.
- `navbar-nav`: Contains the list of menu items.
- `nav-item`: Represents a single item in the menu.
- `nav-link`: Represents a clickable link within the menu.

## Customization

You can customize the appearance and behavior of the header component by adjusting the Bootstrap classes and properties used in the template. Additionally, you can modify the `data.json` file to change the logo, title, and menu items according to your application's needs.

Remember to ensure proper responsiveness and accessibility when modifying the template or adding new features.

## Testing

The component is also provided with a test file, `header.component.spec.ts`, which includes unit tests for the `HeaderComponent`. These tests are written using the Angular testing utilities and Jasmine testing framework.

To run the tests, use the Angular CLI command:

```
ng test
```

This command will execute all the unit tests within the project, including those for the `HeaderComponent`. The tests in the `header.component.spec.ts` file check whether the component is created successfully (`should create`).

---

Please note that the actual file paths and data structure may vary depending on your Angular project's configuration and the specific location of the `data.json` file. Make sure to adjust the file paths and data access accordingly to ensure proper functionality of the `HeaderComponent`.
