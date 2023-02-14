

import "./index.css"

const Button = (props) => {

    let { next, pageNum, setPageNum } = props;

    const getAdditionalShips = async (e) => {
        let btn = e.target
        let pageNumber = document.getElementsByClassName('page-number')[0]

        let isButton = btn.nodeName === 'BUTTON';
        if (isButton) {
            console.log('as' + next);
            if (next !== 'object') {
                let page = Number(pageNumber.textContent) + Number(btn.value)
                console.log(typeof (next));
                if (page < 1) {
                    page = 1
                }
                setPageNum(page)
            }


            // else if (next === 'object') {
            //     page = Number(pageNumber.textContent)
            // }
            // setPageNum(page)

            // let data = await requestThePage(page);
            // // console.log(data);
            // let shipsContainer = document.getElementById('ships-container');
            // while (shipsContainer.firstChild) {
            //     shipsContainer.removeChild(shipsContainer.firstChild)
            // }
            // let names = data.results.map(item => {
            //     return (
            //         <div key={item.url}>{item.name}</div>
            //     )
            // })
            //     console.log(names);
            //     setShipNameList(names)
        }


    }

    return (
        <div className="btn-container" onClick={getAdditionalShips}>
            <button type="button" value="-1">back</button>
            <span className="page-number">{pageNum}</span>
            <button type="button" value="1">next</button>
        </div>
    )
}

export default Button