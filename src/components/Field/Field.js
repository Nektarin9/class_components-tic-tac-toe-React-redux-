import { FieldLavout } from './FieldLavout';
import { checkTheDraw, checkTheWinner } from '../../utils';
import { Component } from 'react';
import { connect } from 'react-redux';
import {
	actionCurrentPlayer,
	actionIsGameEnded,
	actionIsDraw,
	actionField,
} from '../../react-redux/action';

class FieldContainer extends Component {
	checkTheResult(copyField) {
		const { dispatch, currentPlayer } = this.props;
		if (checkTheWinner(copyField, currentPlayer)) {
			if (currentPlayer === 'X') {
				dispatch(actionCurrentPlayer('X'));
			} else {
				dispatch(actionCurrentPlayer('O'));
			}
			dispatch(actionIsGameEnded(true));
		} else if (checkTheDraw(copyField)) {
			dispatch(actionIsDraw(true));
		}
	}
	makeMove(event) {
		const { dispatch, field, currentPlayer, isGameEnded } = this.props;
		const copyField = [...field];
		const { target } = event;
		if (target.closest && !isGameEnded) {
			if (!target.textContent) {
				let index = Number(target.attributes[1].value);
				if (currentPlayer === 'X') {
					dispatch(actionCurrentPlayer('O'));
				} else {
					dispatch(actionCurrentPlayer('X'));
				}
				copyField[index] = currentPlayer;
				dispatch(actionField(copyField));
				this.checkTheResult(copyField);
			}
		}
	}
	render() {
		const { field } = this.props;
		this.makeMove = this.makeMove.bind(this);
		return <FieldLavout makeMove={this.makeMove} field={field}></FieldLavout>;
	}
}

const mapStateToProps = (state) => ({
	field: state.field,
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
});

export const Field = connect(mapStateToProps)(FieldContainer);
