import dark from "@/reducers/dark";
import { useSelector } from "react-redux";

function DarkStatus() {
    const dark = useSelector((state) => state.dark.value);
    let changeText = "";
    let textColor = {};

    if (dark) {
        changeText = "ON";
    } else {
        changeText = "OFF";
        textColor = { color: "white" };
    }

    return (
        <div>
            <p style={textColor}>Light is {changeText}</p>
        </div>
    );
}

export default DarkStatus;