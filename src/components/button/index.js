

import { useEffect, useState } from "react";
import { apiRequestPage } from "../../services/sw-api";
import { getAllShipNAmes } from "../functions/useful-functions";
import "./index.css"

const Button = (props) => {

    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    let paramNum = Number(params.page)
    const setShipNameList = props.setShipNameList;
    const [pageNum, setPageNum] = useState(paramNum);
    const [backDisable, setBackDisable] = useState()
    const [nextDisable, setNextDisable] = useState()

    useEffect(() => {
        let spanContainer = document.getElementsByClassName('page-num-div')[0];
        let children = spanContainer.querySelectorAll('div')
        children.forEach(child => {
            Number(child.textContent) === paramNum ? child.classList.add('selected-pge') : child.classList.remove('selected-pge')
        })
        // condition to disable the back button
        setBackDisable(paramNum !== 1 ? false : true);
        const apiCall = async () => {
            // setShipNameList([])
            let data = await apiRequestPage(paramNum)
            setShipNameList(await getAllShipNAmes(data))
            // condition to disable the forward button
            setNextDisable(typeof (data.next) === 'object' ? true : false)
        }
        apiCall()

    }, [paramNum, setShipNameList])


    const changePageNumber = async (e) => {
        let btn = e.target
        let isButton = btn.nodeName === 'BUTTON';
        if (isButton) {
            let page = pageNum + Number(btn.value)
            // change url window reloading the
            const url = new URL(window.location);
            url.searchParams.set('page', page);
            window.history.pushState({}, '', url);
            setPageNum(page)
        }
    }

    return (
        <div className="btn-container" onClick={changePageNumber}>
            <button type="button" value="-1" disabled={backDisable}>back</button>
            <div className='page-num-div'>
                <div className="page-number">{pageNum > 3 ? pageNum - 2 : 1}</div>
                <div className="page-number">{pageNum > 3 ? pageNum - 1 : 2}</div>
                <div className="page-number">{pageNum > 3 ? pageNum : 3}</div>
            </div>

            <button type="button" value="1" disabled={nextDisable}>next</button>
        </div>
    )
}

export default Button