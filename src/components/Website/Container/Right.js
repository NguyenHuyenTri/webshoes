import React from "react";

export default function Right() {
    return(
        <div className="post-sidebar-area right-sidebar mt-30 mb-15 box-shadow">
            <div className="single-sidebar-widget p-30">
                <div className="section-heading">
                    <h5>BRANDS</h5>
                </div>
                <ul className="catagory-widgets">
                    <li><a href="/#"><span><i className="fa fa-angle-double-right"
                                             aria-hidden="true"></i> Life Style</span> <span>35</span></a></li>
                    <li><a href="/#"><span><i className="fa fa-angle-double-right" aria-hidden="true"></i> Travel</span>
                        <span>30</span></a></li>
                    <li><a href="/#"><span><i className="fa fa-angle-double-right" aria-hidden="true"></i> Foods</span>
                        <span>13</span></a></li>
                    <li><a href="/#"><span><i className="fa fa-angle-double-right" aria-hidden="true"></i> Game</span>
                        <span>06</span></a></li>
                    <li><a href="/#"><span><i className="fa fa-angle-double-right" aria-hidden="true"></i> Sports</span>
                        <span>28</span></a></li>
                    <li><a href="/#"><span><i className="fa fa-angle-double-right"
                                             aria-hidden="true"></i> Football</span> <span>08</span></a></li>
                    <li><a href="/#"><span><i className="fa fa-angle-double-right" aria-hidden="true"></i> TV Show</span>
                        <span>13</span></a></li>
                </ul>
            </div>
        </div>
    );
}