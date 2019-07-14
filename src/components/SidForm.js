import React from "react";
import axios from "axios";

export default class SidForm extends React.Component {
    constructor() {
        super();
        this.state = {
            SID: ""
        };
    }

    getItems = async () => {
        try {
            return await axios.get(
                "https://play.dlsite.com/api/dlsite/purchases?sync=true&limit=1000/",
                {
                    headers: {
                        Cookie: `__DLsite_SID=${this.state.SID}`
                    },
                    withCredentials: true
                }
            );
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = e => {
        this.setState({
            SID: e.target.value
        });
    };

    handleSubmit = e => {
        this.getItems();
        e.preventDefault();
    };

    render() {
        return (
            <form
                style={{ display: "flex", marginBottom: "10px" }}
                onSubmit={this.handleSubmit}
            >
                <input
                    type="text"
                    placeholder="SID"
                    style={{
                        flex: 1,
                        margin: "unset",
                        borderTopRightRadius: "unset",
                        borderBottomRightRadius: "unset"
                    }}
                    value={this.state.SID}
                    onChange={this.handleChange}
                    required
                />
                <button
                    type="submit"
                    style={{
                        borderRadius: "4px",
                        borderTopLeftRadius: "unset",
                        borderBottomLeftRadius: "unset"
                    }}
                >
                    Fetch
                </button>
            </form>
        );
    }
}
