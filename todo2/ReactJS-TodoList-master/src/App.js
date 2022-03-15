import './App.css';
import React from 'react';
import TodoList from './TodoList';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { taskName: '', tasks: [] };
	}

	render() {
		return (
			<div className='App'>
				<table border='1'>
					<thead>
						<tr>
							<th>Nhiệm vụ 1</th>
							<th>Nhiệm vụ 2</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style={{ verticalAlign: 'top' }}>
								<TodoList name='Đi Chợ' />
							</td>
							<td style={{ verticalAlign: 'top' }}>
								<TodoList name='Đi Shopping' />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;