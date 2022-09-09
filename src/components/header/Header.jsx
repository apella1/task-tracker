import React from 'react'; // react import isn't required for all components
import './header.css';

import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'
import Button from '../button/Button';

const Header = ({title, subtitle, onAdd, showAdd}) => {
  const location = useLocation()

  return (
    <header className='header'>
        <div className="header-title">
            <h1 style={titleStyles}>{title}</h1>
            {/* <h2 style={{color: 'black'}}>{subtitle}</h2> inline styling properties taking camel casing as in JavaScript styling */}
        </div>

        {location.pathname==='/' &&
          <Button 
            text={showAdd ? 'Close'  : 'Add Task'} 
            color={showAdd ? 'green'  : 'blue'} 
            onClick={onAdd} 
          />}        
    </header>
  )
}

// using props 
// instead of passing in props as an object, we can destructure the props and use the exact properties to be passed in.
// the destructuring occurs for all the values passed in as either default props or passed within the component

Header.defaultProps = { 
    title : 'Task Manager',
}

Header.propTypes = { 
    title: PropTypes.string.isRequired, 
    subtitle : PropTypes.string
}

// defining the prop types specifies the data type required for every prop and returns a warning when an unexpected data type is passed in. 
// this makes the code more robust and helps to catch errors before they happen. 

// * styles can also be passed within a constant as below and included as a prop within the style attribute

const titleStyles = { 
    color: 'black',
    fontWeight: 500
}

export default Header