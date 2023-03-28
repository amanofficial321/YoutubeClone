import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Homescreen from "./screens/homescreen/Homescreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import "./_app.scss";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import WatchScreen from "./screens/watchScreen/WatchScreen";
import SearchScreen from "./screens/searchScreen/SearchScreen";
import SubscriptionsScreen from "./screens/subscriptionsscreen/SubscriptionsScreen";
import ChannelScreen from "./screens/channelScreen/ChannelScreen";

const Layout = ({ children}) => {
 
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {

  
  const { accessToken, loading } = useSelector(state=>state.auth)
  const history = useNavigate();
  useEffect( ()=>{

    if( !loading && !accessToken ){
      history('/auth')
    }

  },[accessToken, loading, history] )

  return  <Routes>

        <Route path="/" element={<Layout ><Homescreen /></Layout>} />
          

        <Route path="/auth" element={<Layout><LoginScreen/></Layout>} />

        <Route path="/watch/:id" element={<Layout><WatchScreen/></Layout>} />
          
        <Route path="/feed/subscriptions" element={<Layout><SubscriptionsScreen/></Layout>} />  

        <Route path="/channel/:channelId" element={<Layout><ChannelScreen/></Layout>} />

        <Route path="/search/:query" element={<Layout><SearchScreen/></Layout>} />

        <Route path="*" element={<Layout ><Homescreen /></Layout>}  />

      </Routes>
};

export default App;
