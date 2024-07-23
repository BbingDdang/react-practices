import React from 'react';
import { useNavigate } from 'react-router';
import * as styles from '../../assets/scss/component/About.scss';

export default function About() {
    
    // 서버에게 에러 요청
    setTimeout(() => {
        window.location.href = '/error'
    }, 2000)

    return (
            <div className={styles.About}>
                <h2>kickscar 입니다.</h2>
            </div>
    );
}