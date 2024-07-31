import './App.css';
import { Global } from '@emotion/react';
import MainContainer from './components/MainContainer/MainContainer';
import MainLayout from './components/MainLayout/MainLayout';
import { reset } from './styles/global';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


function App() {
    // 조회

    const [params, setParams] = useState({
        registerDate: "",
    })

    const [todoList, setTodoList] = useState([]);

    const requestTodoList = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/todolist", { params });
            setTodoList(response.data);
        } catch (e) {
            console.error(e);
        };
    }

    // const handleSearchClick = () => {

    //     requestTodoList();

    //     setParams({
    //         registerDate: "",
    //     })

    // }

    useEffect(() => {

        requestTodoList();
        console.log(params);

    }, [params]);

    const handleInputChange = (e) => {

        setParams(param => {
            return {
                ...param,
                [e.target.name]: e.target.value
            }
        });  
    }


    // 생성

    // 삭제

    // 수정 
    return (
        <>
            <Global css={reset} />
            <MainLayout>
                <MainContainer>
                    <div >
                        <div class="container">
                            <h1>todolist</h1>
                            <p class="input-box">
                                <input type='month' name='registerDate' onChange={handleInputChange} />
                                <input type="text" placeholder='ID' />
                                <input type="password" placeholder='password' />
                                <button class="login-bt">확인</button>
                            </p>

                            <div class="list-container">
                                <div class="list">
                                    <div class="sc-box">
                                        <h2>전체 List</h2>
                                    </div>
                                    <div >
                                        <table>
                                            <thead>
                                                <tr >
                                                    <th>선택</th>
                                                    <th>내용</th>
                                                    <th>날짜</th>
                                                    <th>수정</th>
                                                    <th>삭제</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    todoList.map(todo =>
                                                        <tr key={todo.todoId}>
                                                            <td><input type="checkbox" checked={!!todo.checkStatus} /></td>
                                                            <td>{todo.content}</td>
                                                            <td>{todo.registerDate}</td>
                                                            <td><button>수정</button></td>
                                                            <td><button>삭제</button></td>
                                                        </tr>

                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                                <div class="list">
                                    <div class="sc-box">
                                        <h2>미완료 List</h2>
                                    </div>
                                    <div >
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>선택</th>
                                                    <th>내용</th>
                                                    <th>날짜</th>
                                                    <th>수정</th>
                                                    <th>삭제</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    todoList.filter(todo => !todo.checkStatus).map(todo =>
                                                        <tr key={todo.todoId}>
                                                            <td><input type="checkbox" checked={!!todo.checkStatus} /></td>
                                                            <td>{todo.content}</td>
                                                            <td>{todo.registerDate}</td>
                                                            <td><button>수정</button></td>
                                                            <td><button>삭제</button></td>
                                                        </tr>

                                                    )
                                                }

                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                                <div class="list">
                                    <div class="sc-box">
                                        <h2>완료 List</h2>
                                    </div>
                                    <div >
                                        <table>
                                            <thead>
                                                <tr >
                                                    <th>선택</th>
                                                    <th>내용</th>
                                                    <th>날짜</th>
                                                    <th>수정</th>
                                                    <th>삭제</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    todoList.filter(todo => !!todo.checkStatus).map(todo =>
                                                        <tr key={todo.todoId}>
                                                            <td><input type="checkbox" checked={!!todo.checkStatus} /></td>
                                                            <td>{todo.content}</td>
                                                            <td>{todo.registerDate}</td>
                                                            <td><button>수정</button></td>
                                                            <td><button>삭제</button></td>
                                                        </tr>

                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </MainContainer>

            </MainLayout>
        </>
    );
}

export default App;
