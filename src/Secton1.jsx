import React from 'react';
const card1=
{
    background:' rgb(82, 143, 224)',
};
const card2=
{
    background:'rgb(148, 224, 76)',
};
const card3=
{
    background:'rgb(228, 173, 102)',
};
const card4=
{
    background:'rgb(240, 129, 240)',
};
function Section1() {
    return (
        <div className="container3">
            <div className="card" style={card1}>
            <h2>50</h2>
            <h2>Total Recieved</h2>
            </div>
            <div className="card" style={card2}>
                <h2>45</h2>
                <h2>Reviewed</h2>
            </div>
            <div className="card" style={card3}>
                <h2>05</h2>
                <h2>Pending Review</h2>
            </div>
            <div className="card" style={card4}>
                <h2>23</h2>
                <h2>Selected</h2>
            </div>
        </div>
    );
};
export default Section1;