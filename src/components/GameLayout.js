import { Field } from './Field/Field';
import { Information } from './Information/Information';
import { Component } from 'react';

export class GameLayout extends Component {
	render() {
		return (
			<section className="GameLayoutHeader">
				<div>
					<Information />
					<div className="GameLayoutContainerField">
						<Field />
					</div>
					<button onClick={this.props.reset} className="GameLayoutBtn">
						Начать заново
					</button>
				</div>
			</section>
		);
	}
}
