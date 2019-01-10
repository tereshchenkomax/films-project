import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Featured from './Featured'
import {Context} from '../App'

class FilmCard extends Component {

	render() {

		let {film} = this.props

		return (
			<div className="ui card">
				<div className="image">
					<span className="ui green label ribbon">$ {film.price} {film.price < 50 && ' !'} {''}</span>
					<Context.Consumer>
						{({toggleFeatured}) => (
							<Featured featured={film.featured}
									  toggleFeatured={() => toggleFeatured(film.id)}>
							</Featured>
						 )}
					</Context.Consumer>
					<img src={film.im} alt={film.title}/>
				</div>
				<div className="content">
					<a href="#" className="header">Legacy</a>
				</div>
				<div className="meta content">
					<i className="icon users "/> {film.director}
					<span className="right floated">
                    <i className="icon wait right"/> {film.duration}
                </span>
				</div>
			</div>
		)
	}
}

FilmCard.propTypes = {
	film: PropTypes.shape({
		title: PropTypes.string.isRequired,
		director: PropTypes.string.isRequired,
		duration: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		im: PropTypes.string.isRequired
	})
}

export default FilmCard