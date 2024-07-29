import React from 'react';

function IncompletePage(props) {
    return (
        <div >
        <div>
            <h2>미완료 List</h2>
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

    );
}

export default IncompletePage;