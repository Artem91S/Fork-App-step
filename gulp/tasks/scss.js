import dartSass from "sass";////сам процеосор сас
import gulpSass from "gulp-sass";//// метод запуска сасс
import rename from "gulp-rename";/////переименование файлов 
import cleanCss from "gulp-clean-css";/////сжимание CSS файлов 
import webpcss from "gulp-webpcss";/////выбор WEBP изображений не запуститься без webp-converter@2.2.3
import autoprefixer from "gulp-autoprefixer";////добавление вендерных префиксов (web kitt i td)
import groupCssMediaQueries from "gulp-group-css-media-queries"/////групирование медиа запросов 
const sass = gulpSass(dartSass); ////запускаем сасс

export const scss = () =>{
    return app.gulp.src(app.path.src.scss, {sourcemaps: app.isDev})/////собираем общий файл с несольких частей 
            .pipe(app.plugins.plumber(app.plugins.notify.onError({
                    title: "SCSS",
                     message:"Error: <%= error.message %>" 
                    })))
            .pipe(sass({outputStyle: "expanded" }))
            .pipe(app.plugins.replace(/@img\//g, '../img/'))
          
            .pipe(
                app.plugins.if(
                app.isBuild,
                groupCssMediaQueries())
            )
            .pipe(
                app.plugins.if(
                app.isBuild,
                webpcss(
                {
                    webpClass: ".webp",
                    noWebpClass:".no-webp"
                }
            )))
           .pipe(
            app.plugins.if(
            app.isBuild,
            autoprefixer({
                grid:true,
                overrideBrowserslist:["last 3 versions"],
                cascade: true
           })))
           /////Если нам необходимо посмотреть на не сжатый файл 
        //    .pipe(app.gulp.dest(app.path.build.css))
           .pipe(
            app.plugins.if(
            app.isBuild,
            cleanCss())
           )
           .pipe(rename({
                extname: ".min.css"
           }))
           .pipe(app.gulp.dest(app.path.build.css))
           .pipe(app.plugins.browsersync.stream());
}