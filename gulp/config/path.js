////папки с путями 
const buildFolder = `./dist`;
const srcFolder =`./src`;
///папка с названием проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

export const path ={
    build:{
        js:`${buildFolder}/js/`,
        css:`${buildFolder}/css/`,
        html:`${buildFolder}/`,
        images:`${buildFolder}/img/`,
        fonts:`${buildFolder}/fonts/`,
        files:`${buildFolder}/files/`, 
    },
    src:{
        js:`${srcFolder}/js/app.js`,
        images:`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg:`${srcFolder}/img/**/*.svg`,
        scss:`${srcFolder}/scss/style.scss`,
        html:`${srcFolder}/*.html`,
        files:`${srcFolder}/files/**/*.*`, 
    },
    watch:{
        js:`${srcFolder}/js/**/*.js`,
        scss:`${srcFolder}/scss/**/*.scss`,
        html:`${srcFolder}/**/*.html`,
        images:`${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,icon,webp}`,
        files:`${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder:buildFolder,
    srcFolder:srcFolder,
    rootFolder:rootFolder,
    ftp:`test`
}