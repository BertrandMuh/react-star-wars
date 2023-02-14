

import "./index.css"

const Button = (props) => {

    let { next, pageNum, setPageNum } = props;
    // let nextPage = next;
    if (Number(next) !== pageNum && next !== 'null' && next === 'object') {
        console.log(typeof (next), 'next: ', next)
        console.log(typeof (pageNum), 'page: ', pageNum);
    };

    const getAdditionalShips = async (e) => {
        let btn = e.target
        let pageNumber = document.getElementsByClassName('page-number')[0]

        let isButton = btn.nodeName === 'BUTTON';
        if (isButton) {

            console.log(typeof (next));

            if (Number(next) !== pageNum) {
                let page = Number(pageNumber.textContent) + Number(btn.value)
                if (page < 1) {
                    page = 1
                }
                setPageNum(page)
            }

        }
        console.log('as' + next, pageNum);

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