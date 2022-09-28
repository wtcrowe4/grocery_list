//import { useState } from 'react';
//import { useDispatch, useSelector } from 'react-redux';


const MyLists = () => {


    const onSubmit = (e) => {
        e.preventDefault();
    }


    //code to render all lists for user in database


    return(
        <div className="form">
            <h3>List Form</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="listName">List Name</label>
                    <input type="text" name="listName" id="listName" />
                </div>
                <button type="submit" className="btn btn-primary" onSubmit={e => onSubmit(e)}>Submit</button>
            </form>


        </div>
    )
}

export default MyLists;
