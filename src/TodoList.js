import React from 'react';
import TodoItems from './TodoItems';

import RenderSubmitButton from './RenderSubmitButton';

import {MainAppDescription} from './MainAppDescription';
import {LanguagePropsControl} from './LanguagePropsControl';

import './TodoList.css';

class TodoList extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			items: [], lang: "English"
		};
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);

		this.changeRenderedLang = this.changeRenderedLang.bind(this);

	}

	changeRenderedLang(newLang){
		this.setState({lang: newLang});
	}

	addItem(e){
		var itemArray = this.state.items;

		var file = './data.json';

		if(this._inputElement.value !== ""){
			itemArray.unshift(
			{
				text: this._inputElement.value,
				key: Date.now()
			});

			this.setState({
				items: itemArray
			})

			this._inputElement.value = "";
		}

		console.log(itemArray);

		e.preventDefault();
	}

	deleteItem(key){
		var filteredItems = this.state.items.filter(function (item){
			return (item.key !== key);
		});

		this.setState({
			items: filteredItems

		});
	}

	render() {
		return (
			
			<div className="todoListMain">
				<LanguagePropsControl onChange={this.changeRenderedLang}/>
				<MainAppDescription lang={this.state.lang} />

				<div className = "header">
					<form onSubmit={this.addItem}>
						<input ref={(a)=>this._inputElement = a}

						
						placeholder="">
						</input>
						
						<RenderSubmitButton lang={this.state.lang} />
						
					</form>
				</div>
				<TodoItems entries = {this.state.items} 

					deleteTasks={this.deleteItem}/>
			</div>
		);
	}

};

export default TodoList;