import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

const Featured = ({ featured, toggleFeatured }) => (
	<span onClick={toggleFeatured}>
		<a href="#" className={`ui right corner label ${featured ? 'yellow' : ''}`}>
			<i className='star icon' />
		</a>
	</span>
)

Message.propTypes = {
	featured: PropTypes.bool.isRequired
}

Message.defaultProps = {
	featured: false
}

export default Featured
