

import React, { useState } from 'react';
import ReactModal from 'react-modal';

function MainPage(props) {

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const [ submitList, setSubmitList ] = useState({
        list: "",
        date: ""
    });

    const openModal = () => {
        setIsModalOpen(true);
      };

      const closeModal = () => {
        setIsModalOpen(false);
        setSubmitList({
            list: "",
            date: ""
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
       <div>
            <div class="container">
                    <h1>todolist</h1>
                <p class="input-box">
                    <input type="text" placeholder='ID'/>
                    <input type="password" placeholder='password'/>
                    <button class="login-bt">확인</button>
                </p>

                <div class="list-container">
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
                        <input type="text" placeholder="오늘 할 일"  onChange={handleSubmitInputChange} value={submitList.list} disabled={true} />
                        <input type="date" placeholder="날짜"  onChange={handleSubmitInputChange} value={submitList.date} disabled={true} />
                        <button>확인</button>
                        <button onClick={closeModal}>취소</button>
                    </ReactModal>
                    <div class="list">
                        <div class="list-box">
                            <div>
                                <h2>전체 List</h2>
                            </div>
                            <div class="button-box">
                                <button class="bb" onClick={openModal}>생성</button>
                                <button class="bb">수정</button>
                                <button class="bb">삭제</button>
                                <button class="bb">완료</button>
                            </div>
                        </div>
                        <div class="chk-box">
                            <input type="checkbox" class="chk"/>
                            <div></div>
                        </div> 
                    </div>
                    <div class="list">
                        <div class="list-box">
                        <div>
                                <h2>미완료 List</h2>
                            </div>
                            <div class="button-box">
                                <button class="bb">수정</button>
                                <button class="bb">삭제</button>
                                <button class="bb">완료</button>
                            </div>
                        </div>
                        <div class="chk-box">
                            <input type="checkbox" class="chk"/>
                            <p></p>
                        </div> 
                    </div>
                    <div class="list">
                    <div class="list-box">
                    <div>
                                <h2>완료 List</h2>
                            </div>
                            <div class="button-box">
                                <button class="bb">삭제</button>
                            </div>
                    </div>
                    <div class="chk-box">
                            <input type="checkbox" class="chk"/>
                            <div></div>
                        </div> 
                    </div> 
                    
                </div>

            </div>
       </div>
    // <></>
        
    );
}

export default MainPage;