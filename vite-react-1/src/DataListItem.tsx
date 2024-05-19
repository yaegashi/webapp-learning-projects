// src/DataListItem.tsx  
import React from 'react';  
import { DataType } from './types';  
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';  
  
interface DataListItemProps {  
  item: DataType;  
}  
  
const DataListItem: React.FC<DataListItemProps> = ({ item }) => {  
  const imageUrl = item.image;  
  
  // 日付を "YYYY年MM月DD日" の形式にフォーマット  
  const formattedDate = `${item.date.year}年${String(item.date.month).padStart(2, '0')}月${String(item.date.day).padStart(2, '0')}日`;  
  
  return (  
    <Card variant="outlined" style={{ margin: '1rem 0' }}>  
      <Grid container>  
        <Grid item xs={3}>  
          <CardMedia  
            component="img"  
            image={imageUrl}  
            alt={item.name}  
            style={{ height: '80px', objectFit: 'cover' }} // 高さを80pxに固定  
          />  
        </Grid>  
        <Grid item xs={9}>  
          <CardContent>  
            <Typography variant="h6">  
              {formattedDate} {item.name}  
            </Typography>  
            <Typography color="textSecondary">{item.meaning}</Typography>  
          </CardContent>  
        </Grid>  
      </Grid>  
    </Card>  
  );  
};  
  
export default DataListItem;  
