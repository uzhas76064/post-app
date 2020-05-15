import React from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import EditForm from '../edit-form';

import './app.css';

export default class App extends React.Component {
    state = {
        data: [
            {label: "Going to learn react", important:false, like: false, id: 1},
            {label: "That's good", important: false, like: false, id: 2},
            {label: "I need a break...", important: false, like: false, id: 3}   
        ],
        term: '',
        filter: 'all'
    }

    maxId = 4;

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

    onEditPost = (event, id) => {
        console.log(event.target.value);
        this.setState(({data}) => {
            
        })        
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

    onToggleImportant = (id) => {
        console.log(`Important ${id}`);
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    onToggleLiked = (id) => {
        console.log(`Like ${id}`);
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like)
        }
        else return items
    }

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        
        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader liked={liked} allPosts={allPosts}></AppHeader>
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}></SearchPanel>
                    <PostStatusFilter onFilterSelect={this.onFilterSelect} filter={filter}></PostStatusFilter>
                </div>
                <PostList onToggleImportant={this.onToggleImportant} onToggleLiked={this.onToggleLiked} onDelete={this.deleteItem} posts={visiblePosts}/>
                <PostAddForm onAdd={this.addItem}/>
                <EditForm editPost={this.onEditPost}/>
            </div>
        );
    }
}