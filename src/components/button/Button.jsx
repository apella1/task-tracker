import PropTypes from 'prop-types';
import './button.css';

const Button = ({ color, text}) => {
    const onClick = (e) => {
        console.log(e)
    }

    return <button onClick={onClick} style={{backgroundColor: color}} className="btn">{text}</button>
}

Button.defaultProps = { 
    color: 'black', 
}

Button.propTypes = { 
    color: PropTypes.string,
    text: PropTypes.string, 
    onClick: PropTypes.func,
}

export default Button

// creating a reusable button component and destructuring the parameters to be used anywhere within the application
// the button text and color can be customized whenever the component is used in our application 
// * impt - import PropTypes (react snippets)
