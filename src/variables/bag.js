let bag= [];
let localBag= localStorage.getItem('localBag')
if (localBag!==null){
    bag=JSON.parse(localBag)
}else{
    bag= [];
}
export {bag}