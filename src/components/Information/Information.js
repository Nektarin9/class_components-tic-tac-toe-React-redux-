import { InformationLayout } from './InformationLayout';
import { Component } from 'react';
import { connect } from 'react-redux';

class InformationContainer extends Component {
	getGameStatus() {
		const { isDraw, currentPlayer, isGameEnded } = this.props;
		let status;
		if (isDraw) {
			status = 'Ничья';
		} else if (isGameEnded) {
			status = `Победа: ${currentPlayer}`;
		} else {
			status = `Ходит: ${currentPlayer}`;
		}
		return status;
	}
	render() {
		const { isDraw, currentPlayer } = this.props;
		return (
			<InformationLayout
				isDraw={isDraw}
				status={this.getGameStatus()}
				currentPlayer={currentPlayer}
			/>
		);
	}
}
const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
});

export const Information = connect(mapStateToProps)(InformationContainer);
