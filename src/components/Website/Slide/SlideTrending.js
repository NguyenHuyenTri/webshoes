import React from "react";
import {Button} from "react-bootstrap";


export default function SlideTrending({slidesTrending}) {
    const  clickPath = (path) =>{
        setTimeout(()=> window.location.href =(path) ,100)

    }
        return(
            <>
                <div className='row' >
                    {slidesTrending.map((slide) =>
                        <div key={slide.id} className='col-12 col-lg-6 mt-1 mb-6 moreShow'>
                            <img  className='img-fluid box-shadow' src={slide.image} alt=''/>
                            <h3 className='more-text'>{slide.caption}</h3>
                            <Button outline="true" onClick={clickPath.bind(this ,slide.path)}
                                    className='more hvr-float-shadow' color="secondary">{slide.button}
                            </Button>{' '}
                        </div>
                    )}
                </div>
            </>
        )
}