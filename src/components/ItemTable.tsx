import React from "react";
import ItemRow from "./ItemRow";
import classNames from "classnames";

interface Props {
    filterText: string;
    items: DLsitePurchasesAPI.Root;
}

export default class ItemTable extends React.Component<Props, {}> {
    katakana2hiragana = (katakana: string[]): string => {
        return katakana
            .map(char => String.fromCharCode(char.charCodeAt(0) - 0x60))
            .join("");
    };

    render() {
        const filterText = this.props.filterText;
        const rows: any = [];

        this.props.items.works.forEach(item => {
            if (
                item.workno.indexOf(filterText) !== -1 ||
                this.katakana2hiragana([...item.work_name_kana]).indexOf(
                    filterText
                ) !== -1
            ) {
                console.log(
                    item.work_name_kana,
                    filterText,
                    this.katakana2hiragana([...item.work_name_kana])
                );
                rows.push(<ItemRow item={item} key={item.workno} />);
            }
        });
        return (
            <div className={classNames("flex", "flex-wrap", "-mx-2")}>
                {rows}
            </div>
        );
    }
}
