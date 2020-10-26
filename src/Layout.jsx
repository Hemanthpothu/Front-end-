import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Section1 from './Secton1';
import Section2 from './Section2';
import Aside from './Aside';
let item1=
{
    // color: 'red',
    gridColumnStart:'1',
    gridColumnEnd:'3',
    backgroundColor: 'rgb(68, 67, 67)',
    // width:'100%',
    // height:"100px",
};
let item3=
{
    // color: 'red',
    gridRowStart:'3',
    gridRowEnd:'5',
    // gridRowGap: '10px',
};
let item2=
{
    // color: 'red',
    gridColumnStart:'1',
    gridColumnEnd:'3',
};


function Layout()
{
    return (
        <>
        <div className="grid-container">
  <div className="grid-item" style={item1}>
      <Header></Header>
  </div>
  <div className="grid-item" style={item2}>
  <Navbar></Navbar>
  </div>
  <div className="grid-item" style={item3}>
  <Aside></Aside>
  </div>
  <div className="grid-item" >
  <Section1></Section1>
  </div>
  <div className="grid-item">
  <Section2></Section2>
  </div>
  {/* <div className="grid-item" style={item6}>6</div> */}
</div>
        </>
    );

}
export default Layout;