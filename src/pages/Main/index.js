import React, { Component } from "react";
import "./styles.css";
import { addBoxCreator } from "../../store/ducks/Box";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logo from "../../assets/logo.svg";
class Main extends Component {
  state = {
    newBoxTitle: ""
  };
  handleInputChange = e => {
    this.setState({ newBoxTitle: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addBoxCreator(this.state.newBoxTitle);
  };
  handleTitleButton = () => {};
  render() {
    return (
      <div id="main-container">
        <form action="">
          <img src={logo} alt="" />
          <input
            type="text"
            value={this.setState.newBoxTitle}
            onChange={this.handleInputChange}
            placeholder="Criar um box"
          />
          <button type="submit" onClick={this.handleSubmit}>
            {!this.props.box.loading && "Criar"}
            {this.props.box.loading && "...Loading"}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  box: state.addBoxReducer
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addBoxCreator }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
