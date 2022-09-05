
import React from "react";
import Header from "./Components/Header";
import Card from "./Components/Card";
import "./style.css";
import data from "./Components/Data";

const App = () => {
    const dataEle = data.map((item)=> {
        return <Card 
                    key={item.id}
                    {...item}
                />
    })
    return (
        <div>
            <Header />
            {dataEle}
        </div>
    )
}

export default App