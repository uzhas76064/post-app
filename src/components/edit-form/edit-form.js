import React from 'react';

import '../edit-form/edit-form.css'

let formStyles = 'form-group edit-post';

export default class EditForm extends React.Component {
    render() {
        const { editPost } = this.props;

        return (
            <form action="" className={formStyles}>
                <textarea onChange={editPost} className="form-control" name="" id="" cols="30" rows="10"></textarea>
                <button className="btn btn-primary btn-lg btn-edit">Обновить пост</button>
            </form>
        )
    }
}

export {formStyles};
