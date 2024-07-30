

import axios from 'axios';
import React, { useState } from 'react';



function AllListPage(props) {
    
    const [ todoList, setTodoList ] = useState({
        listId: "",
        check: "",
        input: "",
        registerDate: "",
    });


    const [ todoListOption, setTodoListOption ] = useState([]);

    const requestTodoList = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/todolist");
            setTodoListOption(response.data);
        }catch(e) {
            console.error(e);
        };
    }

    const handleDeleteTodoListClick (listId) => {

    }

    const requestDeleteTodolist = async (listId) => {
        let responseDate = null;
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/todolist/${listId}`)
        } catch(e) {
            console.error(e)
        }
        return responseDate;
    }



    return (
        
        <div >
                <div>
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