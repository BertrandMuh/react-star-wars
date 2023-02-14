
import { useEffect, useState } from "react";
import "./index.css"
import Header from "../../components/header";
import Card from "../../components/ship_card";
import { apiRequest } from "../../services/getShipNames";
import Button from "../../components/button";


const Homepage = () => {
    const [shipNameList, setShipNameList] = useState([])

    // make the AJAX request once the app loads
    useEffect(() => {
        const handleApiData = async () => {
            let data = await apiRequest();
            let names = data.map((item) => {
                return (
                    <div className="ship-name-div" key={item.url}>
                        {item.name}
                    </div>
                )
            })
            setShipNameList(names)
        }
        handleApiData()
    }, [])

    return (
        <div class="page">
            <Header />
            <Card shipNames={shipNameList} />
            <Button />
        </div>
    )
}

export default Homepage;