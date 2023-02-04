//////!!!!!!ДЛЯ КОПИРОВАНИЯ ГАЛПА В НОВЫЙ ПРОЕКТ СКОПИРУЕМ ФАЙЙЛЫ gulpfile.js, package.json, src папку,gulp папку


///основной модуль
import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';
////импорт путей 
import{ path } from './gulp/config/path.js';
import{ plugins } from './gulp/config/plugins.js';


////передаём значение глобальную перменную
global.app={
    isBuild:process.argv.includes('--build'),
    isDev:!process.argv.includes('--build'),
    path:path,
    gulp:gulp,
    plugins:plugins
}
////импортируем задачу
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf } from './gulp/tasks/fonts.js';
import { fontStyle } from './gulp/tasks/fonts.js';
import { ttfToWoff } from './gulp/tasks/fonts.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js'


/////функция наблюдателя 
function watcher(){
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}
////Последовательность обратко шрифтов
// const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);


const mainTaskes =gulp.series(otfToTtf,ttfToWoff ,fontStyle , gulp.parallel(copy, html , scss, js, images));
/////построение сценария выполнения задачи
const dev =gulp.series(reset, mainTaskes, gulp.parallel(watcher,server));
const build = gulp.series(reset, mainTaskes);///режим продакшина 
const deployZip = gulp.series(reset, mainTaskes, zip);
const deployFTP = gulp.series(reset, mainTaskes, ftp);

////експортируем сценапии
export { dev }
export { build }
export { deployZip}
export { deployFTP}
////выполняем сценарий по умолчанию 
gulp.task('default', dev);

gulp.task('deploy',function(){
    return gulp.src('./dist/**/*')
    .pipe(ghPages());
})