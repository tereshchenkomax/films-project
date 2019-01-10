import React from 'react'
import PropTypes from 'prop-types'

const Message = ({header, message, type}) => (
	<div className={`ui icon message ${type}`}>
		<i className="icon info" />
		<div className="content">
			<div className="header">{header}</div>
			<p>{message}</p>
		</div>
	</div>

)

Message.propTypes = {
	header: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	type: PropTypes.string
}

Message.defaultProps = {
	type: 'info'
}

export default Message