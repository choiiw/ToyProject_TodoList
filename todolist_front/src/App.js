
import './App.css';
import { Global, css } from '@emotion/react';
import MainContainer from './components/MainContainer/MainContainer';
import MainLayout from './components/MainLayout/MainLayout';
import { reset } from './styles/global';
import axios from 'axios';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
ReactModal.setAppElement("#root");

function App() {


    const [ isModalOpen, setModalOpen ] = useState(false);
    
    const [ params, setParams ] = useState({
        registerDate: "",
    })
        
    const [ updateTodo, setUpdateTodo ] = useState({
        todoId: "",
        checkStatus: "",
        content: "",
        registerDate: "",
    });
        
        const [ todoList, setTodoList ] = useState([]);
        

      // 조회

    const requestTodoList = async () => {
        try{
            const response = await axios.get("http://localhost:8080/api/v1/todolist", {params});
            setTodoList(response.data);
        }catch(e) {
            console.error(e);
        };
    }

    const handleSearchClick = () => {
            
        requestTodoList();

        setParams({
            todoId: "",
            checkStatus: "",
            content: "",
            registerDate: "",
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

// 삭제

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


  return (
    <>
            <div>
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
                    onRequestClose={closeModal}
                >
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
            </div>

      <Global css={reset}/>
          <MainLayout>
            <MainContainer>


            <div >
            <div class="container">
                    <h1>todolist</h1>
                <p class="input-box">           
                    <input type="text" placeholder='ID'/>
                    <input type="password" placeholder='password'/>
                    <button class="login-bt">확인</button>
                </p>

                <div class="list-container">
                    <div class="list">
                    <div class="sc-box">
                    <h2>전체 List</h2>
                    <button onClick={handleSearchClick} class="sc">전체 조회</button>
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
                                        <td><input type="checkbox" checked={!!todo.checkStatus}/></td>
                                        <td>{todo.content}</td>
                                        <td>{todo.registerDate}</td>
                                        <td><button onClick={() => handleUpdateTodoClick(todo.todoId)}>수정</button></td>
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
            <button  class="sc">미완료 조회</button>
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
                                <td><input type="checkbox" checked={!!todo.checkStatus}/></td>
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
                     <button  class="sc">완료 조회</button>
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
                                    <td><input type="checkbox" checked={!!todo.checkStatus}/></td>
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
