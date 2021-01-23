export default function FormatNumber(props) {
        return(
            formatNumber(props.number)
        )
    }
function formatNumber (number){
    let formatNumber=(Number(number)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    let splitArray=formatNumber.split('.');
    if(splitArray.length>1){
        formatNumber=splitArray[0];
    }
    return(formatNumber);
}

