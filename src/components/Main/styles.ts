
import { makeStyles } from '@mui/styles';

export default makeStyles({
    main: {
        minHeight: "100vh",
        padding: '4rem 0',
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'
    },
    container: {
        padding: '0 2rem',
    },
    transparent: {
        backgroundColor: "transparent",
        color: "black"
    },
    dark: {
        backgroundColor: '#121212',
        color: 'white',
    },
    notConnected: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        top: "50%",
    },
    description: {
        paddingTop: '2rem',
        lineHeight: 1.5,
        fontSize: '1.5rem',
    },
    grid: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "column",
    },


});
