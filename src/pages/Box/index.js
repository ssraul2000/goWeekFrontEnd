import React, { Component } from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";
import { connect } from "react-redux";
import { distanceInWords } from "date-fns";
import pt from "date-fns/locale/pt";
import { requestBox } from "../../store/ducks/Box";
import { addFileCreator } from "../../store/ducks/File";
import { bindActionCreators } from "redux";
import { MdInsertDriveFile } from "react-icons/md";
import Dropzone from "react-dropzone";
import api from "../../services/api";
import socket from "socket.io-client";
class Box extends Component {
  async componentWillMount() {
    const id = this.props.match.params.id;
    const res = await api.get(`/box/${id}`);
    this.props.requestBox(res.data);
  }
  handleUpload = files => {
    files.forEach(file => {
      const data = new FormData();
      data.append("file", file);
      const id = this.props.match.params.id;
      this.props.addFileCreator(id, data);
    });
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    const io = socket("https://backendgoweek6.herokuapp.com");
    io.emmit("connectRomm", id);
  }
  render() {
    const box = this.props.box.data;
    return (
      <div id="box-container">
        <header>
          <img src={logo} alt="" />
          <h1> {box.title} </h1>
        </header>
        <Dropzone onDropAccepted={this.handleUpload}>
          {({ getRootProps, getInputProps }) => (
            <div className="upload" {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Arraste arquivos ou clique aqui!</p>
            </div>
          )}
        </Dropzone>

        <ul>
          {box.files &&
            box.files.map(file => (
              <li key={file._id}>
                <a className="fileInfo" href={file.url} target="_blank">
                  <MdInsertDriveFile size={24} color="#A5Cfff" />
                  <strong> {file.title} </strong>
                </a>
                <span>
                  hà{" "}
                  {distanceInWords(file.createdAt, new Date(), {
                    locale: pt
                  })}
                </span>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestBox, addFileCreator }, dispatch);

const mapStateToProps = state => ({
  box: state.boxReducer,
  file: state.addFileReducer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Box);
