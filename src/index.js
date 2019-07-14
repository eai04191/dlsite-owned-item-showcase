import React from "react";
import ReactDOM from "react-dom";

import SidForm from "./components/SidForm";
import SearchBar from "./components/SearchBar";
import ItemTable from "./components/ItemTable";

import "sakura.css";
import "./styles.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: ""
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    render() {
        return (
            <>
                <h1>DLsiteの購入作品一覧を共有するやつ</h1>
                <section>
                    <h2>1. SIDを入力する</h2>
                    <p>
                        APIを叩くためにSIDが必要です。DevToolsなどから取得してください。
                    </p>
                    <p>
                        SIDは
                        <a
                            href="https://login.dlsite.com/login?user=self"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            DLsiteにログイン
                        </a>
                        した状態で送信されたリクエストヘッダーのCookieに付いている
                        <code>
                            __DLsite_SID=<b>vofgh056c9oehtk9sricdl4lsf</b>
                        </code>
                        のような文字列です。
                        <a href="sid.png" target="_blank">
                            <img src="sid.png" alt="SID取得参考画像" />
                        </a>
                    </p>
                    <SidForm />
                </section>
                <section style={{ display: "none" }}>
                    <SearchBar
                        filterText={this.state.filterText}
                        onFilterTextChange={this.handleFilterTextChange}
                    />
                    <ItemTable
                        filterText={this.state.filterText}
                        items={this.props.items}
                    />
                </section>
            </>
        );
    }
}

const items = {
    works: [
        {
            workno: "ID1",
            work_name: "title1",
            work_files: { sam: "" }
        },
        {
            workno: "ID2",
            work_name: "title2",
            work_files: { sam: "" }
        }
    ]
};

ReactDOM.render(<App items={items.works} />, document.getElementById("root"));
