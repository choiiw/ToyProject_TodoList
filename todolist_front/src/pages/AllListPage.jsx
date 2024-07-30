import axios from 'axios';
import React, { useState } from 'react';
import ReactModal from 'react-modal';



function AllListPage(props) {
    
    // const [ todoList, setTodoList ] = useState({
    //     listId: "",
    //     check: "",
    //     input: "",
    //     registerDate: "",
    // });

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const [ submitList, setSubmitList ] = useState();

    const [ registerList, setRegisterList ] = useState({
        listId: "",
        input: "",
        registerdate: ""
    });

    const openModal = () => {
        setIsModalOpen(true);
      };

    const closeModal = () => {
        setIsModalOpen(false);
        setSubmitList({
            input: "",
            registerdate: ""
        });
    }

    const handleDeleteListClick = async (listId) => {
        if(window.confirm("삭제하시겠습니까?")) {
            await requestDeleteList(listId);
            await requestTodoList();
            alert("삭제 완료");
        }
    }



    const [ todoListOption, setTodoListOption ] = useState([]);

    const requestTodoList = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/todolist");
            setTodoListOption(response.data);
        }catch(e) {
            console.error(e);
        };
    }

    const requestDeleteList = async (listId) => {
        let responseData = null;
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/todolist/${listId}`);
            responseData = response.data;
        } catch (e) {
            console.error(e);
        }

        return responseData;
    }
    
    const handleSearchClick = () => {
        requestTodoList();
    }

    const handleRegisterInputChange = (e) => {
        setRegisterList(rl => {
            return {
                ...rl,
                [e.target.name]: e.target.value
            }
        });
    }

    return (
        
        
        <div >
            <ReactModal
                style={{
                    content: {
                        boxSizing: 'border-box',
                        transform: 'translate(-50%, -50%)',
                        top: '50%',
                        left: '50%',
                        padding: '20px',
                        width: '800px',
                        height: '400px',
                        backgroundColor: '#fafafa',
                        textAlign: 'center'
                    }
                }}
                isOpen={isModalOpen}
                >
                    <h1>Todolist</h1>
                    <input type="text"/>
                    <input type="date"/>
                    <button>확인</button>
                    <button onClick={closeModal}>취소</button>
                </ReactModal>
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
                                todoListOption.map(todo =>
                                    <tr key={todo.listId}>
                                        <td><input type="checkbox"/></td>
                                        <td>{todo.input}</td>
                                        <td>{todo.registerDate}</td>
                                        <td><button>수정</button></td>
                                        <td><button>삭제</button></td>
                                    </tr>
                     
                                )    
                             }
                             <tr>
                                <td><input type="checkbox"/></td>
                                <td><input type="text" placeholder='오늘 할 일' onChange={handleRegisterInputChange}/></td>
                                <td><button onClick={openModal}>test</button></td>
                                <td><button>수정</button></td>
                                <td><button onClick={handleDeleteListClick}>삭제</button></td>
                            </tr>                            
                        </tbody>    
                    </table>
                </div>     
        </div>

        
    );
}

export default AllListPage;