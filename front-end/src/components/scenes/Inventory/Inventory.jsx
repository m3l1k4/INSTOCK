// Khizar wrote this
import React, { Component } from "react";
import Items from "./Items";
import axios from "axios";
import Switch from "react-switch";
import SearchIcon from "./atoms/Icon-search.svg";
import Modal from "./Modal/Modal";
import AddInv from "./addInv";
import { ModalProvider } from 'styled-react-modal'


export default class Inventory extends Component {
  state = {
    inventory: [],
    show: false
  };

  showModal=() =>{
    this.setState({
      ...this.state,
      show: !this.state.show
    })
  }

  hideModal = ()=>{
    this.setState({show:false});

  }
  componentDidMount() {
    axios.get("http://localhost:8080/inventory").then(res => {
      this.setState({
        inventory: [res.data]
      });
    });
  }
  updateItems = () => {
    setTimeout(() => {
      axios.get("http://localhost:8080/inventory").then(res => {
      this.setState({
        inventory: [res.data]
      });
    });
    }, 60);
  };
  render() {
    // if items present in inventory:
    if (this.state.inventory.length > 0) {
        return (
          <>
          <div className="container">
            <div className="inventory-header">
              <h1 className="inventory-header__title">Inventory</h1>
              <div className="inventory-header__searchbar">
                <img
                  alt = "search"
                  className="inventory-header__searchbar-icon"
                  src={SearchIcon}
                />
                <input
                  className="inventory-header__searchbar-input"
                  type="text"
                  placeholder="Search"
                ></input>
              </div>
            </div>          
            <div className="inventory-subHeaders">
              <span className="inventory-subHeaders__content">Item</span>
              <span className="inventory-subHeaders__content">Last Ordered</span>
              <span className="inventory-subHeaders__content">Location</span>
              <span className="inventory-subHeaders__content">Quantity</span>
              <span className="inventory-subHeaders__content status-sub">Status</span>
            </div>
            <Items
              updateItems={this.updateItems}
              inventory={this.state.inventory}
            />
            {/* add NewInventoryItem / modal here */}
            <buttom className="addSign" type="button" value ="Show Modal" onClick={this.showModal}>+</buttom>

            <Modal show={this.state.show}
             onClose={this.showModal}>
              {<AddInv/>}
            </Modal>

            </div>
          </>
        );  
    } else {
      // if no items in the inventory:
      return <h1>Loading...</h1>;
    }
  }
}

