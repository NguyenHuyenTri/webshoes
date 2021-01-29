
import {to_slug} from "views/to_slug";


function SearchProduct(search,data,row) {

    let x = [];
    data.map((prop) => {
        if (row==='brandName'){
            if ( (to_slug(prop.brandName)).indexOf(to_slug(search)) > -1 ) {
                x.push(prop)
            }
        }
        if (row==='productName'){
            if ( (to_slug(prop.productName)).indexOf(to_slug(search)) > -1 ) {
                x.push(prop)
            }
        }
        if (row==='gender'){
            if ( (to_slug(prop.gender)).indexOf(to_slug(search)) > -1 ) {
                x.push(prop)
            }
        }

        if (row===''){
            if ( (to_slug(prop.brandName)).indexOf(to_slug(search)) > -1 ) {
                x.push(prop)
            }else if ( (to_slug(prop.productName)).indexOf(to_slug(search)) > -1 ) {
                x.push(prop)
            }else if ( (to_slug(prop.gender)).indexOf(to_slug(search)) > -1 ) {
                x.push(prop)
            }
        }

        return null;
    })
    return x;
}

function SearchMany(find1 ,find2 ,data ) {
    let x = [];
    data.map((prop) => {
        if (to_slug(prop.brandName).indexOf(to_slug(find1))>-1&&to_slug(prop.gender).indexOf(to_slug(find2))>-1){
                x.push(prop)
        }else if (to_slug(prop.brandName).indexOf(to_slug(find1))<-1&&to_slug(prop.gender).indexOf(to_slug(find2))>-1){
                x.push(prop)
        }
        else if (to_slug(prop.brandName).indexOf(to_slug(find1))>-1&&to_slug(prop.gender).indexOf(to_slug(find2))<-1){
                x.push(prop)
        }
        return null
    })
    return x;
}


export  {SearchProduct,SearchMany};