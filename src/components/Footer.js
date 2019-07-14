import React from "react";
import styles from "./Footer.module.scss";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.Footer}>
                <small>
                    <p>
                        このサイトはDLsiteおよび運営会社エイシスとは一切関係ありません。
                    </p>
                    <p>
                        <a
                            href="https://github.com/eai04191/dlsite-owned-item-showcase"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            ソースコード
                        </a>
                    </p>
                </small>
            </footer>
        );
    }
}
