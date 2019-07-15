import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import axios from "axios";
import history from "./history";

import "normalize.css";
import "sakura.css";

import ResponseFrame from "./components/ResponseFrame";
import ParseForm from "./components/ParseForm";
import SearchBar from "./components/SearchBar";
import ItemTable from "./components/ItemTable";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
    faBookOpen,
    faHeadphones,
    faVideo,
    faGamepad,
    faChartPie
} from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faTwitter);
library.add(faBookOpen, faHeadphones, faVideo, faGamepad, faChartPie);

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
        // history.push(JSON.stringify(items));
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

    componentWillMount = () => {
        const pathMatch = history.location.search.match(/^\?(http[s]?:\/\/.+)/);
        if (pathMatch) {
            console.log("パスが含まれているようです");
            const url = pathMatch[1];
            axios
                .get(url)
                .then(res => {
                    console.log(res.data);
                    this.handleItemChange(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };

    render() {
        return (
            <Router history={history}>
                <Header />

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

                <Footer />
            </Router>
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
