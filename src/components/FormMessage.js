import React from 'react';
import PropTypes from 'prop-types';


const FormMessage = ({content, type}) => <span
	style={{
		color: type === 'error' ? "#9f3a38" : "#6597a7"
	}}
>{content}</span>


FormMessage.propTypes  = {
	content: PropTypes.string,
	type: PropTypes.oneOf(['error', 'info']),
}

FormMessage.defaultTypes  = {
	content: '',
	type: 'error'
}
export default FormMessage;