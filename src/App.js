import React, {Component} from 'react'
import _orderBy from 'lodash/orderBy'
import FilmList from './components/FilmList'
import Nav from './components/Nav'
import FilmForm from './components/FilmForm'

import data from './data'

class App extends Component {
	state = {
		films: [],
		showFilmForm: false
	}

	sortFilms = films => _orderBy(films, ['featured', 'title'], ['desc', 'acs'])

	showFilmForm = () => this.setState({showFilmForm: !this.state.showFilmForm})
	closeForm = () => this.setState({showFilmForm: false})

	componentDidMount() {
		this.setState({films: this.sortFilms(data.films)})
	}

	toggleFeatured = id => {
		this.setState({
			films: this.sortFilms(
				this.state.films.map(film => {
					return film.id === id ? {...film, featured: !film.featured} : film
				}))
		})
	}

	render() {
		const numberOfColumns = this.state.showFilmForm ? 'ten': 'sixteen'

		return (
			<div className="ui container">
				<Nav showFilmForm={this.showFilmForm} />

				<div className="ui stackable grid">

					{this.state.showFilmForm ?
						<div className="six wide column">
							<FilmForm closeForm={this.closeForm}/>
						</div>
						:
						null
					}

					<div className={`${numberOfColumns} wide column`}>
						<FilmList films={this.state.films}
								  toggleFeatured={this.toggleFeatured}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App
