import React from "react";
import classNames from "classnames";

export default class ResponseFrame extends React.Component<{}, {}> {
    render() {
        return (
            <iframe
                title="DLsite API Resopnse"
                src="https://play.dlsite.com/api/dlsite/purchases?limit=5000"
                className={classNames(
                    "w-full",
                    "h-20",
                    "mb-4",
                    "bg-gray-200",
                    "py-2",
                    "px-4",
                )}
                referrerPolicy="no-referrer"
            />
        );
    }
}
