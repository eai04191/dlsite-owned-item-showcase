import React from "react";
import styles from "./ParseForm.module.scss";

export default class ParseForm extends React.Component {
    constructor() {
        super();
        this.state = {
            json: ""
        };
    }

    handleChange = e => {
        const json = e.target.value;

        this.setState({
            json: json
        });

        try {
            const items = JSON.parse(json);
            this.props.onHandleItemChange(items);
        } catch (e) {
            return false;
        }
    };

    render() {
        return (
            <form className={styles.ParseForm} onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder='{"total":...'
                    value={this.state.json}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}
