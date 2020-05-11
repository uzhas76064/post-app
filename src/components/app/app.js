import React from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import EditForm from '../edit-form';

import './app.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: "Going to learn react", important: true, id: 1},
                {label: "That's good", important: false, id: 2},
                {label: "I need a break...", important: false, id: 3}   
            ]
        }

        this.maxId = 4;
    }

    deleteItem  = (id) =>  {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArray = [...before, ...after];

            return {
                data: newArray
            }
        });
    }

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader></AppHeader>
                <div className="search-panel d-flex">
                    <SearchPanel></SearchPanel>
                    <PostStatusFilter></PostStatusFilter>
                </div>
                <PostList onDelete={this.deleteItem} posts={this.state.data}/>
                <PostAddForm onAdd={this.addItem}/>
                <EditForm />
            </div>
        );
    }
}