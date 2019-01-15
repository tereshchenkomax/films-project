import React from 'react'
import PropTypes from 'prop-types'

const Price = ({price}) =>
	<span className="ui green label ribbon">$ {price} {price < 50 && ' ?'} {''}</span>


Price.propTypes = {
	price: PropTypes.number.isRequired
}

Price.defaultProps = {
	price: 50
}

export default Price
