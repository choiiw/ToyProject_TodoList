import { css } from "@emotion/react";

export const reset = css`
    html, #root {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #D6E0F0;
        font-size: 16px;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: #000000;
        cursor: pointer;
    }

    button {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        padding: 5px 10px;
        background-color: #ffffff;
        cursor: pointer;
        &:hover {
            background-color: #fafafa;
        }
        &:active {
            background-color: #eeeeee;
        }
    }

    input[type="text"],
    input[type="password"] {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        outline: none;
        padding: 5px 10px;
    }
`;