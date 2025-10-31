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
