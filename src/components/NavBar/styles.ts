import { makeStyles } from '@mui/styles';

export default makeStyles({
    AppBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "transparent",
        color: "black"
    },

    toolTip: {
        display: "flex",
        flexDirection: "row-reverse"
    },
    title: {
        color: "black",
    },
    dark: {
        backgroundColor: "#121212",
        color: "white",
    },
    Chiptransparent: {
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        color: "black"
    },
    Chipdark: {
        backgroundColor: "rgba(163, 144, 144, 0.08)",
        color: "white"
    }
});