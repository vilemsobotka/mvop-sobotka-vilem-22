import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios";
import Grid from '../components/grid/Grid';
import GridItem from '../components/grid/GridItem';
import GridRow from '../components/grid/GridRow';
function App() {
  const [count, setCount] = useState(0)
  const [post, setPost] = useState(null);

  useEffect(() => {
    SendReq();
  }, []);

  async function SendReq(){
      axios.get("https://api.golemio.cz/v2/gtfs/routes?limit=30", {
      headers: {
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpbGVtLnNvYm90a2FAZ21haWwuY29tIiwiaWQiOjE2NDQsIm5hbWUiOm51bGwsInN1cm5hbWUiOm51bGwsImlhdCI6MTY3NDQ3NTk4NCwiZXhwIjoxMTY3NDQ3NTk4NCwiaXNzIjoiZ29sZW1pbyIsImp0aSI6IjZhN2I0YTc0LWMzYWEtNDc2OS1iMzUwLTdjMjI2ODQ3ZGQwNSJ9.PLGZvl-9bcN-8b7p2OuAGtsRjoZfxOKLR7uizrSUaKU'
      }}).then((response) => {  
      setPost(response.data);
      //console.log(response);
    });
  }
  return (
    <div className="App">
      {/*post ? (<Grid roads={post}></Grid>) : <div>loading...</div>*/}
      <GridItem text="pomazánka"/>
      <GridRow l_name="Staročeský" s_name="mozog" link="uysafguyag"/>
    </div>
  )
}

export default App
