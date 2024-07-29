

import React from 'react';

function MainPage(props) {

    return (
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
                        <div class="list-box">
                            <div>
                                <h2>전체 List</h2>
                            </div>
                            <div class="button-box">
                                <button class="bb">생성</button>
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
                            <div></div>
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