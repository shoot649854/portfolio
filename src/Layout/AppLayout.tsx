import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

const AppLayout = () => {
  // const navigate: NavigateFunction = useNavigate();
  
  return (
    <Box sx={{ backgroundColor: '#f5f6f6', minHeight: "100vh" }}>

        <Box
          margin={{ top: 0, right: 25, bottom: 0, left: 25 }} 
          marginLeft={25}
          marginRight={25}
          sx={{
            backgroundColor: "#f5f6f6",
            minHeight: "100vh",
            margin: "0 auto",
            "@media (max-width: 800px)": {
              minWidth: "960px", // 800px以下の場合の最大幅
            },
            "@media (max-width: 576px)": {
              maxWidth: "576px", // Small devices (landscape phones, 576px and up)
            },
            "@media (min-width: 576px) and (max-width: 767px)": {
              maxWidth: "768px", // Medium devices (tablets, 768px and up)
              
            },
            "@media (min-width: 768px) and (max-width: 991px)": {
              maxWidth: "992px", // Large devices (desktops, 992px and up)
            },
            "@media (min-width: 992px) and (max-width: 1199px)": {
              maxWidth: "1200px", // X-Large devices (large desktops, 1200px and up)
            },
            "@media (min-width: 1200px) and (max-width: 1399px)": {
              maxWidth: "1400px", // XX-Large devices (larger desktops, 1400px and up)
            },
            "@media (min-width: 1400px)": {
              maxWidth: "1400px", // Larger than XX-Large devices
            }
          }}
        >

        <Header />
        <Box 
          padding={{ top: 3, right: 20, bottom: 10, left: 20 }} 
          paddingTop={3}
          paddingRight={25}
          paddingBottom={10}
          paddingLeft={25}
          sx={{ 
            borderRadius: "1%",
            flexGrow: 1, 
            backgroundColor: "#fff" }}
        > 
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default AppLayout;