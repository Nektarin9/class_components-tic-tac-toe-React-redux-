import { Component } from 'react';

export class InformationLayout extends Component {
	render() {
		const { status, currentPlayer } = this.props;
		return (
			<div className="InformationLayoutContainer">
				<p
					className={
						currentPlayer === 'X'
							? 'InformationLayouColorRed'
							: 'InformationLayouColorGreen'
					}
				>
					{status}
				</p>
			</div>
		);
	}
}
