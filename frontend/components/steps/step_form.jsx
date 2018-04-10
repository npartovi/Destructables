import React from 'react';


class StepForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			title: "",
			body: "",
			ord: " ",
			article: this.props.articleId,
		}


		this.update = this.update.bind(this);
	}

	update(field){
		return (e) => {
			this.setState({[field]: e.target.value})
		};
	}

	

	render(){
		console.log(this.state)
		return(
			<form onSubmit={this.stepSubmitHandler}>
				<input onChange={this.update('title')} type="text" placeholder="Plese enter text for step" />
				<textarea onChange={this.update('body')} ></textarea>
				<button type="submit">submit</button>
			</form>
		)
	}
}


export default StepForm