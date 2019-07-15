import React from "react";
import styles from "./SearchBar.module.scss";

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
            <form className={styles.SearchBar}>
                <input
                    type="text"
                    placeholder="ID Search..."
                    value={filterText}
                    onChange={this.handleFilterTextChange}
                />
            </form>
        );
    }
}
