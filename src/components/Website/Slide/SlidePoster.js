import React from "react";
import {Button} from "react-bootstrap";

export default function  SlidePoster(props) {
    const styleMen ={
        position: 'relative',
        width:'100%',
        height:'100%',
    }
    const dataMen = props.dataMen;
    const dataMenMd = props.dataMenMd;
    return(
        <>
            <div className='mr-30 ml-30' >
                {dataMen.length===null ? '':
                    dataMen.map((index)=>{
                            return(
                                    <div key={index.id} style={styleMen} className='imageMen'>
                                        <img  src={index.image} alt=''/>
                                        <div className='buttonImg'>
                                            <Button className='btn-primary hvr-float-shadow'
                                            >{index.button}</Button>
                                        </div>
                                    </div>
                            )
                        })
                }
                {dataMenMd.length===null ? '':
                    dataMenMd.map((index)=>{
                        return(
                                <div key={index.id} style={styleMen} className='imageMen-md'>
                                    <img  src={index.image} alt=''/>
                                    <div className='buttonImg'>
                                        <Button  className='btn-primary hvr-float-shadow' >{index.button}</Button>
                                    </div>
                                </div>
                        )
                    })
                }
            </div>
        </>
    )
}