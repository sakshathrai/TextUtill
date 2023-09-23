import React from 'react';
import { useState } from 'react';
export default function TextForm(props) {
    const conUp = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase!!","success");
    }

    const conLo = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase!!","success");
    }

    const conSe = () => {
        setText(text.toLowerCase().charAt(0).toUpperCase() + text.slice(1));
        props.showAlert("Converted to SentenceCase!!","success");
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
        props.showAlert("Extra Spaces removed!","success");

    }

    const clearAll = () => {
        setText("");
        props.showAlert("Cleared","success");
    }

    const cpy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied!","success");
    }

    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     background: 'white'
 
    // });

    // const btnPress = () => {
    //     if (btnTxt === "Dark Mode") {
    //         setbtnText("Light Mode");
    //         setmyStyle({
    //             color: 'rgb(218, 255, 251)',
    //             background: 'rgb(0, 28, 48)',
    //         });
    //     }
    //     else {
    //         setbtnText("Dark Mode");
    //         setmyStyle({
    //             color: 'black',
    //             background: 'white',
    //         });
    //     }
    // }
    const [text, setText] = useState('');

    return (
        <><div className="contaniner"  >
            <div className='container'>
                <h3>{props.heading}</h3>
                <div className="mb-3" >
                    <textarea className="form-control"  rows="8" value={text} id="myBox" placeholder="Enter the Text" onChange={handleOnChange} style={{backgroundColor:props.mode==='light'? 'white':'#131315',color:props.mode==='dark'? 'white':'black'}}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={conUp}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={conLo}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={conSe}>Convert to SentenceCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={extraSp}>Remove extra space</button>
                <button className="btn btn-primary mx-1 my-1" onClick={cpy}>Copy</button>
                <button className="btn btn-primary mx-1 my-1" onClick={clearAll}>Clear all</button>
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
        </div>
        </>
    )
}