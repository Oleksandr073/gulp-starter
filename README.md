# Project name

## Made with 🛠️

<img align="left" alt="HTML5" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"/>

<img align="left" alt="SASS SCSS" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"/>

<img align="left" alt="JavaScript" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"/>

<img align="left" alt="Gulp" height="35px" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp.png"/>

<img align="left" alt="Webpack" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/webpack/webpack.png"/>

<img alt="babel" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/babel/babel.png"/>

## Table of contents 📄

- [Project name](#project-name)
  - [Made with 🛠️](#made-with-️)
  - [Table of contents 📄](#table-of-contents-)
  - [Page 💻](#page-)
  - [Template 👇](#template-)
  - [Prerequisites 🔎](#prerequisites-)
  - [Installation 📦](#installation-)
  - [Usage 🔧](#usage-)
    - [Building a distribution version](#building-a-distribution-version)
    - [Running project in the development mode](#running-project-in-the-development-mode)
  - [File structure 📁](#file-structure-)

## Page 💻

https://project-name-page.netlify.app/

## Template 👇

https://www.figma.com/file/project-name-template

## Prerequisites 🔎

This project requires NodeJS and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```
npm -v && node -v
8.11.0
v16.16.0
```

## Installation 📦

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites-)

Create a repository from this template

Clone the repository on your local machine:

```
git clone https://github.com/your-username/your-project-name.git
cd your-project-name
```

To install and set up the packages, run:

```
npm i
```

## Usage 🔧

### Building a distribution version

```
npm run build
```

This task will create a distribution version of the project
inside your local `dist/` folder

### Running project in the development mode

```
npm run dev
```

This task will create a development version of the project
inside your local `dist/` folder whenever you change the code in the `src/` folder

## File structure 📁

```
gulp-template
|— dist
|— gulp
|    |— config
|    |    | path.js
|    |    | plugins.js
|    |— constants
|    |    | isBuild.js
|    |— tasks
|    |    | clean.js
|    |    | files.js
|    |    | fonts.js
|    |    | images.js
|    |    | svgSprite.js
|    |    | html.js
|    |    | js.js
|    |    | scss.js
|    |    | server.js
|— src
|    |— files
|    |    | example.mp4
|    |    | example.pdf
|    |    | ***
|    |— fonts
|    |    | Example-Bold.ttf
|    |    | Example-Regular.ttf
|    |    | Example-LightItalic.ttf
|    |    | Example-ExtraBoldItalic.ttf
|    |    | ***
|    |— images
|    |    |— example-section
|    |    |    | example.png
|    |    |    | example.jpg
|    |    |    | example.svg
|    |    |    | ***
|    |    | example.jpeg
|    |    | example.png
|    |    | ***
|    |— svgicons
|    |    | example-1.svg
|    |    | example-2.svg
|    |    | ***
|    |— html
|    |    | _head.html
|    |    | _header.html
|    |    | _footer.html
|    |    | _example.html
|    |    | ***
|    |— js
|    |    |— modules
|    |    |    | example.js
|    |    |    | ***
|    |    |— ***
|    |    | index.js
|    |— scss
|    |    |— basic
|    |    |    | _nulling.scss
|    |    |    | _visually-hidden.scss
|    |    |— components
|    |    |    | _body.scss
|    |    |    | _container.scss
|    |    |    | _main.scss
|    |    |    | ***
|    |    |— fonts
|    |    |    | _fonts.scss
|    |    |— utils
|    |    |    |— mixins
|    |    |    |    | _flexBasis.scss
|    |    |    |    | _fontSizeLineHeight.scss
|    |    |    |    | _media.scss
|    |    |    |    | ***
|    |    |    | _mixins.scss
|    |    |    | _placeholders.scss
|    |    |    | _variables.scss
|    |    | style.scss
|    index.html
| package-lock.json
| package.json
| gulpfile.js
| .gitignore
```