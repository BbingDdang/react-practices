import React from 'react';

function Contents(props) {
    /**
     *  comment01: JSX 밖은 JavaScript 구문(주석문)이 가능하다.
     */
    return (
        <div
            /*
                comment02: JSX 엘리멘트 태그 안에 주석이 가능하다.
            */
            className='Clock'
            title='시계'>
            <p>ex07: Comment</p>
            <div>00:00:00AM</div>
        </div>
    );
}

export default Contents;