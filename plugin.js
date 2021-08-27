const gulpImagemin = require('gulp-imagemin');
const gulp = require('gulp');

function plugin(program) {
    return function (done) {
        return gulp.src([program.output + "/**/*.{png,jpg,gif,ico}"])
            .pipe(gulpImagemin({
                optimizationLevel: program['imagemin-optimizationLevel'] || 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
                progressive: program['imagemin-quality'] || true, //类型：Boolean 默认：false 无损压缩jpg图片
                interlaced: program['imagemin-interlaced'] || true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
                multipass: program['imagemin-multipass'] || true, //类型：Boolean 默认：false 多次优化svg直到完全优化
                svgoPlugins: [{ removeViewBox: false }],//不要移除svg的viewbox属性
            }))
            .pipe(gulp.dest(program.output));
    }
}

module.exports = {
    plugin
}