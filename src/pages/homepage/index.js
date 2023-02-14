
import { useEffect, useState } from "react";
import "./index.css"
import Header from "../../components/header";
import Card from "../../components/ship_card";
import { apiRequest } from "../../services/getShipNames";
import Button from "../../components/button";


const Homepage = () => {
    const [shipNameList, setShipNameList] = useState([])
    const [pageNumber, setPageNumber] = useState('1');
    const [nextPage, setNext] = useState(null)

    // make the AJAX request once the app loads
    useEffect(() => {
        const handleApiData = async () => {
            let data = await apiRequest(pageNumber);

            if (typeof (data.next) === 'string') {
                const url = new URL(data.next)
                const parameters = new Proxy(new URLSearchParams(url.search), {
                    get: (searchParams, prop) => searchParams.get(prop),
                });
                console.log(parameters.page);
                setNext(parameters.page)

            }



            let names = data.results.map((item) => {
                return (
                    <div key={item.url}>
                        {item.name}
                    </div>
                )
            })
            setShipNameList(names)
        }
        console.log(nextPage);
        handleApiData()
    }, [pageNumber]);

    return (
        <div className="page">
            <Header />
            <Card shipNames={shipNameList} />
            <Button setShipNameList={setShipNameList} pageNum={pageNumber} setPageNum={setPageNumber} next={nextPage} />
        </div>
    )
}

export default Homepage;