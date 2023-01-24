import React from "react";

import { Button, ThemeProvider } from "@mui/material";
import { Global } from "@emotion/react";

import { theme } from "../styles/theme";

import { GlobalStyles } from "./App.styles";

export function App() {
    const handleClick = React.useCallback(() => {
        alert("Alert.");
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <>
                <Global styles={GlobalStyles} />
                <Button variant="contained" onClick={handleClick}>
                    Show Alert
                </Button>
            </>
        </ThemeProvider>
    );
}
