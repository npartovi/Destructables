import React from 'react';


class StepForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			title: "",
			body: ""
		}


		this.update = this.update.bind(this);
	}

	update(field){
		return (e) => {
			this.setState({[field]: e.target.value})
		};
		
	}

	stepSubmitHandler(){
		if(this.state.body && this.state.title !== ""){
			

		}
	}



	render(){
		console.log(this.state)
		return(
			<form>
				<input onChange={this.update('title')} type="text" placeholder="Plese enter text for step" />
				<textarea onChange={this.update('body')} ></textarea>
				<button>submit</button>
			</form>
		)
	}
}


export default StepForm