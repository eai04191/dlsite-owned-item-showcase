import React from "react";
import DocumentTitle from "react-document-title";
import classNames from "classnames";

interface Props {
    onHandleShare: Function;
    meta: DOISAPI.meta | null;
}

interface State {
    shareButtonDisable: boolean;
    title: string;
}

export default class ListMeta extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            shareButtonDisable: false,
            title: "DLsiteの所持作品一覧を共有するやつ"
        };
    }

    handleShare = (e: React.FormEvent<HTMLButtonElement>) => {
        let name = prompt("名前を入力してください。", "名無し");
        if (name != null) {
            if (!name) {
                name = "名無し";
            }
            this.props.onHandleShare(name);
            this.setState({ shareButtonDisable: true });
        }
        e.preventDefault();
    };

    render() {
        const meta = this.props.meta;
        if (meta) {
            const title =
                meta.name +
                "さんの所持作品 - DLsiteの所持作品一覧を共有するやつ";
            console.log(title);
            if (title !== this.state.title) {
                this.setState({ title: title });
            }
        }
        return (
            <DocumentTitle title={this.state.title}>
                <div
                    className={classNames(
                        "flex",
                        "items-end",
                        "justify-between",
                        "mb-4"
                    )}
                >
                    <h3 className={classNames("text-xl")}>
                        {meta ? meta.name + "さん" : "あなた"}の所持作品
                    </h3>
                    {meta ? (
                        <p>
                            <small>{meta.date}時点</small>
                        </p>
                    ) : (
                        <form>
                            <button
                                onClick={this.handleShare}
                                disabled={this.state.shareButtonDisable}
                                className={classNames(
                                    "bg-teal-500",
                                    "hover:bg-teal-700",
                                    "text-white",
                                    "py-2",
                                    "px-4",
                                    "rounded"
                                )}
                            >
                                共有する
                            </button>
                        </form>
                    )}
                </div>
            </DocumentTitle>
        );
    }
}
