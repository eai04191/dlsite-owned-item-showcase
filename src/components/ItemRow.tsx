import React from "react";
import classNames from "classnames";
import styles from "./ItemRow.module.scss";
import ExternalLink from "./ExternalLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    item: DLsitePurchasesAPI.Work;
}

export default class ItemRow extends React.Component<Props, {}> {
    createMakerLink = (site_id: string, maker_id: string) => {
        return `https://www.dlsite.com/${site_id}/circle/profile/=/maker_id/${maker_id}.html`;
    };

    createItemLink = (site_id: string, workno: string) => {
        return `https://www.dlsite.com/${site_id}/work/=/product_id/${workno}.html`;
    };

    render() {
        const i = this.props.item;
        return (
            <div className={classNames("w-full", "lg:w-1/2", "mb-4", "px-2")}>
                <div
                    className={classNames(
                        styles.item,
                        styles[i.work_type.value],
                        "relative",
                        "h-32",
                        "bg-gray-500",
                        "bg-cover",
                        "border-solid",
                        "border-l-4",
                        "text-white",
                        "rounded",
                        "shadow-lg",
                        "overflow-hidden"
                    )}
                    style={{ backgroundImage: `url(${i.work_files.main})` }}
                >
                    <div
                        className={classNames(
                            styles.detail,
                            "w-full",
                            "h-full",
                            "flex",
                            "items-center",
                            "p-4"
                        )}
                    >
                        <ExternalLink
                            href={this.createItemLink(i.site_id, i.workno)}
                            className={classNames(
                                "flex-none",
                                "w-16",
                                "md:w-20",
                                "mr-3",
                                "md:mr-4"
                            )}
                        >
                            <img
                                className={classNames("rounded", "shadow")}
                                src={i.work_files.sam}
                                alt={i.work_name}
                            />
                        </ExternalLink>
                        <div
                            className={classNames(
                                "w-full",
                                "overflow-hidden",
                                "flex",
                                "flex-col"
                            )}
                        >
                            <p
                                className={classNames(
                                    "text-lg",
                                    "md:text-xl",
                                    "h-5",
                                    "leading-tight",
                                    "md:leading-none",
                                    "overflow-y-visible",
                                    "truncate",
                                    "font-medium",
                                    "mb-1",
                                    "md:mb-2"
                                )}
                            >
                                <ExternalLink
                                    href={this.createItemLink(
                                        i.site_id,
                                        i.workno
                                    )}
                                    title={i.work_name}
                                >
                                    {i.work_name}
                                </ExternalLink>
                            </p>
                            <div
                                className={classNames(
                                    "flex",
                                    "items-center",
                                    "justify-between"
                                )}
                            >
                                <p>
                                    <ExternalLink
                                        href={this.createMakerLink(
                                            i.site_id,
                                            i.maker_id
                                        )}
                                        title={i.maker_name}
                                    >
                                        {i.maker_name}
                                    </ExternalLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
