import React from "react";
import SlidesMore from 'components/Website/Slide/slidesMore'
import SlideProduct from "components/Website/Slide/SlideProduct";
import SlidePost from "components/Website/Slide/SlideIndex";
import {dataScrollHome} from 'variables/slide'
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
                            <SlideProduct slidesData={dataScrollHome}/>
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