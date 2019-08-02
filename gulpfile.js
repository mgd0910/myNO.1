var gulp = require("gulp");


// 监听sasa
// let sass=require("gulp-sass");


//复制

//复制html文件
gulp.task("copy-html", async () => {
    //gulp.src("index.html").pipe(gulp.dest("dist"));
    gulp.src("*.html")
        .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One"));
});

//复制php文件
gulp.task("copy-php", async () => {
    gulp.src("*.php")
        .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One"));
});
//复制js文件
gulp.task("copy-js", async () => {
    gulp.src("js/*.js")
        .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\js"));
});
// 复制css文件
gulp.task("copy-css", async () => {
    gulp.src("css/*.css")
        .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\css"));
});
//复制图片
// gulp.task("img", async () => {
//     gulp.src("img/*.{jpg,png,gif")
//         .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\img"));
// });
gulp.task("img", async () => {
    gulp.src("img/**/*")
        .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\img"));
});
// gulp.task("imgs", async () => {
//     gulp.src("imgs/*.{jpg,png,gif")
//         .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\imgs"));
// });
gulp.task("imgs", async () => {
    gulp.src("imgs/**/*")
        .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\imgs"));
});
//复制字体文件
gulp.task("copy-font", async () => {
    gulp.src("font/*.{eot,svg,ttf,woff,woff2}")
        .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\font"));
});
gulp.task("copy-fonts", async () => {
    gulp.src("fonts/*.{eot,svg,ttf,woff,woff2}")
        .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\fonts"));
});

//复制全部文件

// gulp.task("copyall", async () => {
//     gulp.src("./**/*")
//         .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One"));
// });

//监听
gulp.task("watchall", async () => {
    //监听html文件
    gulp.watch("*.html", async () => {
        gulp.src("*.html").pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One"));
    });
    //监听php文件
    gulp.watch("*.php", async () => {
        gulp.src("*.php").pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One"));
    });
    //监听js文件
    gulp.watch("js/*.js", async () => {
        gulp.src("js/*.js").pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\js"));
    });
    //监听图片
    gulp.watch("img/**/*", async () => {
        gulp.src("img/**/*").pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\img"));
    });
    gulp.watch("imgs/**/*", async () => {
        gulp.src("imgs/**/*").pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\imgs"));
    });
    //监听字体
    gulp.watch("font/*.{eot,svg,ttf,woff,woff2}", async () => {
        gulp.src("font/*.{eot,svg,ttf,woff,woff2}").pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\font"));
    });
    gulp.watch("fonts/*.{eot,svg,ttf,woff,woff2}", async () => {
        gulp.src("fonts/*.{eot,svg,ttf,woff,woff2}").pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\fonts"));
    });
    //监听css文件
    gulp.watch("css/*.css", async () => {
        gulp.src("css/*.css").pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\css"));
    });

    //监听SASS
    // gulp.watch("sass/**/*", async () => {
    //     gulp.src("sass/**/*")
    //     .pipe(sass());
    //     .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\css"));
    // });
});



// //同时拷贝两个文件夹,拷贝到dist文件夹下的data中
// gulp.task("data", async () => {
//     gulp.src(["xml/*.xml", "json/*.json"])
//         .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\data"));
// });

// //拷贝文件时过滤文件,在json文件中新建一个json为test.json
// gulp.task("data", async () => {
//     gulp.src(["xml/*.xml", "json/*.json", "!json/test.json"])
//         .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\data"));
// });

// // 如何将以上命令一次性执行，采用bulid命令
// gulp.task("bulid",async () => {
//    gulp.src("Number1/**/*").pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One"));
//     console.log("ok");
// });

// //合并文件
// let concat = require('gulp-concat');
// // gulp.task("concatfile", async () => {
// //     gulp.src(['js/index.js', 'js/goods.js'])
// //         .pipe(concat('tools.js'))
// // .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\js"));
// // });

// //压缩文件
// let uglify = require('gulp-uglify');
// // 合并并且压缩

// // gulp.task("concatanduglify", async () => {

// //     gulp.src(['js/index.js', 'js/goods.js'])
// //         .pipe(concat('tools.js'))
// //         .pipe(uglify())
// // .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\js"));
// // });


// // 合并并且压缩,重新起名字
// let rename = require('gulp-rename');
// // gulp.task("concatanduglifyandrename",async ()=>{
// // 	gulp.src(['js/index.js','js/goods.js'])
// // 	.pipe(concat('tools.js'))
// // 	.pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\js"))
// // 	.pipe(uglify())
// // 	.pipe(rename('tools.min.js'))
// // 	.pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\js"));
// // });

// // 压缩css
// let mincss = require('gulp-minify-css');
// // gulp.task("minifycss",async ()=>{
// // 	gulp.src("css/*.css")
// // 	.pipe(mincss())
// // 	.pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\css"));
// // });

// //压缩图片
// let minimg = require('gulp-imagemin');
// // gulp.task("minimg",async ()=>{
// // 	gulp.src("img/*.{jpg,png}")
// // 	.pipe(minimg())
// // 	.pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\img"));
// // });

// gulp.task("watchallTo", async () => {
//     gulp.watch('*.html', async () => {
//         gulp.src('*.html')
//             .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One"));
//     })

//     gulp.watch(['js/index.js', 'js/goods.js'], async () => {
//         gulp.src(['js/index.js', 'js/goods.js'])
//             .pipe(concat('tools.js'))
//             .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\js"))
//             .pipe(uglify())
//             .pipe(rename('tools.min.js'))
//             .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\js"));
//     });

//     gulp.watch("css/*.css", async () => {
//         gulp.src("css/*.css")
//             .pipe(mincss())
//             .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\css"));
//     })

//     gulp.watch("img/*.{jpg,png}", async () => {
//         gulp.src("img/*.{jpg,png}")
//             .pipe(minimg())
//             .pipe(gulp.dest("E:\\phpStudy\\WWW\\Web1905\\One\\img"));
//     })

// });
