import { Component } from 'react';

export class FieldLavout extends Component {
	render() {
		const { field, makeMove } = this.props;
		return field.map((item, index) => (
			<button
				onClick={(event) => makeMove(event)}
				key={index}
				className={`FieldLavoutButton ${item === 'X' ? 'red' : 'green'}`}
				numberbtn={index}
			>
				{item}
			</button>
		));
	}
}
