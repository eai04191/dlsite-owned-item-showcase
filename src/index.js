import React from "react";
import ReactDOM from "react-dom";

import "normalize.css";
import "sakura.css";

import ResponseFrame from "./components/ResponseFrame";
import ParseForm from "./components/ParseForm";
import SearchBar from "./components/SearchBar";
import ItemTable from "./components/ItemTable";

import "./styles.scss";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            items: items,
            itemListDisplay: { display: "none" },
            parseSectionDisplay: { display: "block" }
        };
    }

    handleItemChange = items => {
        this.setState({
            items: items,
            itemListDisplay: { display: "block" },
            parseSectionDisplay: { display: "none" }
        });
    };

    handleFilterTextChange = filterText => {
        this.setState({
            filterText: filterText
        });
    };

    render() {
        return (
            <>
                <h1>DLsiteの購入作品一覧を共有するやつ</h1>
                <section style={this.state.parseSectionDisplay}>
                    {/* <h2>1. タイトル未定</h2> */}
                    <p>
                        下のなんかよくわからないやつを全て選択して下の入力欄にコピペしてください。
                        <br />
                        表示されない場合は
                        <a
                            href="https://ssl.dlsite.com/home/mypage"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            DLsiteにログイン
                        </a>
                        してから再読込してください。
                    </p>
                    <p>
                        <ResponseFrame />
                    </p>
                    <ParseForm onHandleItemChange={this.handleItemChange} />
                </section>
                <section style={this.state.itemListDisplay}>
                    {/* <h2>2. 一覧</h2> */}
                    <SearchBar
                        filterText={this.state.filterText}
                        onFilterTextChange={this.handleFilterTextChange}
                    />
                    <ItemTable
                        filterText={this.state.filterText}
                        items={this.state.items}
                    />
                </section>
            </>
        );
    }
}

const items = {
    works: [
        {
            workno: "",
            work_name: "",
            work_files: { sam: "" }
        }
    ]
};

ReactDOM.render(<App />, document.getElementById("root"));
