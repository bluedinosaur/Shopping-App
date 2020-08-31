import React from "react";
import Total from "./TotalCart";

const Nav = ({ activeTab, onTabChange, cart }) => (
  <nav className="App-nav">
    <ul className="List-container">
      <li className={`App-nav-item ${activeTab === 0 && "selected"}`}>
        <NavLink index={0} onClick={onTabChange}>
          Items
        </NavLink>
      </li>
      <li className={`App-nav-item ${activeTab === 1 && "selected"}`}>
        <NavLink index={1} onClick={onTabChange}>
          Cart
        </NavLink>
      </li>
      <li className={`App-nav-item-total ${activeTab === 1 && "selected"}`}>
        <NavLink index={1} onClick={onTabChange}>
          <Total cart={cart} />
        </NavLink>
      </li>
    </ul>
  </nav>
);

class NavLink extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.index);
  };

  render() {
    return <a onClick={this.handleClick}>{this.props.children}</a>;
  }
}

export default Nav;
