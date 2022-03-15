import { createTheme } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";

const LinkBehavior = React.forwardRef(({ to, ...props }, ref) => {
  return <Link to={to} ref={ref} {...props} />;
});

export default createTheme({
  palette: {
    primary: {
      light: "#fdcc3f",
      main: "#FBBF10",
      dark: "#b1860b",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});
