
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

    const returnButton = () => {
        if (shipNameList.length === 0) {
            return (
                <div></div>
            )
        }
        else {
            return (
                <Button setShipNameList={setShipNameList} />
            )
        }
    }

    const returnCard = () => {
        if (shipNameList.length === 0) {
            return (
                <div className="loading">Loading...</div>
            )
        }
        else {
            return (
                <Card shipNames={shipNameList} />
            )
        }
    }

    console.log(setShipNameList);

    return (
        <div className="page">
            <Header />
            {returnCard()}
            {returnButton()}
        </div>
    )
}

export default Homepage;