import React from 'react'
import PropTypes from 'prop-types'
import FilmCard from './FilmCard'
import Message from './Message'



const FilmList = ({films,editFilm, removeFilm}) => (
	<div className='ui four cards'>
		{films.length === 0 ?
			<Message header='Not found' message='Films are not found'/>
			:
			films.map(film => <FilmCard key={film.id} film={film}
										editFilm={editFilm}
										removeFilm={removeFilm}
			/>)}
	</div>
)

FilmList.propTypes = {
	film: PropTypes.array,
}

FilmList.defaultProps = {
	films: []
}

export default FilmList