// src/js/components/App.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./List.jsx";
import Form from "./Form.jsx";
import Toasts from "./Toasts";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { addToast } from "../actions/index";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { addToast } = this.props.actions;
        addToast({ text: "Hello, World!" });
    }

    render() {
        return (
            <main>
                <div className="row mt-5">
                    <div className="col-md-4 offset-md-1">
                        <h2>Articles</h2>
                        <List />
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <h2>Add a new article</h2>
                        <Form />
                    </div>
                    <Toasts />
                </div>
                <section>
                    <h1>..</h1>
                    <p>Test if Toast works by Click the button below to dispatch a toast notification.</p>
                    <button onClick={this.handleClick}>Dispatch</button>
                </section>
                <Toasts />
            </main>
        );
    }
}

App.propTypes = {
    actions: PropTypes.shape({
        addToast: PropTypes.func.isRequired
    }).isRequired
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ addToast }, dispatch)
});

export default connect(null, mapDispatchToProps)(App);

