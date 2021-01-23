import React from "react";

import img1 from  'static/img/moreShoes/nike-mens-shoes-.jpg';
import img2 from  'static/img/moreShoes/womens-shoes-2.jpg';
import img3 from  'static/img/moreShoes/nike-kids-shoes-2.jpg';
import Button from "react-bootstrap/Button";
import 'static/website/css/slide/slideMore.css'



import {createBrowserHistory} from "history";
export const hist = createBrowserHistory();
class SlidesMore extends React.Component{
    constructor(props) {
        super(props);
        this.clickPath=this.clickPath.bind(this)
    }
    state = {
        slideIndex: 0,
    };
    clickPath = (path) =>{
        setTimeout(()=> window.location.href =(path) ,100)

    }
    render() {
        const slidesData = [
            {
                id: 1,
                button: "MEN'S",
                image:img1,
                path:'/locfuho/men'
            }, {
                id: 2,
                button: "WOMEN'S",
                image:img2,
                path:'/locfuho/woman'
            }, {
                id: 3,
                button: "KID'S",
                image:img3,
                path:'/locfuho/kid'
            },
        ];
        return(
            <>
                <div className='row' >
                        {slidesData.map((slide) =>
                                <div key={slide.id} className='col-12 col-lg-4 mb-4 moreShow'>
                                    <img  className='img-fluid box-shadow' src={slide.image} alt=''/>
                                    <Button outline="true" onClick={this.clickPath.bind(this ,slide.path)} className='more hvr-float-shadow' color="secondary">{slide.button}</Button>{' '}
                                </div>
                        )}
                </div>
        </>
        )
    }
}
export default SlidesMore;