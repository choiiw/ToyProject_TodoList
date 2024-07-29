import React from 'react';

function AllListPage(props) {
    return (
        <div>
            <header>전제 List</header>
            <p>
                <label htmlFor="">전체 TodoLIst</label>
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
                            <td><input type="checkbox" /></td>
                        </tr>
                    </tbody>
                </table>
            </p>
                
        </div>

    );
}

export default AllListPage;