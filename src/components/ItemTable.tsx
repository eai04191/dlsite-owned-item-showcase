import React from "react";
import ItemRow from "./ItemRow";
import classNames from "classnames";

interface Props {
    filterText: string;
    items: DLsitePurchasesAPI.Root;
}

export default class ItemTable extends React.Component<Props, {}> {
    render() {
        const filterText = this.props.filterText;
        const rows: any = [];

        this.props.items.works.forEach(item => {
            if (item.workno.indexOf(filterText) === -1) {
                return;
            }
            rows.push(<ItemRow item={item} key={item.workno} />);
        });
        return (
            <div className={classNames("flex", "flex-wrap", "-mx-2")}>
                {rows}
            </div>
        );
    }
}
