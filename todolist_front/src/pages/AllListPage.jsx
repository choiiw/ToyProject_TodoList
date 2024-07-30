

import axios from 'axios';
import React, { useEffect, useState } from 'react';



function AllListPage(props) {
    
    const [ todoList, setTodoList ] = useState({
        listId: "",
        check: "",
        input: "",
        registerDate: "",
    });


    const [ todoListOption, setTodoListOption ] = useState([]);

    useEffect(() => {
        const getLists = async () => {
            const response = await axios.get("http://localhost:8080/api/v1/todolist/print");
            setTodoListOption(response.data);
            setTodoList(list => ({
                ...list,
                listId: response.data[0].listId
                })
            );
        }
        getLists();
    }, []);

    const handleSubmitClick = async () => {
        try {
                     const response = await axios.get("http://localhost:8080/api/v1/todolist/print", todoList);
                     setTodoListOption(response.data);
                 }catch(e) {
                     console.error(e);
                 };
    }




    return (
        
        <div >
                <div class="sc-box">
                    <h2>전체 List</h2>
                    <button onClick={handleSubmitClick} class="sc">전체 조회</button>
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
                        </tbody>    
                    </table>
                </div>     
        </div>

        
    );
}

export default AllListPage;