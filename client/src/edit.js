import React, { Fragment, useState } from "react";
const Edit = ({ todo }) => {
  const [name, setName] = useState(todo.cat_name);
  const [age, setAge] = useState(todo.cat_age);
  //edit description function
  const updateName = async (e) => {
    e.preventDefault();
    try {
      const cat_name = { name };
      const cat_age = { age };
      const response = await fetch(
        `/gatos/${todo.cat_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({cat_name,cat_age})
        }
      );
      window.location = "/path2";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
       
        
      <button
        type = "button"
        className = "btn btn-warning"
        data-toggle = "modal"
        data-target = {`#id${todo.cat_id}`}> Edit </button>

      <div className="modal" id={`id${todo.cat_id}`} onClick={() => setName(todo.cat_name)}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setName(todo.cat_name)}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={e => setName(e.target.value)}/>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={age}
                onChange={e => setAge(e.target.value)}/>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateName(e)}>
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setName(todo.cat_name)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
        
    </Fragment>
  );
};

export default Edit;