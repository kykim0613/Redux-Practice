import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { actionCreators } from "../store";

const ToDo = ({text, ownBtnClick, id}) => {
    return (
        <li>
            <Link to={`/${id}`}>
            {text} <button onClick={ownBtnClick}>DEL</button>
            </Link>
        </li>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ownBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(ToDo);