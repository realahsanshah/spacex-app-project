import React from 'react';
import './App.css';
import Launch from './components/Launch';
import LaunchDetails from './components/LaunchDetails';
import {Grid} from '@material-ui/core';

function App() {
  const [id,setId]=React.useState(13);
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, [])
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={3}>
        <Launch handleIdChange={handleIdChange} />
        </Grid>
        <Grid item xs={12} md={9}>
        <LaunchDetails id={id} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
