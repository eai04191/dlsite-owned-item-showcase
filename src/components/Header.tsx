import React from "react";
import styles from "./Header.module.scss";

export default class Header extends React.Component {
    render() {
        return (
            <header className={styles.Header}>
                <h1>DLsiteの所持作品一覧を共有するやつ</h1>
            </header>
        );
    }
}
