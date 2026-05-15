export default function MainContent({ items }) {
    console.log(items)
    return (<div style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }}>
        <h2 style={{ color: "#61dafb" }}>好きな食べ物</h2>
        <ul>
            {items.map(item => <li style={{
                margin: "8px",
                fontSize: "32px",
                padding: "10px 30px",
                listStylePosition: "inside",
                textAlign: "left",
                color: "white"
            }}>{item}</li>)}
        </ul>
    </div>)
}