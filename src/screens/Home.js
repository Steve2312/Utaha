import React, { useEffect, useState } from "react";
import List from "../components/List";
import Navigation from "../components/Navigation";

function Home() {
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchList() {
            const data = await (await fetch(process.env.PUBLIC_URL + '/lists.json')).json();
            setData(data);
        }
        fetchList();
    }, []);

    var listComponents;
    if (data) {
        listComponents = data.lists.map((list) => <List data={list} key={list.title} />)
    }

    return (
        <>
            <Navigation name="Home" />
            <div className="content">
                {listComponents}
            </div>
        </>
    );
}

export default Home;