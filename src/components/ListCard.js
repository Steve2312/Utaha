import React from "react";
import ReactDOM from 'react-dom';
import Practice from "../screens/Practice";
import View from '../screens/View';

function ListCard({title, total, index}) {
    return (
        <div className="list">
            <div className="left">
                <div className="index">#{index}</div>
                <div className="metadata">
                    <span className="title">{title}</span>
                    <span className="subject">Total words: {total}</span>
                </div>
            </div>

            <div className="right">
                <span className="option" onClick={() => practice(title, "English-Kanji+Japanese")}>EN to Kanji + JP</span>
                <span className="option" onClick={() => practice(title, "Kanji-Kanji+Japanese")}>Kanji to Kanji + JP</span>
                <span className="option" onClick={() => {view(title)}}>View List</span>
            </div>
        </div>
    );
}

async function view(title) {
    const location = process.env.PUBLIC_URL + "/Genki Volume 1/" + title;
    const data = (await (await fetch(location)).text()).split("\n");

    ReactDOM.render(<View title={title} data={data} />, document.getElementById('root'));
}

async function practice(title, mode) {
    const location = process.env.PUBLIC_URL + "/Genki Volume 1/" + title;
    const data = (await (await fetch(location)).text()).split("\n");

    var indexToAsk = [];
    var indexToCheck = [];
    var error;

    const form = {
        title: title,
        list: []
    };

    for (let currentIndex = 0; currentIndex < data.length; currentIndex++) {
        const line = data[currentIndex].replace(/\r?\n|\r/g, "");
        const row = line.split(",");

        if (currentIndex === 0) {
            const languages = mode.split('-');
            if (languages.length !== 2) {
                error = "Wrong mode format";
                break;
            }

            languages.forEach((modeLanguages, index) => {
                const selected = modeLanguages.split("+");
                selected.forEach(language => {
                    const headerIndex = row.indexOf(language);
                    switch(index) {
                        case 0:
                            indexToAsk.push(headerIndex);
                            break;
                        case 1:
                            indexToCheck.push(headerIndex);
                            break;
                        default:
                    }
                })
            });

            if (indexToAsk.includes(-1) || indexToCheck.includes(-1)) {
                error = "Wrong mode format";
                break;
            }

            continue;
        }
        const questions = indexToAsk.map(index => row[index]).filter(data => data !== "");
        const answers = indexToCheck.map(index => row[index]).filter(data => data !== "");
        if (line !== ",," && questions.length > 0 && answers.length > 0) {
            form.list.push({
                questions: questions,
                answers: answers,
                index: currentIndex,
                userinput: null
            });
        }
    };

    if (error) {
        console.log(error)
        return;
    }

    form.list = form.list.sort((a, b) => 0.5 - Math.random());

    ReactDOM.render(<Practice form={form} />, document.getElementById('root'));
}

export default ListCard;