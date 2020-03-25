import React from 'react';
import './static/css/shapesapp.css';

// Import internally developed components
import TabContainer from './TabContainer'
import Box from './shapes/box'
import Circle from './shapes/circle'
import Triangle from './shapes/triangle'

//Import Material-UI components
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';


//Box colors to be shown
//const colors =['#01579b','#bf360c','#ffd600','#1b5e20','#ec407a','#9e9e9e','#8d6e63','#37474f','#00e676','#18ffff','#7e57c2']
const colors =['LIGHTCORAL','LIGHTPINK','MOCCASIN','PALEGOLDENROD','PLUM','SLATEBLUE','SEAGREEN','STEELBLUE','DARKTURQUOISE','BURLYWOOD','PERU','SILVER','SLATEGRAY','MISTYROSE','ANTIQUEWHITE','ROSYBROWN','CORNFLOWERBLUE']


function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function BoxTabs() {

  const initcolor = 'STEELBLUE';
  const [value, setValue] = React.useState(0);
  const [boxes, setBoxs] = React.useState([{id:0,color:initcolor},{id:1,color:initcolor},{id:2,color:initcolor}]);
  const [currentcolor, setColor] = React.useState(initcolor);
  const [selectedboxidx, setSelect] = React.useState(-1);

  const _handleChange = (e, newval) => {
    setValue(newval);
  };
  
  //Randomly change the color uisng the color preset
  const _toggleColor = () => {
    let randomcolor = colors[Math.floor(Math.random()*colors.length)]; 
    setColor(randomcolor);

    if(selectedboxidx> -1 ){
     let modifiedboxes = [...boxes];
     modifiedboxes[selectedboxidx].color = randomcolor; 
     setBoxs(modifiedboxes);
    }
  };

//Add new box object to Boxes Array
  const _addBtn = () => {
    setBoxs(boxes => [...boxes, {id:boxes.length,color:currentcolor}]); 
  };
                      
  //Delete Box
  const _dltBtn = () => {
    //Set last box to be deleted
    var deleteidx= boxes.length-1;

    //Delete the selected box
    if(selectedboxidx> -1 )
      deleteidx=selectedboxidx;

    let tempBoxes = [...boxes];
    tempBoxes.splice(deleteidx, 1);
    setBoxs(tempBoxes);
    //setBoxs(boxes.filter((e)=>(e.id !== deleteidx)))  //Error porne!
    setSelect(-1);
  };

 //Display box count
 const _DisplayBoxCount = () => {

  if(boxes.length>0)
    return <div class='box-control-txt'>There are {boxes.length} boxe(s)</div>;
  
  return <div class='box-control-txt'>There are no boxes to display</div>;
};

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={_handleChange} aria-label="Box tabs" class='tabs'>        
          <Tab label="Boxes" {...a11yProps(0)}></Tab>         
          <Tab label="Select Color" {...a11yProps(1)} />        
          <Tab label="Summary" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

{/*  1st tab showcase the list of boxes */}
      <TabContainer value={value} index={0}>
        <div class='box-control'>
          <div className='btn'><Button variant="contained" onClick={_addBtn}> Add</Button></div>
          <div className='btn'><Button variant="contained" onClick={_dltBtn} color="secondary"> Delete</Button></div>
          <div className='btn'><Button variant="contained" onClick={() => setSelect(-1)}> Deselect All</Button></div>
        </div>
        {boxes.map((item, i) => 
             <div> 
               <Box
                idx = {item.id} 
                color={item.color} 
                isactive={i === selectedboxidx} 
                onClick={() => setSelect(i)} 
                txt={i}
                /> 
              </div>
        )}
        {_DisplayBoxCount()}
        <Circle>test</Circle>
        <Triangle>Test</Triangle>
      </TabContainer>

{/*  2nd tab allows the users to change the color */}
      <TabContainer value={value} index={1}>
        <div className='box-wrap' >
          <Box color={currentcolor} onClick={_toggleColor} txt={currentcolor} isactive={true}></Box>    
        </div>      
      </TabContainer>

{/*  3rd tab shows the summary of user actions */}
      <TabContainer value={value} index={2}>
        <div>
          <div class='box-control-txt'>Total Boxes : {boxes.length}</div>
          <div class='box-control-txt'>Curent Color : {currentcolor}</div>  
        </div>
      </TabContainer>
    </div>
  );
}