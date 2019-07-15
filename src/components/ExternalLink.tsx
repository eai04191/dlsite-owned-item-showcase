import React from "react";

interface Props {
    href: string;
    inner: string;
}

export default class ExternalLink extends React.Component<Props, {}> {
    render() {
        return (
            <a href={this.props.href} target="_blank" rel="noreferrer noopener">
                {this.props.inner}
            </a>
        );
    }
}
