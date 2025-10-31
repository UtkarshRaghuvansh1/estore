# Configure Tailwind css

```js
npm i tailwindcss  @tailwindcss/postcss postcss --force
```

- Create a .postcssrc.json in root directory
- In this file we will setup the pluggins for tailwind css

```json
{
  "plugins": {
    "@tailwindcss": {}
  }
}
```

- Import tailwind css to global style.css

```css
@import "tailwindcss";
```

# Creating Header component using tailwind CSS

```shell
ng g c component/header
```

- Since every component is a standalone component in Angular
- To use that component in other we need to import it to that component
- To use Header comp in App comp

```ts
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./component/header/header.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "estore";
}
```

- add the custom header tag to app.comp.html

```html
<app-header></app-header>
```

- Layout for Header

```html
<div class="w-full shadow-lg shadow-gray-500/50 bg-gray-900">
  <div class="flex">
    <div class="text-white ml-2 p-3 w-[23%]">
      <h1 class="text-xl font-bold">eStore</h1>
    </div>
  </div>
</div>
```

### Search bar in header component

- install fontawesome

```shell
npm install @fortawesome/angular-fontawesome@1.0.0 --save --legacy-peer-deps
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons --save
```

- import fontawsome in header component

```ts
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
```

- add layout and styling for search

```html
<div class="w-[50%] p-0 items-center bg-white my-4 h-[2.5rem] flex items-center">
  <input class="w-[90%] h-full inline-block border-none outline-none px-3" type="text" placeholder="Search..." />
  <button class="w-[10%] h-10 bg-gray-300 flex items-center justify-center">
    <fa-icon [icon]="faSearch"></fa-icon>
  </button>
</div>
```

### Category dropdown in search bar

- before input

```html
<select name="" id="" class="w-auto max-w-[30%] h-full bg-gray-300 border-none font-semibold px-2 pr-5">
  <option value="">Men</option>
  <option value="">Women</option>
  <option value="">Kids</option>
</select>
```

### Adding login links, wishlist, cart icon

```html
<div class="flex items-center w-[27%] gap-6 justify-end h-full">
  <div class="flex items-center gap-2 text-white">
    <fa-icon [icon]="faUserCircle" class="text-[1.3em]"></fa-icon>
    <h5>
      <a href="#" class="text-white no-underline hover:underline">Sign in</a>
    </h5>
    <span>/</span>
    <h5>
      <a href="#" class="text-white no-underline hover:underline">Register</a>
    </h5>
  </div>
  <div class="flex items-center gap-4 text-white text-[1.3em] ">
    <fa-icon [icon]="faHeart"></fa-icon>
    <fa-icon [icon]="faShoppingCart"></fa-icon>
  </div>
</div>
```

## Adding a category navigation

- catnavigation component html

```html
<div class="bg-gray-800 border-t border-gray-600">
  <ul class="flex">
    <li class="list-none inline-block mx-4 py-1.5 h-10 relative group">
      <a href="#" class="text-white text-sm font-bold no-underline relative pb-0.5"
        >Men
        <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
      </a>
    </li>
    <li class="list-none inline-block mx-4 py-1.5 h-10 relative group">
      <a href="#" class="text-white text-sm font-bold no-underline relative pb-0.5"
        >Women
        <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
      </a>
    </li>
    <li class="list-none inline-block mx-4 py-1.5 h-10 relative group">
      <a href="#" class="text-white text-sm font-bold no-underline relative pb-0.5">Kids <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span></a>
    </li>
    <li class="list-none inline-block mx-4 py-1.5 h-10 relative group">
      <a href="#" class="text-white text-sm font-bold no-underline relative pb-0.5">Best Offers <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span></a>
    </li>
  </ul>
</div>
```
