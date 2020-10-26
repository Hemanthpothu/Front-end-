import React from 'react';
const line=
{
    width:'1100px',


};
function Section3() {
    return (
        <div className="section3">
            <div className="plane">
                <img src="images/plane.png" alt="hemanth.jpg"></img>
                <h2>Travel Ho</h2>
            </div>
            <div className="Theory">
                <p>
                    Travel Ho is an Indian ridesharing company offering services that include vehicle for hire and food delivery. The company is based in Bangalore, Karnataka, India and was developed by ANI Technologies Pvt. Ltd.
      </p>
            </div>
            <hr style={line}></hr>
            <div className="ceo">
            <h3>Founder/CEO</h3>
            <img src="images/linkedin.png" alt="hemanth.jpg"></img>
            </div>
            <h3 className="ceos">Suraj Saini</h3>
            <h3 className="ces"> Attached Documents</h3>
            <div className="docs">
                <img src="images/pdf.png" alt="hemanth.jpg"></img>
                <img src="images/doc.png" alt="hemanth.jpg"></img>
                <img src="images/pdf.png" alt="hemanth.jpg"></img>
                <img src="images/doc.png" alt="hemanth.jpg"></img>
                <img src="images/pdf.png" alt="hemanth.jpg"></img>
            </div>
            <hr style={line}></hr>
            <h3 className="ces">Action</h3>
            <div className="star">
                <img src="images/star.png" alt="hemanth.jpg"></img>
                <img src="images/star.png" alt="hemanth.jpg"></img>
                <img src="images/star.png" alt="hemanth.jpg"></img>
                <img src="images/star.png" alt="hemanth.jpg"></img>
                <img src="images/star.png" alt="hemanth.jpg"></img>
            </div>
            <div className="boxing">
                Comments
            </div>
            <div className="button">
            <button type="button" class="btn btn-primary" className="submit">Submit</button>
            <button type="button" class="btn btn-primary">Cancel</button>
            </div>
        </div>

    );
};
export default Section3;