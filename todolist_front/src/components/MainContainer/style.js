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

    .input-box input {
        box-sizing: border-box;
        border-radius: 5px;
    }

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login-bt {
        margin-right:75px;
    }

    .listtitle {
        font-family: 'EF_jejudoldam';
        color: #2f4fbb;
        font-size: 50px;
    }

    .bb {
            margin-right: 10px;
        }
    
    h2{
        margin-left: 30px ;
    }

    table th:nth-of-type(1){
        width: 50px;
    }

    table th:nth-of-type(2){
        width: 250px;
    }

    table th:nth-of-type(3){
        width: 90px;
    }
    .sc-box {
        
        display: flex;

    }

    .sc {
        
        display: flex;
        align-items: center;
        margin-left: auto;
        background-color: #ffffff;
       
        border: none;

        &:hover {
            background-color: #fafafa;
        }
        &:active{
            background-color: #dbdbdb;
        }
    }

    .register-box {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }

    .submit-box {
        display: flex;
        justify-content: center;
        border-radius: 10px;
        box-sizing: border-box;
        border-color: #2f4fbb;
        margin: 30px;
        width: 50%;
        height: 50%;
    }

    .list-box {
        position: relative;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border-radius: 1px solid #dbdbdb;
        width: 500px;
        height: 100px;
    }

    .list-container {
        position: relative;
        display: flex;
        flex-grow: 1;
        flex-direction: row;
        justify-content: center;
    }

    .list {
        position: relative;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border: 1px solid #D6E0F0;
        border-radius: 5px;
        margin-right: 20px;
        width: 500px;
        height: 650px;
    }

    .list h2{
        padding: 6px;
        border-bottom: 4px solid #D6E0F0;
        margin-left: 30px ;
    }

    .list thead {
        padding:0;
        margin: 24px;
    }

    .list tr {
        display: flex;
        justify-content: space-between;
        text-align: center;
        width: auto;
        margin:8px;
        padding: 6px;
        border-bottom: 2px solid #D6E0F0;
    }

    button {
    border: none;
    background-color:#D6E0F0;
    padding: 4px 6px;
    margin-left: 12px;
    }  
`;
