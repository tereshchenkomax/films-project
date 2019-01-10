import React from 'react'
import PropTypes from 'prop-types'



const Nav = ({showFilmForm}) => (
	<div className="ui secondary menu pointing">
		<a href="/" className="item">Open</a>
		<a  onClick={showFilmForm}
			className="item"
		>
			<i className="icon plus"/> Add new film
		</a>
	</div>
)

Nav.propTypes  = {
	showFilmForm: PropTypes.func.isRequired,
}

export default Nav;