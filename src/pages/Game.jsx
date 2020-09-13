import React, { Component, Fragment } from 'react';
import FullPageContainer from 'pages/components/FullPageContainer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions, selectors } from "reducer/game";
import { getI18n } from 'util/i18n';
import { replace } from 'react-router-redux';
import Button from 'pages/components/Button';
class Game extends Component {
    
    state = {
        role: "",
        showMessage: false
    }

    componentDidMount() {
        const { role, code, region, back, startStatusCheck } = this.props;
        if (role) {
            this.setRoleTyping(getI18n(`game.roles.${role}`));

            startStatusCheck();
        } else if (!code && !region) {
            back();
        }
    }

    componentWillUnmount() {
        const { stopStatusCheck } = this.props;
        stopStatusCheck();
    }

    componentDidUpdate(prevProps) {
        const { role, startStatusCheck } = this.props;

        if (role !== prevProps.role) {
            this.setRoleTyping(getI18n(`game.roles.${role}`));
            startStatusCheck();
        }
    }

    setRoleTyping = (role) => {
        let length = 0;
        this.setState({
            role: "",
            showMessage: false,
        })
        setTimeout(() => {
            const interval = setInterval(() => {
                const char = role.charAt(length);
                const newString = this.state.role + char;
                length++;
                this.setState({
                    role: newString
                });
    
                if (length === role.length) { 
                    this.endTyping(interval);
                }
            }, 200)
        }, 1000)
    } 

    endTyping = (interval) => {
        clearInterval(interval);
        setTimeout(() => {
            this.setState({
                showMessage: true,
            })
        }, 500)
    }

    render() { 
        const { code, role, region, canEnd, fetching, resetGame, back, gameEnded } = this.props;
        const { role: stateRole, showMessage } = this.state;

        return ( 
            <FullPageContainer className="flex justify-center align-items-center">
                <div className="role-info">
                    <h3 className="room-info">
                        { showMessage && `${getI18n("game.room")} ${ code } (${getI18n(`home.join.region.${region}`)})` }
                    </h3>
                    <h2>
                        { getI18n(`game.your.role`) }
                    </h2>
                    <h1 className="role">
                        { stateRole }
                    </h1>
                    { showMessage && (
                        <Fragment>
                            <h3 className="role-message">
                                { getI18n(`game.roles.${role}.message`) }
                            </h3>
                            {
                                (canEnd || gameEnded) && (
                                    <div className="reset-game-btn-cont">
                                        <Button 
                                            className="reset-game-btn" 
                                            text={getI18n(`game.${canEnd ? "restart" : "rejoin"}`)}
                                            loading={fetching}
                                            onClick={resetGame}
                                        />
                                    </div>
                                )
                            }
                            <div className="back-btn-cont">
                                <Button 
                                    className="back-btn" 
                                    text={getI18n("game.back.home")}
                                    onClick={back}
                                    textButton
                                />
                            </div>
                        </Fragment>
                    ) }                    
                </div>
            </FullPageContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    code: selectors.getCode(state),
    role: selectors.getRole(state),
    region: selectors.getRegion(state),
    canEnd: selectors.getCanEnd(state),
    fetching: selectors.getFetching(state),
    gameEnded: selectors.getGameEnded(state),
})
 
const mapDispatchToProps = (dispatch) => ({
    back: () => dispatch(replace("/")),
    resetGame: () => dispatch(actions.resetGame()),
    startStatusCheck: () => dispatch(actions.startStatusCheck()),
    stopStatusCheck: () => dispatch(actions.stopStatusCheck()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);