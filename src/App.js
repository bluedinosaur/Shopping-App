import React from "react";
import "./App.css";
import Nav from "./Nav";
import ItemPage from "./ItemPage";
import { items } from "./static-data";
import CartPage from "./CartPage";

class App extends React.Component {
  state = {
    activeTab: 0,
    cart: [],
  };

  handleTabChange = (index) => {
    this.setState({
      activeTab: index,
    });
  };

  handleAddToCart = (item) => {
    this.setState({
      cart: [...this.state.cart, item.id],
    });
  };

  handleRemoveOne = (item) => {
    let index = this.state.cart.indexOf(item.id);
    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1),
      ],
    });
  };

  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0:
        return <ItemPage items={items} onAddToCart={this.handleAddToCart} />;
      case 1:
        return this.renderCart();
    }
  }

  renderCart() {
    let itemCounts = this.state.cart.reduce((item, itemId) => {
      item[itemId] = item[itemId] || 0;
      item[itemId]++;
      return item;
    }, {});

    let cartItems = Object.keys(itemCounts).map((itemId) => {
      var item = items.find((item) => item.id === parseInt(itemId, 10));
      return {
        ...item,
        count: itemCounts[itemId],
      };
    });

    if (cartItems.length === 0) {
      return <div className="EmptyCart">Your cart is empty.</div>;
    } else {
      return (
        <CartPage
          items={cartItems}
          onAddOne={this.handleAddToCart}
          onRemoveOne={this.handleRemoveOne}
        />
      );
    }
  }

  render() {
    let { activeTab } = this.state;
    let { cart } = this.state;
    console.log(cart);
    return (
      <div className="App">
        <Nav
          cart={cart}
          activeTab={activeTab}
          onTabChange={this.handleTabChange}
        />
        <main className="App-content">{this.renderContent()}</main>
      </div>
    );
  }
}

export default App;
