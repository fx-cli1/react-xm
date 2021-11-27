import React from 'react'
import styles from '../css/guide.module.css'
export default function guide(props:any) {    //引导页
    return (
        <div className={styles.guide}>
            <div className={styles.btn} onClick={()=>{
                props.history.push('/loginstart');
            }}>
            点我借钱
            </div>
           
        </div>
    )
}
