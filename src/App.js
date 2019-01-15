import React, {Component} from 'react'
import _orderBy from 'lodash/orderBy'
import FilmList from './components/FilmList'
import Nav from './components/Nav'
import FilmForm from './components/FilmForm'
import {generate as id} from 'shortid'

import data from './data'

export const Context = React.createContext()

class App extends Component {
	state = {
		films: [],
		showFilmForm: false,
		selectedFilm: {}
	}

	sortFilms = films => _orderBy(films, ['featured', 'title'], ['desc', 'acs'])

	addFilm = film => this.setState({
		films: this.sortFilms([...this.state.films, {...film, id: id()}]),
		showFilmForm: false
	})

	updateFilm = film => this.setState(({films}) => ({
		films: this.sortFilms(films.map(f => (f.id !== film.id ? f : film))),
		showFilmForm: false
	}))

	saveFilm = film => film.id ? this.updateFilm(film) : this.addFilm(film)

	removeFilm = (id) => this.setState(({films}) => ({
		films: films.filter(f => id !== f.id)
	}))

	showFilmForm = () => this.setState({showFilmForm: !this.state.showFilmForm})

	closeForm = () => this.setState({
		showFilmForm: false,
		selectedFilm: null
	})

	selectFilmFormEditing = film => {
		this.setState({
			selectedFilm: film,
			showFilmForm: true
		})
	}
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
		const numberOfColumns = this.state.showFilmForm ? 'ten' : 'sixteen'

		return (
			<div className="ui container">
				<Nav showFilmForm={this.showFilmForm}/>

				<div className="ui stackable grid">

					{this.state.showFilmForm ?
						<div className="six wide column">
							<FilmForm closeForm={this.closeForm}
									  saveFilm={this.saveFilm}
									  film={this.state.selectedFilm}
									  addFilm={this.addFilm}
							/>
						</div>
						:
						null
					}

					<div className={`${numberOfColumns} wide column`}>
						<Context.Provider value={{toggleFeatured: this.toggleFeatured}}>
							<FilmList
								films={this.state.films}
								editFilm={this.selectFilmFormEditing}
								removeFilm={this.removeFilm}
							/>
						</Context.Provider>
					</div>
				</div>
			</div>
		)
	}
}

export default App
