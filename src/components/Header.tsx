import React from "react";
import classNames from "classnames";

export default class Header extends React.Component {
    render() {
        return (
            <header
                className={classNames(
                    "mt-4",
                    "mb-6",
                    "pb-4",
                    "border-b-2",
                    "border-teal-600"
                )}
            >
                <h1 className={classNames("text-2xl", "text-black")}>
                    DLsiteの所持作品一覧を共有するやつ
                </h1>
            </header>
        );
    }
}
