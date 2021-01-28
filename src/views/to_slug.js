function to_slug(str) {

    str = str.toLowerCase();
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
    str = str.replace(/([^0-9a-z-\s])/g, '');
    str = str.replace(/(\s+)/g, '-');
    str = str.replace(/^-+/g, '');
    str = str.replace(/-+$/g, '');

    return str;
}

function formatNumber (number){
    let formatNumber=(Number(number)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    let splitArray=formatNumber.split('.');
    if(splitArray.length>1){
        formatNumber=splitArray[0];
    }
    return(formatNumber);
}


function sortPrice(data,value,low,high) {
    let dataTemp = []
    dataTemp = data.sort(function(a, b) {
        if (value===low){
            return a.price - b.price;
        }else if (value===high) {
            return b.price - a.price;
        }
        return null;
    });
    return dataTemp;
}

function CheckBag(array ,value) {
    let  x =false ;
    array.map((props)=>{
        console.log(props.productName , value)
        if (props.productName===value){
            x=true;
        }
        return x;
    })
    return  x;
}
function CheckIdCard(array ,value) {
    let x = -1;
    array.map((props,index)=>{
        console.log(props.productName , value)
        if (props.productName===value){
            x=index;
        }
        return x;
    })
    return x;
}


export {to_slug,formatNumber,sortPrice,CheckBag,CheckIdCard}