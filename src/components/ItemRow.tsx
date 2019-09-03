import React from "react";
import styles from "./ItemRow.module.scss";

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
            <>
                <div className={[styles.item, styles[i.site_id]].join(" ")}>
                    <div className={styles.image}>
                        <img src={i.work_files.main} alt={i.work_name} />
                    </div>
                    <div className={styles.detail}>
                        <div className={styles.iconContainer}>
                            <img
                                className={styles.icon}
                                src={i.work_files.sam}
                                alt={i.work_name}
                            />
                        </div>

                        <div className={styles.info}>
                            <h1>
                                <a
                                    href={this.createItemLink(
                                        i.site_id,
                                        i.workno
                                    )}
                                >
                                    {i.work_name}
                                </a>
                            </h1>
                            <div className={styles.flexRow}>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>
                                        <a
                                            href={this.createMakerLink(
                                                i.site_id,
                                                i.maker_id
                                            )}
                                        >
                                            {i.maker_name}
                                        </a>
                                    </li>
                                </ul>
                                <span className={styles.open}>︾</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            // <tr>
            //     <td>
            //         <img src={i.work_files.sam} alt={i.work_name} />
            //     </td>
            //     <td>
            //         <ExternalLink
            //             href={this.createItemLink(i.site_id, i.workno)}
            //             inner={i.workno}
            //         />
            //     </td>
            //     <td>{i.work_name}</td>
            //     <td>
            //         <ExternalLink
            //             href={this.createMakerLink(i.site_id, i.maker_id)}
            //             inner={i.maker_name}
            //         />
            //     </td>
            // </tr>
        );
    }
}
