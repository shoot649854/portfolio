import { useEffect } from "react";
import { Box } from "@mui/material";
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

const AppLayout = () => {
  const navigate: NavigateFunction = useNavigate();
  
  return (
    <Box
      margin={{ top: 0, right: 20, bottom: 0, left: 20 }} 
      marginLeft={20}
      marginRight={20}
      sx={{
        backgroundColor: "#FFF",
        minHeight: "100vh",
        margin: "0 auto",
        "@media (max-width: 800px)": {
          minWidth: "960px" // 800px以下の場合の最大幅
        }
      }}
    >
      <Header />
      <Box sx={{ margin: "0 80px", flexGrow: 1 }}> 
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default AppLayout;