import reactimg from '../imgs/image.png'
import "../styles.css"

export default function NavBar({ title }) {
    return <div id="NavBar" style={{
        width: "100%",
        display: "flex",
        backgroundColor: "#21222a",
        color: "white",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        width:"100%"
    }}>
        <img src={reactimg} alt="ReactIcon" style={{
            width: "50px",
            height: "50px",
        }} />
        <h1 style={{ color: "#61dafb" }}>{title}</h1>
    </div >;
}
