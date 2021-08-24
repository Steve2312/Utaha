import React from "react";
import Navigation from "../components/Navigation";

function View({title, data}) {
    const tableData = data.map(raw => {
        const line = raw.replace(/\r?\n|\r/g, "");
        const row = line.split(",");

        const tdElement = row.map(value => <td>{value}</td>)

        if (line !== ",,") {
            return <tr>{tdElement}</tr>
        }
    })
    return (
        <>
            <Navigation name={"View: " + title} />
            <div className="content expanded_header">
                <h1 className="title">{title}</h1>
                <br />
                <table>
                    {tableData}
                </table>
            </div>
        </>
    );
}

export default View;