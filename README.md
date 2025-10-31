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
