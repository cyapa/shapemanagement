import React from 'react';
import PropTypes from 'prop-types'; // To validate properties without TypeScript

export default function Box(props) {
    const { idx,color,txt,onClick,isactive } = props;

    //If the button is clicked(active), then show a shadow
    const btnactive = isactive ?'0 5px 5px #424242, 0 6px 6px #424242':''

    const style = {
      float:'left',
      width: '130px',
      height: '90px',
      padding: '10px 10px 10px 10px',
      margin: '10px 10px 10px 10px',
      boxShadow: btnactive,
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      background: color // Take from Box properties
    };

      return (
        <div id={idx} style={style} onClick={onClick} >
          {txt}
        </div>      
      );
    }
  
  Box.propTypes = {
    idx: PropTypes.number, // Accepts a number. Not mandatory if not showed in screen1
    color: PropTypes.string.isRequired, // Color code is mandatory
    txt: PropTypes.string, // If the box should display something. In some cases numbers will be used instead of string
  };

