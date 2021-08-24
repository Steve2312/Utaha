import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Card from "../components/Card";

function Results({form}) {

    form.list = form.list.sort((a, b) => b.index - a.index);

    var correct = 0;
    var incorrect = 0;

    const cards = form.list.reduce((cards, data) => {
        const {userinput, answers} = data;
        if (answers.includes(userinput)) {
            cards.push(<Card data={data} correct={true} />)
            correct++;
            return cards;
        }

        cards.unshift(<Card data={data} correct={false} />)
        incorrect++;
        return cards;
    }, [])

    return (
        <>
            <Navigation name={"Results: " + form.title} />
            <div className="content expanded_header">
                <h1 className="title">{form.title}</h1>
                <p className="subject">Correct: {correct}, Incorrect: {incorrect}</p>
                <br />

                <div className="listWrapper">
                    {cards}
                </div>
            </div>
        </>
    );
}

export default Results;