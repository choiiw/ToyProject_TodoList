import React from 'react';



function AllListPage(props) {


    return (
        
        <div class="list-container">
            <div class="list-box">
                <div>
                    <h2>전체 List</h2>
                </div>
                <div class="button-box">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;내용&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                                <th>날짜&nbsp;&nbsp;&nbsp;</th>
                                <th>수정</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" class="chk"/></td>
                                <td></td>
                                <td></td>
                                <td><button>수정</button></td>
                                <td><button>삭제</button></td>
                            </tr>
                        </tbody>    
                    </table>
                </div>
                
                </div> 
        </ div>
    );
}

export default AllListPage;