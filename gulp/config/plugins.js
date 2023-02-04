import replace from "gulp-replace";/////замена фалов а конкретко картинок 
import plumber from "gulp-plumber";////обработка ошибок
import notify from "gulp-notify";//// сообщения (подсказки)
import browsersync from "browser-sync";/////Локальный сервер 
import newer from "gulp-newer";///Проверяет обновление картинки 
import ifPlugin from "gulp-if";////условие ветвления 

export const plugins = {
    replace:replace,
    plumber:plumber,
    notify:notify,
    browsersync:browsersync,
    newer:newer,
    if:ifPlugin
}