import React from 'react';

import './search-panel.css';

export default class SearchPanel extends React.Component {
    state = {
        term: ''
    }

    onUpdateSearch = (event) => {
        const term = event.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

   render() {
    return(
        <input onChange={this.onUpdateSearch} className="form-control search-input" type="text" placeholder="Поиск по записям"/>
    )
   }
}