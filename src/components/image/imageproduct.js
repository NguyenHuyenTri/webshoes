let img =[];
function importAll(r) {
    let src = {}
    r.keys().map((item, index) => {
        img.push({ id:index ,name:item.replace('./',''),src:r(item)})
        src[item.replace('./', '')] = r(item);
        return null;
    });
    return src;
}
const  src = importAll(require.context('../../static/img/all-image', false, /\.(png|jpe?g|svg)$/));
export {img ,src}