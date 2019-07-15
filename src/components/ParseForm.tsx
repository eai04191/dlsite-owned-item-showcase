import React from "react";
import styles from "./ParseForm.module.scss";

interface Props {
    onHandleItemChange: Function;
}

interface State {
    json: string;
}

export default class ParseForm extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            json: ""
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            <form className={styles.ParseForm}>
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
