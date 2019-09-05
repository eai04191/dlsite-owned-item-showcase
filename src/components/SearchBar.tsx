import React from "react";
import classNames from "classnames";

interface Props {
    onFilterTextChange: Function;
    filterText: string;
}

export default class SearchBar extends React.Component<Props, {}> {
    handleFilterTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onFilterTextChange(e.target.value);
    };

    render() {
        const filterText = this.props.filterText;
        return (
            <form>
                <input
                    type="text"
                    placeholder="ID Search..."
                    value={filterText}
                    onChange={this.handleFilterTextChange}
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
