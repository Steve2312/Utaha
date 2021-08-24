import React from "react";
import ListCard from "../components/ListCard";

function List({data}) {
    const cards = data.results.map((list, index) => <ListCard title={list.name} total={list.total} index={index + 1} key={list.name}/>)
    return (
        <>
            <h1 className="title">{data.title}</h1>
            <p className="subject">{data.description}</p>
            <br />
            <div className="listWrapper">
                {cards}
            </div>
        </>
    );
}

export default List;