import React from "react";
import styles from "./SearchBar.module.scss";

export default class SearchBar extends React.Component {
    handleFilterTextChange = e => {
        this.props.onFilterTextChange(e.target.value);
    };

    render() {
        const filterText = this.props.filterText;
        return (
            <form className={styles.SearchBar}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={filterText}
                    onChange={this.handleFilterTextChange}
                />
            </form>
        );
    }
}
