import React from "react";
import ItemRow from "./ItemRow";
import styles from "./ItemTable.module.scss";

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
        return <div className={styles.ItemTable}>{rows}</div>;
    }
}
