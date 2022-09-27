//import { useState } from 'react';
//import { useDispatch, useSelector } from 'react-redux';


const ListForm = () => {


    const onSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className="form">
            <h3>List Form</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="listName">List Name</label>
                    <input type="text" name="listName" id="listName" />
                </div>
                <div className="form-group">
                    <label htmlFor="listContent">List Content</label>
                    <input type="list" name="listContent" id="listContent" />
                </div>    
                    <button type="submit" className="btn btn-primary" onSubmit={e => onSubmit(e)}>Submit</button>
            </form>


        </div>
    )
}

export default ListForm;
