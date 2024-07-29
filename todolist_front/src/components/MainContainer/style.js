import { css } from "@emotion/react";

export const container = css`
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;


    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 100%;
        height: 100px;
    }
    .input-box {
        position: relative;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        display: flex;
        width: 100%;
        height: 70px;
    }

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login-bt {
        margin-right: 200px;
    }

    .list-container {
        position: relative;
        display: flex;
        flex-grow: 1;
        flex-direction: row;
        justify-content: center;
        border: 1px solid #dbdbdb;     
        box-sizing: border-box;
        display: flex;
    }

    .list {
        position: relative;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border: 1px solid #dbdbdb;       
        margin-right: 20px;
        width: 500px;
        height: 650px;
    }

    .list-box {
        position: relative;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border-bottom: 1px solid #dbdbdb;
        width: 499px;
        height: 100px;

    }

    .chk-box {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        box-sizing: border-box;
        width: 50px;
        height: 30px;
    }
    .chk {
        margin-top: 10px;
        margin-right: 15px ;
    }

    .button-box {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;

    }
    .bb {
            margin-right: 10px;
        }
    
    h2{
        margin-left: 30px ;
    }
`;