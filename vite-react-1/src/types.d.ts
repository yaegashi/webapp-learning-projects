export interface DataType {  
  id: string;  
  name: string;  
  meaning: string;  
  date: {  
    year: number;  
    month: number;  
    day: number;  
  };  
  image: string; // 画像のURL  
}  
