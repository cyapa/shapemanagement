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


//Colors & shapes to be shown
const colors =['LIGHTCORAL','LIGHTPINK','MOCCASIN','PALEGOLDENROD','PLUM','SLATEBLUE','SEAGREEN','STEELBLUE','DARKTURQUOISE','BURLYWOOD','PERU','SILVER','SLATEGRAY','MISTYROSE','ANTIQUEWHITE','ROSYBROWN','CORNFLOWERBLUE']
const shapesnames = ['box','triangle','circle'];

function _a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function ShapesTabs() {

  const initcolor = 'STEELBLUE';
  const initshape = 'box';
  const [value, setValue] = React.useState(0);
  const [shapes, setShapes] = React.useState([{id:0,color:initcolor,shape:initshape},{id:1,color:initcolor,shape:initshape},{id:2,color:initcolor,shape:initshape}]);
  const [currentcolor, setColor] = React.useState(initcolor);
  const [currentshape, setShape] = React.useState(initshape);
  const [selectedshapesidx, setSelect] = React.useState(-1);

  const _handleChange = (e, newval) => {
    setValue(newval);
  };
  
  //Randomly change the color uisng the color preset
  const _toggleColorAndShape = () => {
    let randomcolor = colors[Math.floor(Math.random()*colors.length)]; 
    setColor(randomcolor);

    let randomshape = shapesnames[Math.floor(Math.random()*shapes.length)];
    setShape(randomshape);

    //If a shape has been selected already
    if(selectedshapesidx> -1 ){
     let modifiedshapes = [...shapes];
     modifiedshapes[selectedshapesidx].color = randomcolor; 
     modifiedshapes[selectedshapesidx].shape = randomshape;
     setShapes(modifiedshapes);
    }
  };

//Add new shape object to shapes array
  const _addButton = () => {
    setShapes(shapes => [...shapes, {id:shapes.length,color:currentcolor,shape:currentshape}]); 
  };
                      
  //Delete a shape
  const _deleteButton = () => {
    //Set last shape to be deleted
    let deleteidx= shapes.length-1;

    //Delete the selected shape
    if(selectedshapesidx> -1 )
      deleteidx=selectedshapesidx;

    let tempshapes = [...shapes];
    tempshapes.splice(deleteidx, 1);
    setShapes(tempshapes);
    setSelect(-1);
  };

 //Display shapes count
 const _DisplayShapeCount = () => {

  if(shapes.length>0)
    return <div class='shape-control-txt'>There are {shapes.length} shape(s)</div>;
  
  return <div class='shape-control-txt'>There are no shapes to display</div>;
};

const _CreateShape = (item,i) => {

  if (item.shape ==='triangle')
   return (<Triangle
      idx = {item.id} 
      color={item.color} 
      isactive={i === selectedshapesidx} 
      onClick={() => setSelect(i)} 
      txt={i}
      /> )
   else if (item.shape ==='circle')
    return (<Circle
      idx = {item.id} 
      color={item.color} 
      isactive={i === selectedshapesidx} 
      onClick={() => setSelect(i)} 
      txt={i}
      /> )
    else
      return (<Box
        idx = {item.id} 
        color={item.color} 
        isactive={i === selectedshapesidx} 
        onClick={() => setSelect(i)} 
        txt={i}
      /> )
}
  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={_handleChange} aria-label="Shape tabs" class='tabs'>        
          <Tab label="Shapes" {..._a11yProps(0)}></Tab>         
          <Tab label="Select Shape & Color" {..._a11yProps(1)} />        
          <Tab label="Summary" {..._a11yProps(2)} />
        </Tabs>
      </AppBar>

{/*  1st tab showcase the list of shapes */}
      <TabContainer value={value} index={0}>
        <div class='shape-control'>
          <div className='btn'><Button variant="contained" onClick={_addButton}> Add</Button></div>
          <div className='btn'><Button variant="contained" onClick={_deleteButton} color="secondary"> Delete</Button></div>
          <div className='btn'><Button variant="contained" onClick={() => setSelect(-1)}> Deselect All</Button></div>
        </div>
        {shapes.map((item, i) => 
          <div> 
            {_CreateShape(item,i)}     
          </div>
        )}
        {_DisplayShapeCount()}  
      </TabContainer>

{/*  2nd tab allows the users to change the color */}
      <TabContainer value={value} index={1}>
        <div className='shape-wrap' >
          <Box color={currentcolor} onClick={_toggleColorAndShape} txt={currentcolor} ></Box>  
          {_CreateShape(
            {id:0,
            color:currentcolor,
            shape:currentshape,
            txt:{currentcolor},
            isactive:true
            })
            }    
        </div>      
      </TabContainer>

{/*  3rd tab shows the summary of user actions */}
      <TabContainer value={value} index={2}>
        <div>
          <div class='shape-control-txt'>Total Shapes : {shapes.length}</div>
          <div class='shape-control-txt'>Current Color : {currentcolor}</div>  
        </div>
      </TabContainer>
    </div>
  );
}