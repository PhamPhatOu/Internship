import './Todo.css';
import React from 'react';

class Todo extends React.Component {
	constructor(props) {
		super(props);
		// console.log('props', props);
		// this.state = { id: props.id, value: props.value, done: props.done };
		this.state = { data: props.data };
	}

	static getDerivedStateFromProps(props, state) {
		// console.log('getDerivedStateFromProps', props);
		return { data: props.data };
	}

	// completeTask = () => {
	// 	// console.log('Todo completeTask', this.props.id);
	// 	// this.setState({ done: true });
	// 	this.props.completeTask(this.state.data.id);
	// };

	render() {
		// console.log('render');
		let checkDone = '';
		if (!this.state.data.done) {
			checkDone = (
				<img
					src={
						process.env.PUBLIC_URL +
						'/assets/iconfinder_Symbol_-_Check_58687.png'
					}
					alt='Hoàn thành'
					width='25'
					style={{ cursor: 'pointer' }}
					title='Bấm để hoàn thành task'
					onClick={() => this.props.completeTask(this.state.data.id)}
				/>
			);
		}
		return (
			<div className='todo aligned'>
				{checkDone}
				<img
					className={this.state.data.done ? 'noCheckDone' : ''}
					src={
						process.env.PUBLIC_URL +
						'/assets/iconfinder_f-cross_256_282471.png'
					}
					alt='Hoàn thành'
					width='15'
					style={{ cursor: 'pointer' }}
					title='Bấm để xóa task'
					onClick={() => this.props.deleteTask(this.state.data.id)}
				/>
				&nbsp;&nbsp;
				<span className={this.state.data.done ? 'done' : ''}>
					{this.state.data.name}
				</span>
			</div>
		);
	}
}

export default Todo;