import React, { Component } from "react";
import arrow from "./atoms/Icon-arrow-right.svg";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ArrowLink extends Component {

  render() {

    return (

      <div className="table-row__remove">
        <div className="table-row__remove--dropdown-handle">
          {/*specificwarehouseinventory in link tag needs to be by id instead*/}
          <Link to ='/specificwarehouseinventory'><input  className="table-row__remove-button" alt="arrow" type="image" src={arrow} /></Link>
          <div className="table-row__remove--dropdown-content"></div>
        </div>
      </div>
    );
  }
}

