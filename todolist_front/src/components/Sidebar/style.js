import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 200;
`;

export const list = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
`

export const listItem = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 10px 50px;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #eeeeee;
    }
`

export const itemText = css`
    margin-left: 10px;
`;