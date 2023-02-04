import webp from "gulp-webp";//// преобразование в формат webp
import imagemin from "gulp-imagemin";////сжатие изображений


export const images = () =>{
    return app.gulp.src(app.path.src.images)/////собираем общий файл с несольких частей 
            .pipe(app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "IMAGES",
                     message:"Error: <%= error.message %>" 
                    }))
             )
             .pipe(app.plugins.newer(app.path.build.images))
             .pipe(
                app.plugins.if(
                app.isBuild,
                webp()
                ))
             .pipe(
                app.plugins.if(
                app.isBuild,
                app.gulp.dest(app.path.build.images))
             )
             .pipe(
                app.plugins.if(
                app.isBuild,
                app.gulp.src(app.path.src.images))
             )
             .pipe(
                app.plugins.if(
                app.isBuild,
                app.plugins.newer(app.path.build.images))
             )
             .pipe(
                app.plugins.if(
                app.isBuild,
                imagemin({
                progressive:true,
                svgoPlugins:[{removeViewBox: false }],
                interlaced:true,
                optimizationLevel:3/// 0 to 7 tглавный показатель
             })))
             .pipe(app.gulp.dest(app.path.build.images))
             .pipe(app.gulp.src(app.path.src.svg))
             .pipe(app.gulp.dest(app.path.build.images))
             .pipe(app.plugins.browsersync.stream());
}