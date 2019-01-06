import React, {Component} from 'react'
import PropTypes from 'prop-types'
import FilmCard from './FilmCard'
import Message from './Message'

const FilmList = ({films, toggleFeatured}) => (
	<div className='ui four cards'>
		{films.length === 0 ?
			<Message header='Not found' message='Films are not found'/>
			:
			films.map(film => <FilmCard key={film.id} film={film} toggleFeatured={toggleFeatured}/>)}
	</div>
)

FilmList.propTypes = {
	film: PropTypes.array,
	toggleFeatured: PropTypes.func.isRequired
}

FilmList.defaultProps = {
	films: []
}

export default FilmList