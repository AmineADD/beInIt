import { FC } from 'react'
import useStyles from './styles'

type props = {
    status: boolean;
}

const Status: FC<props> = ({ status }) => {
    const classes = useStyles();
    return (<span className={`${classes.root} ${status ? classes.connected : classes.notConnected}`}></span>)
}

export default Status;