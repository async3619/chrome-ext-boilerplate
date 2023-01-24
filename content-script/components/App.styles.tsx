import { css } from "@emotion/react";

export const GlobalStyles = css`
    @font-face {
        font-family: "SUIT Variable";
        font-weight: 100 900;
        src: url("${chrome.runtime.getURL("content-script/assets/suit.woff2")}") format("woff2-variations");
    }
`;
