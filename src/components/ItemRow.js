import React from "react";

export default class ItemRow extends React.Component {
    render() {
        const item = this.props.item;
        return (
            <tr>
                <td>
                    <img src={item.work_files.sam} alt={item.work_name} />
                </td>
                <td>{item.workno}</td>
                <td>{item.work_name}</td>
            </tr>
        );
    }
}
