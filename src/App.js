import { GameLayout } from './components/GameLayout';
import { actionReset } from './react-redux/action';
import { Component } from 'react';
import { connect } from 'react-redux';

class AppContainer extends Component {
	render() {
		const { reset } = this.props;
		return <GameLayout reset={reset} />;
	}
}

const mapDispatchToProps = (dispatch) => ({
	reset: () => dispatch(actionReset()),
});

export const App = connect(null, mapDispatchToProps)(AppContainer);
