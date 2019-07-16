import React from "react";
import DocumentTitle from "react-document-title";

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
                <>
                    <h3>{meta ? meta.name + "さん" : "あなた"}の所持作品</h3>
                    {meta ? (
                        <p>
                            <small>{meta.date}時点</small>
                        </p>
                    ) : (
                        <form>
                            <button
                                onClick={this.handleShare}
                                disabled={this.state.shareButtonDisable}
                            >
                                共有する
                            </button>
                        </form>
                    )}
                </>
            </DocumentTitle>
        );
    }
}
