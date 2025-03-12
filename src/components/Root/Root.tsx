import { Outlet } from "react-router-dom";
import { UserProvider } from "../../context/UserContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  font-family: 'Arial', sans-serif;
  flex: 1;
`;

const Root = () => {
    return (
        <UserProvider>
            <Navbar />
            <AppContainer>
                <Outlet />
            </AppContainer>
            <Footer />
        </UserProvider>
    )
}

export default Root;