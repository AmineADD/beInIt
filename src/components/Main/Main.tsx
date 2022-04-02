
import { FC, useMemo, useState } from 'react'
import { AppCreateContextProvider } from '../../context/AppCreateContext';
import NavBar from '../NavBar/NavBar';
import useStyles from './styles'

const Main: FC = () => {
  const classes = useStyles();

  const [isConnected, setIsConnected] = useState(false);
  const context = useMemo(
    () => ({ isConnected }),
    [isConnected]
  );

  return (
    <AppCreateContextProvider value={context}>
      <NavBar />
    </AppCreateContextProvider>
  )
};

export default Main;
