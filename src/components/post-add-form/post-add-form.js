import React from 'react';

import './post-add-form.css';

export default class PostAddForm extends React.Component{
    state = {
        text: ''
    }

    onValueChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    onSubmit = (event) => {
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="bottom-panel d-flex">
                <input value={this.state.text} onChange={this.onValueChange} type="text" placeholder="О чем вы думаете сейчас?" className="form-control new-post-label"/>
                <button type="submit" className="btn btn-outline-secondary">Добавить</button>
            </form>
        )
    }
}