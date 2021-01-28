
let images =[];

function importAll(r) {
    let link = {}
    r.keys().map((item, index) => {
        images.push({ id:index ,name:item.replace('./',''),src:r(item)})
        link[item.replace('./', '')] = r(item);
        return null;
        });
    return link;
    }
const  link = importAll(require.context('../../static/img/imgProduct', false, /\.(png|jpe?g|svg)$/));
export {images ,link}