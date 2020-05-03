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


const PostListItem =() => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                Hello world!
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <span className="pub-date">{postItemDate}</span>
                <button className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
    );
}

export default PostListItem;