
export const getAllShipNAmes = async (data) => {
    let names = data.results.map((item) => {
        return (
            <div key={item.url}>
                {item.name}
            </div>
        )
    })
    return names
}