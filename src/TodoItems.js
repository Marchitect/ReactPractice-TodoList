import React from 'react';
import FlipMove from 'react-flip-move';
import Tappable from 'react-tappable';

class TodoItems extends React.Component {
	constructor(props, context){
		super(props, context);

		this.createTasks =  this.createTasks.bind(this);
		this.deleteTasks = this.deleteTasks.bind(this);
	}

	createTasks(item){
		return <Tappable onTap={(e)=>this.deleteTasks(item.key, e)} key={item.key} ><li onDoubleClick={(e)=>this.deleteTasks(item.key, e)}> {item.text} </li></Tappable>
	}

	deleteTasks(key){
		this.props.deleteTasks(key);
	}

	render(){
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);

		return(
			<ul className="theList">

				<FlipMove duration={250} easing="ease-out">
				{listItems}
				</FlipMove>
			</ul>
		);
	}
};

export default TodoItems;