import React from 'react';
const spacing =
{
    marginBottom: '60px',
};

function Section2() {
    return (
        <div className="bex1">
            <div className="bex">
                <div className="align1">
                    <div><img src="/images/plane.png" alt="hemanth3.jpg"></img></div>
                    <div> <h3>Travel Ho</h3></div>
                    <div><h4>Selected</h4></div>
                    <div><h4>View Detail</h4></div>
             
                </div>

            </div>
            <div className="bex" id="bex2">
                <div className="align1">
                    <div><img src="/images/earth.png" alt="hemanth3.jpg" className="section2img"></img></div>
                    <div><h3>Hastnirmit</h3></div>
                    <div><h4>Pending</h4></div>
                    <div> <h4>View Detail</h4></div>




                </div>

            </div>
            <div className="bex" id="bex3">
                <div className="align1">
                    <div><img src="/images/geolocation.png" alt="hemanth3.jpg" className="section2img"></img></div>
                    <div><h3>WorldView</h3></div>
                    <div> <h4>Rejected</h4></div>
                    <div><h4>View Detail</h4></div>





                </div>
            </div>
            <div className="bex">
                <div className="align1">
                    <div><img src="/images/globe.png" alt="hemanth3.jpg" className="section2img"></img></div>
                    <div> <h3>World </h3></div>
                    <div> <h4>Rejected</h4></div>
                    <div> <h4>View Detail</h4></div>




                </div>
            </div>
            <div className="bex" style={spacing}>
                <div className="align1">
                    <div> <img src="/images/earth.png" alt="hemanth3.jpg" className="section2img"></img></div>
                    <div><h3>Organic Food</h3></div>
                    <div><h4>Pending</h4></div>
                    <div> <h4>View Detail</h4></div>




                </div>
            </div>
        </div>
    );
};
export default Section2;