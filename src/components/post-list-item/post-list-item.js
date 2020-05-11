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
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false,
            isEditable: false
        }
    }

    onImportant = () => {
        this.setState(({ important }) => ({
            important: !important
        }))
    }

    onLike = () => {
        this.setState(({ like }) => ({
            like: !like
        }))
    }

    onEditPost = () => {
        this.setState(({ isEditable }) => ({
            isEditable: !isEditable
        }))
    }

    render() {
        const { label, onDelete } = this.props;
        const { important, like, isEditable } = this.state;

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
            <span onClick={this.onLike} className="app-list-item-label">
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <span className="pub-date">{postItemDate}</span>
                <button onClick={this.onImportant} className="btn-star btn-sm">
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