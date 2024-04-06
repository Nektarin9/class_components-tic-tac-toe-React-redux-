import styles from './GameLayout.module.css';
import { Field } from './Field/Field';
import { Information } from './Information/Information';
import { Component } from 'react';

export class GameLayout extends Component {

	render() {
		return (
			<section className={styles.GameLayoutHeader}>
				<div>
					<Information />
					<div className={styles.GameLayoutContainerField}>
						<Field />
					</div>
					<button onClick={this.props.reset} className={styles.GameLayoutBtn}>
						Начать заново
					</button>
				</div>
			</section>
		)
	}
}
