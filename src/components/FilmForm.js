import React, {Component} from 'react'
import ReactImageFallback from 'react-image-fallback'

class FilmForm extends Component {
	state = {
		data: {
			title: '',
			description: '',
			duration: 0,
			price: 0,
			director: ''
		},
		errors: ''
	}

	handleChange = ({target}) => this.setState(({data}) =>({
		data:
			target.type === 'number' ?
				{...data, [target.name]: parseFloat(target.value)}
				: { ...data, [target.name]: target.value}
	}))
	handleSubmit = (e) => e.preventDefault()

	render() {
		const {
			data, errors
		} = this.state;
		return (
			<form onSubmit={this.handleSubmit} className="ui form">
				<div className="ui grid">
					<div className="twelve wide column">
						<div className="field">
							<label htmlFor="title">Film title</label>
							<input
								value={data.title}
								onChange={this.handleChange}
								id="title"
								name="title"
								placeholder="film title"
								type="text"
							/>
						</div>
						<div className="field">
							<label htmlFor="description">Film description</label>
							<textarea
								value={data.description}
								onChange={this.handleChange}
								id="description"
								name="description"
								placeholder="film description"
								type="text"
							/>
						</div>
						<div className="field">
							<label htmlFor="im">Poster URL</label>
							<input
								value={data.im}
								name="im"
								onChange={this.handleChange}
								id="im"
								placeholder="url for film"
								type="text"
							/>
						</div>
					</div>
					<div className="four wide column">
						<ReactImageFallback
							src={data.im}
							alt="film poster"
							fallbackImage="http://via.placeholder.com/290x360"
							className="ui image"
						/>
					</div>
					<div className="sixteen wide column">
						<div className="four fields">
							<div className="field">
								<label htmlFor="price">Film price</label>
								<input
									value={data.price}
									name="price"
									onChange={this.handleChange}
									id="price"
									placeholder="film price"
									type="number"
								/>
							</div>
							<div className="field">
								<label htmlFor="duration">Film duration (in min)</label>
								<input
									value={data.duration}
									name="duration"
									onChange={this.handleChange}
									id="duration"
									placeholder="film duration"
									type="number"
								/>
							</div>
							<div className="field">
								<label htmlFor="director">Film's director</label>
								<input
									value={data.director}
									name="director"
									onChange={this.handleChange}
									id="director"
									placeholder="film director"
									type="text"
								/>
							</div>
							<div className="field">
								<label htmlFor="featured">Featured</label>
								<input
									checked={data.featured}
									name="featured"
									onChange={this.handleToggleChange}
									id="featured"
									placeholder="featured"
									type="checkbox"
								/>
							</div>
						</div>
					</div>
					<div className="field">
						<div className="ui fluid buttons">
							<button className="ui primary button" type="submit">Create film</button>
							<div className="or"></div>
							<a className="ui button" onClick={this.props.closeForm}>Close</a>
						</div>
					</div>
					<br />
				</div>
			</form>
		);
	}

}

export default FilmForm
