import React from 'react';
import {SiteLayout} from '../../layout'
import * as styles from '../../assets/scss/component/Main.scss';

export default function Main() {
    return (
        <SiteLayout>
            <div className={styles.Main}>
                <h2>Main</h2>
            </div>
        </SiteLayout>
            
    );
}