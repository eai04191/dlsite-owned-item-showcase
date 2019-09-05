import React from "react";
import classNames from "classnames";

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
            <form>
                <input
                    type="text"
                    placeholder='{"total":...'
                    value={this.state.json}
                    onChange={this.handleChange}
                    className={classNames(
                        "block",
                        "w-full",
                        "mb-4",
                        "py-2",
                        "px-4",
                        "bg-gray-200",
                        "border",
                        "border-transparent",
                        "focus:bg-white",
                        "focus:outline-none",
                        "focus:border-teal-600",
                        "leading-normal",
                        "rounded",
                        "appearance-none",
                        "transition"
                    )}
                />
            </form>
        );
    }
}
