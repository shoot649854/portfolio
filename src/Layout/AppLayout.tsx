import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useMatchMedia } from "../component/useMatchMedia";

const AppLayout = () => {
  const isSmallScreen = useMatchMedia("(max-width: 800px)");
  const isExtraSmallScreen = useMatchMedia("(max-width: 576px)");
  const isNarrowScreen = useMatchMedia("(max-width: 430px)");

  return (
    <Box sx={{ backgroundColor: '#f5f6f6', minHeight: "100vh" }}>
      <Box
        margin={{ top: 0, right: 25, bottom: 0, left: 25 }}
        marginLeft={isExtraSmallScreen ? 1 : 25}
        marginRight={isExtraSmallScreen ? 1 : 25}
        paddingX={isNarrowScreen ? 1 : 0}
        sx={{
          backgroundColor: "#f5f6f6",
          minHeight: "100vh",
          "@media (max-width: 800px)": {
            minWidth: isSmallScreen ? "430px" : "auto",
          },
          "@media (max-width: 576px)": {
            maxWidth: isExtraSmallScreen ? "200px" : "auto",
          },
          "@media (max-width: 430px)": {
            maxWidth: isNarrowScreen ? "100%" : "auto",
            padding: isNarrowScreen ? "0 10px" : "0",
          },
        }}
      >
        <Header />
        <Box
          padding={{ top: 3, right: 20, bottom: 10, left: 20 }}
          paddingTop={3}
          paddingRight={isSmallScreen? 2: 25}
          paddingBottom={10}
          paddingLeft={isSmallScreen? 2: 25}
          sx={{
            borderRadius: "1%",
            flexGrow: 1,
            backgroundColor: "#fff",
          }}
        >
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default AppLayout;
