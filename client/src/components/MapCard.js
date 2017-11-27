import React from "react";
import {Link} from "react-router-dom";
const MapCard =(props)=>{
    return(
                            // <!--Map Card -- >
        <div className="col-md-8 " style={{height: '100%', paddingLeft: '25px', position: 'relative', zIndex: '2'}}>
            <div className="resources-card" style={{height: '386px', background: "url('img/map.png')"}}>

                <Link to=" ">

                    {/* <!-- CLICK TO ENLARGE MAP --> */}
                                <div className="row">

                        {/* <!-- Resource --> */}
                                    <div className="col-md-4 " style={{height: '100%', paddingLeft: '10px', position: 'relative', zIndex: '2', top: '315px', left: '50px'}}>
                            <div className="resources-card" style={{ opacity: '0.8'}}>

                                <Link to="">
                                    <p style={{textAlign: 'center', padding: '10px 20px 10px 20px'}}>Click to enlarge map</p>
                                </Link>

                            </div>
                        </div>
                    </div>
                </Link>


            </div>
        </div>
    )
}

export default MapCard;