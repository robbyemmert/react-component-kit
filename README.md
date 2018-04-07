# react-component-kit

Quickly build powerful React component libraries without worrying about tooling.

## Features
- React JS
- Typescript
- Sass
- Webpack
- Automatically outputs the following resources:
    - Minified stylesheet bundle
    - Minified javascript bundle
    - Typescript definitions, so your users will get intellisense when using this library in most editors, whether or not they are using typescript.

## To Use
1. Clone this repository. 
2. Rename and link it to your own repository if you wish. (Check `package.json` and `tsconfig.json`)
3. `cd` into the root folder, and run `npm install`
4. Start the development server with `npm start`
5. Compile the distributable resources with `npm run build`
6. All assets will be compiled to the `/build` folder. Upload them to NPM or distribution method of your choice.