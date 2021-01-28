import React, {Component} from "react";
import ReactDOM from 'react-dom';
var images =[];
export default function () {

    function importAll(r) {

        r.keys().map((item, index) => {
            images.push(
                { id:index ,name:item.replace('./',''),src:r(item)}
            )
        });
        return images;
    }
    const image = importAll(require.context('./static/img/imgProduct', false, /\.(png|jpe?g|svg)$/));
    console.log(image)
    return(
        <>

            {
                images.map((props,index)=>{
                       return(
                           <img  key={index} src={props.src}/>
                       )
                })
            }
        </>
    )

}