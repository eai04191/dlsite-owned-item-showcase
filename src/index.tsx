import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import DocumentTitle from "react-document-title";

import axios from "axios";
import history from "./history";

import "normalize.css";
// import "sakura.css";

import ResponseFrame from "./components/ResponseFrame";
import ParseForm from "./components/ParseForm";
import ListMeta from "./components/ListMeta";
import SearchBar from "./components/SearchBar";
import ItemTable from "./components/ItemTable";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ExternalLink from "./components/ExternalLink";

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

interface State {
    filterText: string;
    res: DOISAPI.Root | null;
    itemListDisplay: { display: string };
    parseSectionDisplay: { display: string };
}

class App extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            filterText: "",
            res: null,
            itemListDisplay: { display: "none" },
            parseSectionDisplay: { display: "block" }
        };
    }

    handleGetSharedResponse = (res: DOISAPI.Root) => {
        this.setState({
            res: res,
            itemListDisplay: { display: "block" },
            parseSectionDisplay: { display: "none" }
        });
    };

    handleItemChange = (items: DLsitePurchasesAPI.Root) => {
        const tempResponse: DOISAPI.Root = { meta: null, data: items };
        this.setState({
            res: tempResponse,
            itemListDisplay: { display: "block" },
            parseSectionDisplay: { display: "none" }
        });
    };

    handleFilterTextChange = (filterText: string) => {
        this.setState({
            filterText: filterText
        });
    };

    handleShare = (name: string) => {
        if (this.state.res) {
            const data = this.state.res.data;

            const params = new URLSearchParams();
            params.append("data", JSON.stringify(data));
            params.append("name", name);

            axios
                .post("https://dois.now.sh/v1/items/", params)
                .then(res => {
                    const id = res.data.id;
                    window.open(
                        document.location.origin +
                            document.location.pathname +
                            "?" +
                            id,
                        "_blank"
                    );
                })
                .catch(err => {
                    console.error(err);
                });
        } else {
            throw new Error("dataがないのにhandleShareが呼ばれました");
        }
    };

    componentWillMount = () => {
        if (history.location.search) {
            // 共有URL
            const url =
                "https://dois.now.sh/v1/items/" +
                history.location.search.slice(1); //先頭の?を削除
            axios
                .get(url)
                .then(res => {
                    console.log(res.data);
                    this.handleGetSharedResponse(res.data);
                })
                .catch(err => {
                    console.error(err);
                });
        }
    };

    render() {
        return (
            <DocumentTitle title="DLsiteの所持作品一覧を共有するやつ">
                <Router history={history}>
                    <Header />

                    <section style={this.state.parseSectionDisplay}>
                        <p>
                            下のなんかよくわからないやつを
                            <strong>全て選択</strong>
                            して下の入力欄にコピペしてください。
                            <br />
                            表示されない場合は
                            <ExternalLink href="https://ssl.dlsite.com/home/mypage">
                                DLsiteにログイン
                            </ExternalLink>
                            してから再読込してください。
                        </p>

                        <details>
                            <summary>コピーができませんか？</summary>
                            {/* eslint-disable jsx-a11y/anchor-is-valid, no-script-url*/}
                            <p>
                                <a
                                    href={
                                        "javascript:((d)=>{s=d.createElement('script');s.src='" +
                                        document.location.origin +
                                        "/bookmarklet.js';d.body.appendChild(s);})(document)"
                                    }
                                >
                                    DOISに送信
                                </a>
                            </p>
                            <p>
                                上のリンクをブックマークに保存して、
                                <ExternalLink href="https://play.dlsite.com/#/library">
                                    DLsite Play
                                </ExternalLink>
                                のタブで開いてください。
                                <br />
                                所持作品を収集し共有ページを作成します。
                                <br />
                                <p>
                                    <ExternalLink href="https://gfycat.com/politedismalanteater">
                                        Android Chromeの例
                                    </ExternalLink>
                                </p>
                                <p>
                                    <ExternalLink href="https://gfycat.com/skinnyweirdarcticduck">
                                        iOS Chromeの例
                                    </ExternalLink>
                                    (iOS Safariでは利用できません)
                                </p>
                            </p>
                        </details>

                        <p>
                            <ResponseFrame />
                        </p>

                        {/* eslint-enable jsx-a11y/anchor-is-valid, no-script-url*/}

                        <ParseForm onHandleItemChange={this.handleItemChange} />
                    </section>
                    {this.state.res ? (
                        <section style={this.state.itemListDisplay}>
                            <ListMeta
                                meta={this.state.res.meta}
                                onHandleShare={this.handleShare}
                            />
                            <SearchBar
                                filterText={this.state.filterText}
                                onFilterTextChange={this.handleFilterTextChange}
                            />
                            <ItemTable
                                filterText={this.state.filterText}
                                items={this.state.res.data}
                            />
                        </section>
                    ) : null}

                    <Footer />
                </Router>
            </DocumentTitle>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
