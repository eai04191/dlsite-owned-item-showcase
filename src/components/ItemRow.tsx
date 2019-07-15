import React from "react";
import ExternalLink from "./ExternalLink";

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
            <tr>
                <td>
                    <img src={i.work_files.sam} alt={i.work_name} />
                </td>
                <td>
                    <ExternalLink
                        href={this.createItemLink(i.site_id, i.workno)}
                        inner={i.workno}
                    />
                </td>
                <td>{i.work_name}</td>
                <td>
                    <ExternalLink
                        href={this.createMakerLink(i.site_id, i.maker_id)}
                        inner={i.maker_name}
                    />
                </td>
            </tr>
        );
    }
}
