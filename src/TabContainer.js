import React from 'react';
import './static/css/tabcontainer.css';

import Box from '@material-ui/core/Box'; 
import PropTypes from 'prop-types'; // To validate properties without TypeScript

export default function TabContainer(props) { 
    const { children, value, index } = props;
  
    return ( 
      <div
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        class='container'
      >
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    );
  }

  TabContainer.propTypes = {
    children: PropTypes.node, // Accepts anything that can be rendered
    index: PropTypes.any.isRequired, // Index is required to handle tabs size & navigation
    value: PropTypes.any.isRequired, // Tab container content
  };