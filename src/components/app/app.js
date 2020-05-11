import React from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import EditForm from '../edit-form';

import './app.css';

const App = () => {

    const data = [
        {label: "Going to learn react", important: true, id: 'jsgdgd'},
        {label: "That's good", important: false, id: 'wgmfhfgd'},
        {label: "I need a break...", important: false, id: 'tjhradf'}
    ];

    return (
        <div className="app">
            <AppHeader></AppHeader>
            <div className="search-panel d-flex">
                <SearchPanel></SearchPanel>
                <PostStatusFilter></PostStatusFilter>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
            <EditForm />
        </div>
    );
}

export default App;