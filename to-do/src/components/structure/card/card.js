import React from "react";
import { Link } from "react-router-dom";

const card = (props) => {
  const task = props.data;

  return (
    <Link to={`/view/${task._id}`} className="col">
      <div class="card w-50">
        <div class="card-body">
          <h5 class="card-title">{task.titulo}</h5>
          <p class="card-text">{task.descricao}</p>
          <button onclick="" class="btn btn-primary">
            status
          </button>
        </div>
      </div>
    </Link>
  );
};
