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
