import  React, {Component} from 'react';

import classes from './TreeItem.css';

export default class extends Component {
    state = {
      collapsed: false,
      cursorX: 0,
      cursorY: 0
    };

    MouseOverHandler = (e) => {
        console.log('x: ', e.pageX);
        console.log('y: ', e.pageY);
        this.setState({
            cursorX: e.pageX,
            cursorY: e.pageY
        });
        e.stopPropagation();
    };

    render() {
        return (
            <li onClick={(e) => {
                    console.log('clicked');
                    this.setState(prevValue => {
                            return ({
                                collapsed: !prevValue.collapsed
                            });
                        }
                    );
                    e.stopPropagation();
                }}
                className={classes.Item}
                onMouseOver={this.MouseOverHandler}
            >
                <div
                    style={{'top': this.state.cursorY - 20 + 'px', 'left': this.state.cursorX + 'px'}}
                >
                    {this.props.elem.name}
                </div>
                <p>{this.props.elem.name}</p>
                {this.state.collapsed ? this.props.nested : null}
            </li>
        );
    }
}