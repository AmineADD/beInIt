import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import useStyles from './styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Status from './Status/Status';
import { useAppCreateContext } from '../../context/AppCreateContext';
import { Typography } from '@mui/material';


const NavBar: FC = () => {
    const { isConnected } = useAppCreateContext();
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={classes.AppBar}>
                <Typography variant='h5'>Title</Typography>
                <Toolbar className={classes.toolTip}>
                    <Stack direction="row">
                        <Chip className={classes.Chiptransparent} avatar={<Status status={isConnected} />} label={'Live'} />
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default NavBar; 