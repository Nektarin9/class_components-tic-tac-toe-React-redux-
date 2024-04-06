import styles from './FieldLavout.module.css';
import { Component } from 'react';

export class FieldLavout extends Component {

	render() {
		const { field, makeMove } = this.props;
		return field.map((item, index) => (
			<button
				onClick={(event) => makeMove(event)}
				key={index}
				className={`${styles.FieldLavoutButton} ${item === 'X' ? styles.red : styles.green}`}
				numberbtn={index}
			>
				{item}
			</button>
		));
	}
}
