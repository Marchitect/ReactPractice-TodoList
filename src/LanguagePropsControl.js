import React from 'react';

export class LanguagePropsControl extends React.Component{
	constructor(props){
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange (e){
		const lang = e.target.value;
		this.props.onChange(lang);
		console.log('change Handled');
	}

	render(){
		return (
	      <div>
	        <select
	          id="languages"
	          onChange={this.handleChange}>
	          <option value="English">English</option>
	          <option value="Mandarin">汉语</option>
	        </select>
	      </div>
	    );
	}
	
}