import React, {Component} from 'react';
import ReactImageFallback from 'react-image-fallback'
import FormMessage from './FormMessage'

class FilmForm extends Component {
	state  = {
		data: {
			id: null,
			title: '',
			description: '',
			duration: 0,
			price: 0,
			im: '',
			director: '',
			featured: false
		},
		errors: {}

	}

	componentDidMount() {
		if(this.props.film && this.props.film.id) {
			this.setState({data: this.props.film})
		}
	}

	static getDerivedStateFromProps (nextProps, state){
		if(nextProps.film && nextProps.film.id !== state.data.id){
			return {
				data: nextProps.film
			}
		}
		return null
	}

	static validate(data) {
		const errors = {}
		if(!data.title) errors.title = "This field cannot be blank"
		if(!data.im) errors.im = "This field cannot be blank"
		if(!data.director) errors.director = "This field cannot be blank"
		if(data.duration <= 0) errors.duration = "Too short, isnt it ? "
		if(data.price <= 0) errors.price = "Too cheap, dont you think ? "
		return errors;
	}

	handleSubmit = e => {
		e.preventDefault();
		const errors = FilmForm.validate(this.state.data);
		this.setState({errors})

		if(Object.keys(errors).length === 0) {
			this.props.saveFilm	(this.state.data);
		}
	}

	handleChange = ({target}) => this.setState(({data, errors}) => ({
		data: target.type === 'number' ?
			{...data, [target.name]: parseFloat(target.value)}
			:
			{...data, [target.name]: target.value},
		errors : {...errors, [target.name]: '' }
	}))


	handleToggleChange = ({target}) => {
		console.log(target);
		this.setState({
			data: {...this.state.data, [target.name]: !this.state.data[target.name]}
		})
	}

	render(){
		const {data, errors} = this.state;

		return(
			<form onSubmit={this.handleSubmit} className="ui form">

				<div className="ui grid">
					<div className="twelve wide column">

						<div className={errors.title ? 'field error' : 'field'}>
							<label htmlFor="title">Film title</label>
							<input value={data.title}
								   name="title"
								   onChange={this.handleChange}
								   id="title"
								   placeholder="film title"
							/>
							<FormMessage content={errors.title} type="error"/>
						</div>

						<div className={errors.description ? 'field error' : 'field'}>
							<label htmlFor="description">Film description</label>
							<textarea value={data.description}
									  name="description"
									  onChange={this.handleChange}
									  id="description"
									  placeholder="film description"
							/>
							<FormMessage content={errors.description} type="error"/>
						</div>

						<div className={errors.im ? 'field error' : 'field'}>
							<label htmlFor="im">Poster URL</label>
							<input value={data.im}
								   name="im"
								   onChange={this.handleChange}
								   id="im"
								   placeholder="url for film"
								   type="text"
							/>
							<FormMessage content={errors.im} type="error"/>
						</div>
					</div>
					<div className="four wide column">
						<ReactImageFallback
							src={data.im}
							alt="film poster"
							fallbackImage='http://via.placeholder.com/290x360'
							className="ui image"
						/>
					</div>

					<div className="sixteen wide column">

						<div className="three fields">

							<div className={errors.price ? 'field error' : 'field'}>
								<label htmlFor="price">Film price</label>
								<input value={data.price}
									   name="price"
									   onChange={this.handleChange}
									   id="price" placeholder="film price"
									   type="number"
								/>
								<FormMessage content={errors.price} type="error"/>
							</div>

							<div className={errors.duration ? 'field error' : 'field'}>
								<label htmlFor="duration">Film duration (in min)</label>
								<input value={data.duration}
									   name="duration"
									   onChange={this.handleChange}
									   id="duration" placeholder="film duration"
									   type="number"
								/>
								<FormMessage content={errors.duration} type="error"/>
							</div>
							<div className={errors.director ? 'field error' : 'field'}>
								<label htmlFor="director">Film's director</label>
								<input value={data.director}
									   name="director"
									   onChange={this.handleChange}
									   id="director" placeholder="film director"
									   type="text"
								/>
								<FormMessage content={errors.director} type="error"/>
							</div>
						</div>

						<div className="field">
							<label htmlFor="featured">Featured</label>
							<input checked={data.featured}
								   name="featured"
								   onChange={this.handleToggleChange}
								   id="featured" placeholder="featured"
								   type="checkbox"
							/>
						</div>

						<div className="ui fluid buttons">
							<button className="ui primary button" type="submit">Create film</button>
							<div className="or" />
							<button className="ui button" onClick={this.props.closeForm}>Close</button>
						</div>

					</div>
				</div>
			</form>
		);
	}
}



export default FilmForm;