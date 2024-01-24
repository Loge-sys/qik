import { useEffect } from "react";
import { BASE_URL } from '../config/config'
import axios, { AxiosResponse } from 'axios';
import { useDispatch } from "react-redux";
import { addConfig } from "./redux/sliceConfig";
import Menu from "./views/Menu";
import Header from "./components/Header";

interface WebSettings {
  bannerImage: string;
  backgroundColour: string;
  primaryColour: string;
  primaryColourHover: string;
  navBackgroundColour: string;
}

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    loadConfig()
  }, [])

  const loadConfig = async () => {
    try {
      const res: AxiosResponse<{ webSettings: WebSettings }> = await axios.get(`${BASE_URL}/venue/9`);
      dispatch(addConfig(res.data.webSettings || {}))
    } catch (error) {
      console.log(error)
    } 
  }

  return (
    <>
      <div>
        <Header />
        <Menu />
      </div>
    </>
  )
}

export default App
