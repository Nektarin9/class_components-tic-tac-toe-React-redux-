import styles from './InformationLayout.module.css';
import { Component } from 'react';



export class InformationLayout extends Component {

	render() {
		const { status, currentPlayer} = this.props
		return (
			<div className={styles.InformationLayoutContainer}>
				<p
					className={
						currentPlayer === 'X'
							? styles.InformationLayouColorRed
							: styles.InformationLayouColorGreen
					}
				>
					{status}
				</p>
			</div>
		);
	}
}

