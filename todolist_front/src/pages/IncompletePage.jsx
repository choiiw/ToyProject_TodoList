import React from 'react';

function IncompletePage(props) {
    return (
        <div>
            <header>미완료 List</header>
            <p>
                <label htmlFor="">미완료 TodoLIst</label>
            </p>
            <p>
                <table>
                    <thead>
                        <tr>
                            <th>선택</th>
                            <th>내용</th>
                            <th>날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </p>
                
        </div>

    );
}

export default IncompletePage;