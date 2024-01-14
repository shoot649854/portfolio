import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

const AppLayout = () => {
  // const navigate: NavigateFunction = useNavigate();
  
  return (
    <Box sx={{ backgroundColor: '#f5f6f6' }}>

      <Box
        margin={{ top: 0, right: 20, bottom: 0, left: 20 }} 
        marginLeft={25}
        marginRight={25}
        sx={{
          backgroundColor: "#f5f6f6", // FIXME: f5f6f6
          minHeight: "100vh",
          margin: "0 auto",
          "@media (max-width: 800px)": {
            minWidth: "960px" // 800px以下の場合の最大幅
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