import React from 'react';
import { useState } from 'react';
export default function TextForm(props) {
    const conUp = () => {
        setText(text.toUpperCase());
    }

    const conLo = () => {
        setText(text.toLowerCase());
    }

    const conSe = () => {
        setText(text.toLowerCase().charAt(0).toUpperCase() + text.slice(1));
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const extractEmails = () => {
        let a = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
        return a + '';
    }

    const extractWeb = () => {
        let a = text.match(/([a-zA-Z]+\.[a-zA-Z0-9._-]+\.[a-zA-Z]+)/gi);
        return a + '';
    }

    const extraSp = () => {
        let nwtxt = text.split(/[ ]+/);
        setText(nwtxt.join(" "));
    }

    const clearAll = () => {
        setText("");
    }

    const cpy = () => {
        navigator.clipboard.writeText(text)
    }

    const [myStyle, setmyStyle] = useState({
        color: 'black',
        background: 'white'

    });

    const btnPress = () => {
        if (btnTxt === "Dark Mode") {
            setbtnText("Light Mode");
            setmyStyle({
                color: 'rgb(218, 255, 251)',
                background: 'rgb(0, 28, 48)',
            });
        }
        else {
            setbtnText("Dark Mode");
            setmyStyle({
                color: 'black',
                background: 'white',
            });
        }
    }

    const [btnTxt, setbtnText] = useState('Dark Mode');
    const [text, setText] = useState('');

    return (
        <><div className="contaniner" style={myStyle} >
            <div className='container'>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" style={myStyle} id="myBox" rows="8" value={text} placeholder="Enter the Text" onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my -1" onClick={conUp}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1 my -1" onClick={conLo}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1 my -1" onClick={conSe}>Convert to SentenceCase</button>
                <button className="btn btn-primary mx-1 my -1" onClick={extraSp}>Remove extra space</button>
                <button className="btn btn-primary mx-1 my -1" onClick={cpy}>Copy</button>
                <button className="btn btn-primary mx-1 my -1" onClick={clearAll}>Clear all</button>
            </div>
            <div className="container my-3 mx-1">
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters </p>
                <p>{(0.008 * text.split(" ").length) < 1 ? ((0.008 * text.split(" ").length * 60).toFixed(3) + ' seconds') : ((0.008 * text.split(" ").length).toFixed(3) + ' minutes')} to read</p>
                <hr />
                <h3>Analyze Text</h3>
                <p><b>Email: </b>{extractEmails()}</p>
                <p><b>Website: </b>{extractWeb()}</p>
                <hr />
                <h3>Preview</h3>
                <p>{text}</p>
            </div>


            <div className='my-2 mx-'>
                <button type="button" className="btn btn-outline-success my-2 mx-2" onClick={btnPress}>{btnTxt}</button>
            </div>
        </div>
        </>
    )
}