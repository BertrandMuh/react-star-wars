
import { useEffect, useState, useRef } from "react";
import "./index.css"
import Header from "../../components/header";
import Card from "../../components/ship_card";
import { apiRequest } from "../../services/sw-api";
import Button from "../../components/button";
import { getAllShipNAmes } from "../../components/functions/useful-functions";

const Homepage = () => {
    const [shipNameList, setShipNameList] = useState([])

    let isFirstRender = useRef(true)
    // make the AJAX request once the app loads
    useEffect(() => {
        const handleApiData = async () => {
            let data = await apiRequest();
            if (isFirstRender.current) {
                isFirstRender.current = false;
                let names = await getAllShipNAmes(data)
                setShipNameList(names)
            }
        }
        handleApiData()
    }, []);

    return (
        <div className="page">
            <Header />
            <Card shipNames={shipNameList} />
            <Button setShipNameList={setShipNameList} />
        </div>
    )
}

export default Homepage;