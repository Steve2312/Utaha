import React, { useState } from "react";
import ReactDOM from "react-dom";
import Navigation from "../components/Navigation";
import Results from "../screens/Results";

function Practice({form}) {
    const [index, setIndex] = useState(0);

    function submit() {
        const input = document.getElementById("input");

        if (input.value === "") {
            return input.style.border = "2px solid red";
        }

        form.list[index].userinput = input.value;

        if (index + 1 !== list.length) {
            input.value = "";
            return setIndex(index => index + 1);
        }

        ReactDOM.render(<Results form={form} />, document.getElementById('root'));
    }

    function EnterHandler(event) {
        if (event.key === "Enter") {
            submit();
        }
    }

    const {title, list} = form;

    const current = list[index];
    const next = list[index + 1];
    return (
        <>
            <Navigation name={"Practice: " + title} />
            <div className="practice">
                <div className="status">
                    <span className="subject">Progress {index}/{list.length}</span>
                    <span className="subject">{index + 1 !== list.length ? "Next word: " + next.questions.join(",") : null}</span>
                </div>
                <div className="screen">
                    <h1>{current.questions.join(",")}</h1>
                    <input id="input" type="text" placeholder="Type your answer here" onKeyUp={EnterHandler}></input>
                    <button className="button" id="submit" onClick={submit}>Submit</button>
                </div>
            </div>
        </>
    );
}

export default Practice;