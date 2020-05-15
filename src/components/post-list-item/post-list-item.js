import React from 'react';

import './post-list-item.css';

let currentDate = new Date();

const dateOptions = {
    year:'numeric',
    month:'long',
    day: 'numeric',
}

const dateConfig = {
    year:null,
    month:null,
    date:null,
}

dateConfig.year = currentDate.getFullYear().toString();
dateConfig.month = currentDate.getMonth().toString();
dateConfig.date = currentDate.getDate().toString();

let postItemDate = new Date(dateConfig.year, dateConfig.month, dateConfig.date, 0, 0, 0, 0).toLocaleString('ru', dateOptions);

export default class PostListItem extends React.Component {
    state = {
        important: false,
        like: false,
        isEditable: false
    }

    onEditPost = (event) => {
        let target = event.target;

        console.log(target.closest('.app-list-item'));
        
        this.setState(({ isEditable }) => ({
            isEditable: !isEditable
        }))
    }

    render() {
        const { label, onDelete, onToggleImportant, onToggleLiked, important, like, isEditable } = this.props;

        let classNames = 'app-list-item d-flex justify-content-between';
        let editPost = document.querySelector('.edit-post');

        if(important) {
            classNames += ' important';
        }

        if(like) {
            classNames += ' like';
        }

        if(isEditable) {
            editPost.classList.toggle('form-visible');
        }

        return (
        <div className={classNames}>
            <span onClick={onToggleLiked} className="app-list-item-label">
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <span className="pub-date">{postItemDate}</span>
                <button onClick={onToggleImportant} className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button onClick={onDelete} className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <button className="btn btn-primary" onClick={this.onEditPost}>Редактировать</button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
        )
    }
}