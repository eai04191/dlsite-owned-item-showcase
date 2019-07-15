import React from "react";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                            <FontAwesomeIcon icon={["fab", "github"]} />
                            ソースコード
                        </a>
                    </p>
                </small>
            </footer>
        );
    }
}
