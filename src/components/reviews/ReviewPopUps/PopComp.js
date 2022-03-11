import React from "react";
import PopUp from './PopUp'

export default class PopComp extends React.Component {
    state = {
        seen: false
    };
  
    togglePop = () => {
        this.setState({
            seen: !this.state.seen
        });
    };

    render() {
        return (
            <div>
                <div className="btn" onClick={this.togglePop}>
                <button>Reviews</button>
                </div>
                {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
            </div>
        );
    }
}
