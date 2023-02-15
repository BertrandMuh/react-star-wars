

import { useEffect, useRef, useState } from "react";
import { apiRequestPage } from "../../services/sw-api";
import { getAllShipNAmes } from "../functions/useful-functions";
import "./index.css"

const Button = (props) => {
    let setShipNameList = props.setShipNameList;
    // const [names, setNames] = useState([])
    const [pageNum, setPageNum] = useState(1);
    const [backDisable, setBackDisable] = useState(true)
    const [nextDisable, setNextDisable] = useState(false)
    let isFirstRender = useRef(true)
    useEffect(() => {
        // let setShipNameList = props.setShipNameList
        setBackDisable(pageNum !== 1 ? false : true);
        // const apiCall = async () => {
        //     let data = await apiRequestPage(pageNum)
        //     setNames(await getAllShipNAmes(data))

        //     let response = data.next
        //     // if (isFirstRender.current) {
        //     //     console.log(typeof (response));
        //     //     // setNextDisable(typeof (response) === 'object' ? true : false)
        //     //     isFirstRender.current = false
        //     // }
        //     setNextDisable(typeof (response) === 'object' ? true : false)
        // }
        // apiCall()

    }, [pageNum])

    // setBackDisable(pageNum !== 1 ? false : true);


    const changePageNumber = async (e) => {
        let btn = e.target
        let isButton = btn.nodeName === 'BUTTON';
        if (isButton) {
            let page = pageNum + Number(btn.value)
            setPageNum(page)
            const apiCall = async () => {
                let data = await apiRequestPage(pageNum)
                // setNames(await getAllShipNAmes(data))
                setShipNameList(await getAllShipNAmes(data))
                let response = data.next
                // if (isFirstRender.current) {
                //     console.log(typeof (response));
                //     // setNextDisable(typeof (response) === 'object' ? true : false)
                //     isFirstRender.current = false
                // }
                setNextDisable(typeof (response) === 'object' ? true : false)
            }
            apiCall()
        }
    }
    return (
        <div className="btn-container" onClick={changePageNumber}>
            <button type="button" value="-1" disabled={backDisable}>back</button>
            <div className='page-num-div'>
                <span className="page-number">{pageNum > 3 ? pageNum - 2 : 1}</span>
                <span className="page-number">{pageNum > 3 ? pageNum - 1 : 2}</span>
                <span className="page-number">{pageNum > 3 ? pageNum : 3}</span>
            </div>

            <button type="button" value="1" disabled={nextDisable}>next</button>
        </div>
    )
}

export default Button