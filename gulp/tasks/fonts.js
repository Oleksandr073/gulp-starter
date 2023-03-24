import gulp from "gulp";
import { path } from "../config/path.js";

import fs from "fs";
import ttf2woff from "gulp-ttf2woff";
import ttf2woff2 from "gulp-ttf2woff2";

const fontsFilePath = `${path.srcFolder}/scss/fonts/_fonts.scss`;

export function ttfFonts() {
    return gulp.src(`${path.src.fonts}*.ttf`)
        .pipe(gulp.dest(path.build.fonts));
}

export function ttfToWoff() {
    return gulp.src(`${path.src.fonts}*.ttf`)
        .pipe(ttf2woff())
        .pipe(gulp.dest(path.build.fonts))
        .pipe(gulp.src(`${path.src.fonts}*.ttf`))
        .pipe(ttf2woff2())
        .pipe(gulp.dest(path.build.fonts));
}

export function fontStyle() {
    const fontFiles = fs.readdirSync(path.src.fonts);

    if (fontFiles.length) {
        fs.writeFileSync(fontsFilePath, "");
        fontFiles.forEach(writeFontFaceCss);
    }

    return gulp.src(path.srcFolder);
}

function writeFontFaceCss(fontFile) {
    const fontFileName = fontFile.slice(0, fontFile.lastIndexOf("."));

    const fontFamily = fontFileName.split("-")[0];
    const fontWeightName = fontFileName.split("-")[1].replace("Italic", "");
    const fontWeightValue = getFontWeightValue(fontWeightName);
    const isFontStyleItalic = fontFileName.endsWith('Italic');

    const fontFaceCss = `@font-face {\n\tfont-family: '${fontFamily}';\n\tfont-weight: ${fontWeightValue};\n\tfont-style: ${isFontStyleItalic ? 'italic' : 'normal'};\n\tsrc:\n\t\turl('../fonts/${fontFileName}.woff2') format('woff2'),\n\t\turl('../fonts/${fontFileName}.woff') format('woff'),\n\t\turl('../fonts/${fontFileName}.ttf') format('truetype');\n\tfont-display: swap;\n}\n\n`;

    fs.appendFileSync(fontsFilePath, fontFaceCss);
}

function getFontWeightValue(fontWeightName) {
    let fontWeightValue = 400;
    switch (fontWeightName.toLowerCase()) {
        case "thin": fontWeightValue = 100; break;
        case "extralight": fontWeightValue = 200; break;
        case "light": fontWeightValue = 300; break;
        case "medium": fontWeightValue = 500; break;
        case "semibold": fontWeightValue = 600; break;
        case "bold": fontWeightValue = 700; break;
        case "extrabold": fontWeightValue = 800; break;
        case "black": fontWeightValue = 900; break;
    }
    return fontWeightValue;
}