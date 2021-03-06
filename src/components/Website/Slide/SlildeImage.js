import React from "react";

import 'swiper/css/swiper.css';
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";


export default function  SlideImage({data}) {
    let history = useHistory();

    const  clickPath = (path) =>{
        history.push(path)

    }
    return(
        <>
            {data.length === null ?'':
                data.map( (index)=>{
                    return(
                        <div key={index} className='image-kid moreShow' style={{'backgroundImage':`url(${index.image})`}}
                        >
                            <h3 className="more-text"><strong style={{'fontSize':'30px','lineHeight': '.833333'}}>MATCH IT UP</strong></h3>
                            <Button outline="true" onClick={clickPath.bind(this ,index.path)}
                                    className='more hvr-float-shadow' color="secondary">{index.button}
                            </Button>{' '}
                        </div>
                    )
                })
            }

        </>
    )
}