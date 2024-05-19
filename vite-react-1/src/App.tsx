// src/App.tsx  
import React from 'react';  
import { AppBar, Toolbar, Typography } from '@mui/material';  
import DataList from './DataList';  
  
const App: React.FC = () => {  
  return (  
    <div>  
      <AppBar position="static">  
        <Toolbar>  
          <Typography variant="h6" component="div">  
            2024年 日本の祝日  
          </Typography>  
        </Toolbar>  
      </AppBar>  
      <DataList />  
    </div>  
  );  
};  
  
export default App;  
