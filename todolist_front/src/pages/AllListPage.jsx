import React, { useState } from 'react';
import ReactModal from 'react-modal';

function MainPage(props) {

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const [ submitList, setSubmitList ] = useState({
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

    const handleSubmitInputChange = (e) => {
        setSubmitList(sl => {
            return {
                ...sl,
                [e.target.name]: e.target.value
            }
        })
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