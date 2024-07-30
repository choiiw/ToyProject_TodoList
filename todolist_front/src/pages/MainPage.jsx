

import React from 'react';
import AllListPage from './AllListPage';
import CompletePage from './CompletePage';
import IncompletePage from './IncompletePage';

function MainPage(props) {

    return (
        <div >
            <div class="container">
                <h1>todolist</h1>
                <p class="input-box">
                    <input type="text" placeholder='ID' />
                    <input type="password" placeholder='password' />
                    <button class="login-bt">확인</button>
                </p>

                <div class="list-container">
                    <div class="list">
                        <AllListPage />

                    </div>
                    <div class="list">
                        <IncompletePage />

                    </div>
                    <div class="list">
                        <CompletePage />

                    </div>

                </div>

            </div>
        </div>
        

    );
}

export default MainPage;