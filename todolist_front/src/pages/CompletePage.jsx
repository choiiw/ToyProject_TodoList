
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CompletePage(props) {
    const [ todoList, setTodoList ] = useState({
        listId: "",
        check: "",
        input: "",
        registerDate: "",
    });

    const [completeList, setCompleteList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await requestGetList();
            if (data && Array.isArray(data)) {
                setCompleteList(data.map(item => ({ ...item, checked: true })));
                setTodoList(list => ({
                    ...list,
                    listId: data.data[0].listId
                }));
            } else {
                setCompleteList([]);
           }
        };

        fetchData();
    }, []); 

    const requestGetList = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/todolist/print3', todoList); 
            return response.data;
        } catch (e) {
            console.error(e);
            return [];
        }
    };

    const handleCheckboxChange = (listId) => {
        setCompleteList(prevList =>
            prevList.map(todo =>
                todo.listId === listId ? { ...todo, checked: todo.checked } : todo
            )
        );
    };

    // Filter out checked items
    const checkedItems = completeList.filter(todo => todo.checked);
    return (
        
        <div >
                <div class="sc-box">
                    <h2>완료 List</h2>
                     <button onClick={() => window.location.reload()} class="sc">완료 조회</button>
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
                            checkedItems.map(todo => 
                                <tr key={todo.listId}>
                                    <td><input type="checkbox"
                                    className="chk"
                                    checked={todo.checked}
                                    onChange={() => handleCheckboxChange(todo.listId)}
                                    class="chk"/>
                                    </td>
                                    <td>{todo.input}</td>
                                    <td>{todo.IncompletePage}</td>
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

export default CompletePage;