let pay= []
let localPay = localStorage.getItem('localPay')

if (localPay!==null){
    pay=JSON.parse(localPay);
}

export {pay}
