import React from "react";
import ItemRow from "./ItemRow";

export default class ItemTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const rows = [];

        this.props.items.forEach(item => {
            if (item.workno.indexOf(filterText) === -1) {
                return;
            }
            rows.push(<ItemRow item={item} key={item.workno} />);
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th />
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}
