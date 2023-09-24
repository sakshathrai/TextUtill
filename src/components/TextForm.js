import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");

    const conUp = () => {
        setText(text.toUpperCase());
    };

    const conLo = () => {
        setText(text.toLowerCase());
    };

    const conSe = () => {
        setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const extractEmails = () => {
        let matches = text.match(
            /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi
        );
        return matches ? matches.join(" ") : "";
    };

    const extractWeb = () => {
        let matches = text.match(/([a-zA-Z]+\.[a-zA-Z0-9._-]+\.[a-zA-Z]+)/gi);
        return matches ? matches.join(" ") : "";
    };

    const extraSp = () => {
        let nwtxt = text.split(/\s+/).filter((element) => element.length !== 0);
        setText(nwtxt.join(" "));
    };

    const clearAll = () => {
        setText("");
        props.showAlert("Cleared", "success");
    };

    const cpy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied!", "success");
    };

    const cpyemail = () => {
        const emails = extractEmails();
        if (emails) {
            navigator.clipboard.writeText(emails);
            props.showAlert("Copied!", "success");
        }
    };

    const cpyweb = () => {
        const websites = extractWeb();
        if (websites) {
            navigator.clipboard.writeText(websites);
            props.showAlert("Copied!", "success");
        }
    };

    return (
        <div className="container">
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    rows="8"
                    value={text}
                    id="myBox"
                    placeholder="Enter the Text"
                    onChange={handleOnChange}
                    style={{
                        backgroundColor: props.mode === "light" ? "white" : "#131315",
                        color: props.mode === "dark" ? "white" : "black",
                    }}
                ></textarea>
            </div>
            <button
                disabled={text.length === 0}
                className="btn btn-primary mx-1 my-1"
                onClick={conUp}
            >
                Convert to UpperCase
            </button>
            <button
                disabled={text.length === 0}
                className="btn btn-primary mx-1 my-1"
                onClick={conLo}
            >
                Convert to LowerCase
            </button>
            <button
                disabled={text.length === 0}
                className="btn btn-primary mx-1 my-1"
                onClick={conSe}
            >
                Convert to SentenceCase
            </button>
            <button
                disabled={text.length === 0}
                className="btn btn-primary mx-1 my-1"
                onClick={extraSp}
            >
                Remove extra space
            </button>
            <button
                disabled={text.length === 0}
                className="btn btn-primary mx-1 my-1"
                onClick={cpy}
            >
                Copy
            </button>
            <button
                disabled={text.length === 0}
                className="btn btn-primary mx-1 my-1"
                onClick={clearAll}
            >
                Clear all
            </button>
            <div className="container my-3">
                <h3>Your Text Summary</h3>
                <p>
                    {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
                    words and {text.length} characters
                </p>
                <p>
                    {0.008 *
                        text.split(" ").filter((element) => element.length !== 0).length <
                        1
                        ? (
                            0.008 *
                            text.split(" ").filter((element) => element.length !== 0)
                                .length *
                            60
                        ).toFixed(3) + " seconds"
                        : (0.008 * text.split(" ").length).toFixed(3) + " minutes"}{" "}
                    to read
                </p>
                <hr />
                <h3>Analyze Text</h3>
                <div>
                    <p className="my-2">
                        <b>Email: </b>
                        {extractEmails()
                            .split(" ")
                            .map((email, index) => (
                                <span key={index}>
                                    {index > 0 ? ", " : ""}
                                    {email}
                                </span>
                            ))}
                    </p>
                    <button
                        disabled={!extractEmails()}
                        className="btn btn-primary mx-1"
                        onClick={cpyemail}
                    >
                        Copy
                    </button>
                    <p className="my-2">
                        <b>Website: </b>
                        {extractWeb()
                            .split(" ")
                            .map((web, index) => (
                                <span key={index}>
                                    {index > 0 ? ", " : ""}
                                    {web}
                                </span>
                            ))}
                    </p>
                    <button
                        disabled={!extractWeb()}
                        className="btn btn-primary mx-1"
                        onClick={cpyweb}
                    >
                        Copy
                    </button>
                </div>
                <hr />
                <div> 
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
                </div>
            </div>
        </div>
    );
}
