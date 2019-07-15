import React from "react";

export default class ItemRow extends React.Component {
    render() {
        const item = this.props.item;
        return (
            <tr>
                <td>
                    <img src={item.work_files.sam} alt={item.work_name} />
                </td>
                <td>
                    <a
                        href={"https://dlsite.jp/howtw/" + item.workno}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        {item.workno}
                    </a>
                </td>
                <td>{item.work_name}</td>
                <td>
                    <a
                        href={
                            `https://www.dlsite.com/${item.site_id}/circle/profile/=/maker_id/${item.maker_id}.html`
                        }
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        {item.maker_name}
                    </a>
                </td>
            </tr>
        );
    }
}
