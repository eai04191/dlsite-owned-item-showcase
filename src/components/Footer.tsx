import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import ExternalLink from "./ExternalLink";

export default class Footer extends React.Component {
    render() {
        return (
            <footer
                className={classNames(
                    "mt-24",
                    "py-16",
                    "border-t-2",
                    "border-teal-600",
                    "text-gray-700",
                    "text-center"
                )}
            >
                <small>
                    <p className="mb-3">
                        このサイトはDLsiteおよび運営会社エイシスとは一切関係ありません。
                    </p>
                    <p>
                        <ExternalLink href="https://github.com/eai04191/dlsite-owned-item-showcase">
                            <FontAwesomeIcon icon={["fab", "github"]} />
                            ソースコード
                        </ExternalLink>
                    </p>
                </small>
            </footer>
        );
    }
}
