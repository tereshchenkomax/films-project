import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Featured from './Featured'
import Price from './Price'
import {Context} from '../App'

class FilmCard extends Component {
	state = {
		showConfirm: false
	}

	showConfirm = () => this.setState({showConfirm: true})
	hideConfirm = () => this.setState({showConfirm: false})

	render() {
		let {film, editFilm, removeFilm} = this.props
		const {showConfirm} = this.state

		return (
			<div className="ui card">
				<div className="image">
					<Price price={film.price}/>
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
					<a href="#" className="header">{film.title}</a>
				</div>
				<div className="meta content">
					<div className="extra content">
						{showConfirm ? (<div className="ui two buttons">
								<button className="ui basic green button" onClick={() => removeFilm(film.id)}>
									<i className="ui icon edit">YES</i>
								</button>
								<button className="ui basic red button" onClick={this.hideConfirm}>
									<i className="ui icon trash">NO</i>
								</button>
							</div>)
							:
							(<div className="ui two buttons">
								<button className="ui basic green button" onClick={() => editFilm(film)}>
									<i className="ui icon edit"/>
								</button>
								<button className="ui basic red button" onClick={this.showConfirm}>
									<i className="ui icon trash"/>
								</button>


							</div>)}


					</div>
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