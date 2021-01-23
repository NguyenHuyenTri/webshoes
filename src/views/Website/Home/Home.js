import React from "react";
import SlidesMore from 'components/Website/Slide/slidesMore'
import SlideProduct from "components/Website/Slide/SlideProduct";
import SlidePost from "components/Website/Slide/SlideIndex";
import img1data from "../../../static/img/imgProduct/13-Bitis-Hunter-X-Festive -Washed-Green.jpg";
import img2data from "../../../static/img/imgProduct/02-air-zoom-tempo-next-running-shoe.jpg";
import img3data from "../../../static/img/imgProduct/03-air-force-1-07-craft-shoe.jpg";
import img4data from "../../../static/img/imgProduct/08-sb-zoom-stefan-janoski-rm-skate-shoe.jpg";
import img5data from "../../../static/img/imgProduct/05-zoom-fly-3-running-shoe.jpg";
const slidesData = [
    {
        id: 1,
        title: 'repellendus id ullam',
        label: 'Dolorem officiis temporibus.',
        image:img1data,
    }, {
        id: 2,
        title: 'excepturi consequatur est',
        label: 'Officia non provident dolor esse et neque.',
        image:img2data,
    }, {
        id: 3,
        title: 'eius doloribus blanditiis',
        label: 'Ut recusandae vel vitae molestiae id soluta.',
        image:img3data,
    }, {
        id: 4,
        title: 'nihil voluptates delectus',
        label: 'Qui vel consequatur recusandae illo repellendus.',
        image:img4data,
    }, {
        id: 5,
        title: 'nemo dolorem necessitatibus',
        label: 'Placeat odit velit itaque voluptatem.',
        image:img5data,
    },
    {
        id: 5,
        title: 'nemo dolorem necessitatibus',
        label: 'Placeat odit velit itaque voluptatem.',
        image:img5data,
    },
];

export default class Home extends React.Component{
    render() {
        return (
            <>
                <div className='body-website'>
                    <div className="ml-29 mr-29">
                        <SlidePost/>
                    </div>
                    <div className="post-slide">
                        <div className='ml-30 mr-30 mt-30'>
                            <div>
                                <div className="section-heading">
                                    <h5 className='text-dark'>The Latest & Greatest</h5>
                                </div>
                            </div>
                            <SlideProduct slidesData={slidesData}/>
                        </div>
                        <div className='ml-30 mr-30 mt-30'>
                            <div>
                                <div className="section-heading">
                                    <h5 className='text-dark'>More Shoes</h5>
                                </div>
                            </div>
                            <SlidesMore/>
                        </div>
                    </div>
                </div>
            </>
    )
        ;
    }
}