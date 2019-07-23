import React from "react";
import ItemRow from "./ItemRow";
import styles from "./ItemTable.module.scss";
import { Doughnut } from "react-chartjs-2";

interface Props {
    filterText: string;
    items: DLsitePurchasesAPI.Root;
}

export default class ItemTable extends React.Component<Props, {}> {
    render() {
        const filterText = this.props.filterText;
        const rows: any = [];
        let age_category_all = 0;
        let age_category_r15 = 0;
        let age_category_r18 = 0;

        this.props.items.works.forEach(item => {
            switch (item.age_category) {
                case 1:
                    age_category_all++;
                    break;
                case 2:
                    age_category_r15++;
                    break;
                case 3:
                    age_category_r18++;
                    break;
                default:
                    break;
            }

            if (item.workno.indexOf(filterText) === -1) {
                return;
            }
            rows.push(<ItemRow item={item} key={item.workno} />);
        });

        return (
            <>
                <Doughnut
                    data={{
                        datasets: [
                            {
                                data: [
                                    age_category_all,
                                    age_category_r15,
                                    age_category_r18
                                ],
                                backgroundColor: [
                                    "rgba(255, 99, 132, 0.2)",
                                    "rgba(54, 162, 235, 0.2)",
                                    "rgba(255, 206, 86, 0.2)"
                                ]
                            }
                        ],
                        labels: ["全年齢", "R-15", "R-18"]
                    }}
                    legend={{ display: true }}
                />
                <table className={styles.ItemTable}>
                    <thead>
                        <tr>
                            <th />
                            <th>ID</th>
                            <th>Name</th>
                            <th>Maker</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </>
        );
    }
}
