import React from "react";
import styles from "./ResponseFrame.module.scss";

export default class ResponseFrame extends React.Component<{},{}> {
    render() {
        return (
            <iframe
                title="DLsite API Resopnse"
                src="https://play.dlsite.com/api/dlsite/purchases?limit=5000"
                className={styles.ResponseFrame}
                referrerPolicy="no-referrer"
            />
        );
    }
}
