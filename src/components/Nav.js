import React from 'react'
import PropTypes from 'prop-types'



const Nav = ({showFilmForm}) => (
	<div className="ui secondary menu pointing">
		<button className="item">Open</button>
		<button  onClick={showFilmForm}
			className="item"
		>
			<i className="icon plus"/> Add new film
		</button>
	</div>
)

Nav.propTypes  = {
	showFilmForm: PropTypes.func.isRequired,
}

export default Nav;