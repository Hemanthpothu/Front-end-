import React from 'react';
import Navbar from './Navbar';
import Aside from './Aside';
import Section3 from './Section3';
const items1=
{
    gridColumnStart:'1',
    gridColumnEnd:'3',
    backgroundColor: 'rgb(68, 67, 67)',
};
const items2=
{
    gridColumnStart:'1',
    gridColumnEnd:'3',

   

};
const items4=
{
    gridColumnStart:'1',
    gridColumnEnd:'3',

};
const items3=
{
    gridRowStart:'3',
    gridRowEnd:'4',
};

function Layout2()
{
    return(
        <div className="contain1">
            <div className="griditems" style={items1}>
            </div>
            <div className="griditems" style={items2}>
            <Navbar></Navbar></div>
            <div className="griditems" style={items3}>
            <Aside></Aside>
            </div>
            <div className="griditems">
                <Section3></Section3>
            </div>
        </div>
    );
};
export default Layout2;