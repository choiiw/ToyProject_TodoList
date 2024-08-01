import './App.css';
import { Global, css } from '@emotion/react';
import MainContainer from './components/MainContainer/MainContainer';
import MainLayout from './components/MainLayout/MainLayout';
import { reset } from './styles/global';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
ReactModal.setAppElement("#root");
/** @JsxImportSource @emotion/react */

function App() {


    const [isModalOpen, setModalOpen] = useState(false);

    const [params, setParams] = useState({
        registerDate: "",
    })

    const [registerTodo, setRegisterTodo] = useState({
        content: "",
    });

    const [updateTodo, setUpdateTodo] = useState({
        todoId: "",
        checkStatus: "",
        content: "",
        registerDate: "",
    });

    const [todoList, setTodoList] = useState([]);


    // 조회

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

    const requestGetTodo = async (todoId) => {
        let responseData = null;
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/todo/${todoId}`);
            console.log(response);
            responseData = response.data;
        } catch (e) {
            console.error(e);
        }
        return responseData;
    }

    // 생성
    const handleRegisterInputChange = (e) => {
        setRegisterTodo(rt => {
            return {
                ...rt,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleRegisterSubmitClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/todo", registerTodo);
            if (response.status === 200) {
                alert("등록");
            }

        } catch (e) {
            console.error(e);
            alert("등록실패");
        }
        setRegisterTodo({
            content: ""
        });
    }



    // 삭제
    const requestDeleteList = async (todoId) => {

        let responseData = null;
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/todo/${todoId}`);
            responseData = response.data;
        } catch (e) {
            console.error(e);

        }
        return responseData;
    }

    const handleDeleteListClick = async (todoId) => {

        if (window.confirm("삭제하시겠습니까?")) {
            const deleteResult = await requestDeleteList(todoId);
            if (deleteResult) {
                await requestTodoList(); // 이 함수는 별도로 정의되어 있어야 합니다.
                alert("삭제 완료");
            } else {
                alert("삭제 실패");
            }
        }
    }



    // 수정 

    const closeModal = () => {
        setModalOpen(false);
        setUpdateTodo({
            todoId: "",
            checkStatus: "",
            content: "",
            registerDate: "",
        })
    }

    const handleUpdateTodoClick = async (todoId) => {

        setModalOpen(true);
        const data = await requestGetTodo(todoId); // x
        setUpdateTodo(data);
    }


    const handleUpdateSubmitClick = async () => {
        await requestUpdateTodo();
        closeModal();
    }

    const requestUpdateTodo = async () => {
        let responseData = null;

        try {
            const response = await axios.put(`http://localhost:8080/api/v1/todo/${updateTodo.todoId}`, updateTodo)
            responseData = response.data;
        } catch (e) {
            console.error(e);
        }
        return responseData;
    }

    const handleUpdateInputChange = (e) => {
        setUpdateTodo(ut => {
            return {
                ...ut,
                [e.target.name]: e.target.value
            };
        });
    }

    const handleCheckedChange = (todoId) => {
        const updateTodo = todoList.map(todo =>
            todo.todoId === todoId
                ? { ...todo, checkStatus: !todo.checkStatus }
                : todo
        );
        setTodoList(updateTodo);
    }

        return (

            <>
                <Global css={reset} />

                <ReactModal
                    style={{
                        content: {
                            boxSizing: "border-box",
                            transform: "translate(-50%, -50%)",
                            top: "50%",
                            left: "50%",
                            padding: "20px",
                            width: "800px",
                            height: "400px",
                            backgroundColor: "#fafafa",

                        }
                    }}
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}>
                    <div css={css`
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                height: 100%;
            `}>
                        <h2>todo 정보 수정</h2>
                        <input type="text" name="content" placeholder='오늘 할 일' onChange={handleUpdateInputChange} value={updateTodo.content} />
                        <input type="date" name="registerDate" onChange={handleUpdateInputChange} value={updateTodo.registerDate} />
                        <div>
                            <button onClick={handleUpdateSubmitClick}>확인</button>
                            <button onClick={() => closeModal()}>취소</button>
                        </div>
                    </div>
                </ReactModal>
                <MainLayout>
                    <MainContainer>
                        <div className="container">
                            <h1>todolist</h1>
                            <div class="register-box">
                                <input type="text" name='content' onChange={handleRegisterInputChange} value={registerTodo.content} />
                                <button onClick={handleRegisterSubmitClick}>생성</button>
                            </div>
                            <p className="input-box">
                                <input type='month' name='registerDate' onChange={handleInputChange} />
                                <input type="text" placeholder='ID' />
                                <input type="password" placeholder='password' />
                                <button className="login-bt">확인</button>
                            </p>

                            <div className="list-container">
                                <div className="list">
                                    <div className="sc-box">
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
                                                            <td><input type="checkbox" checked={!!todo.checkStatus} onChange={() => handleCheckedChange(todo.todoId)} value={todo.checkStatus} /></td>
                                                            <td>{todo.content}</td>
                                                            <td>{todo.registerDate}</td>
                                                            <td><button onClick={() => handleUpdateTodoClick(todo.todoId)}>수정</button></td>
                                                            <td><button onClick={() => handleDeleteListClick(todo.todoId)}>삭제</button></td>
                                                        </tr>

                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                                <div className="list">
                                    <div className="sc-box">
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
                                                            <td><input type="checkbox" checked={todo.checkStatus} onChange={() => handleCheckedChange(todo.todoId)} /></td>
                                                            <td>{todo.content}</td>
                                                            <td>{todo.registerDate}</td>
                                                            <td><button onClick={() => handleUpdateTodoClick(todo.todoId)}>수정</button></td>
                                                            <td><button onClick={() => handleDeleteListClick(todo.todoId)}>삭제</button></td>
                                                        </tr>

                                                    )
                                                }

                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                                <div className="list">
                                    <div className="sc-box">
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
                                                            <td><input type="checkbox" checked={!!todo.checkStatus} onChange={() => handleCheckedChange(todo.todoId)} /></td>
                                                            <td>{todo.content}</td>
                                                            <td>{todo.registerDate}</td>
                                                            <td><button onClick={() => handleUpdateTodoClick(todo.todoId)}>수정</button></td>
                                                            <td><button onClick={() => handleDeleteListClick(todo.todoId)}>삭제</button></td>
                                                        </tr>

                                                    )
                                                }
                                            </tbody>
                                        </table>
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
