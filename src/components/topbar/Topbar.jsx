import React from 'react'
import styles from './topbar.module.css';

const Topbar = () => {
  return (
    <div>
      <div id={styles.topbar} className={`${styles.topbar} d-flex align-items-center fixed-top`}>
            <div className={`container d-flex justify-content-center justify-content-md-between ${styles.topbarScrolled}`}>
                <div className={`d-flex align-items-center ${styles.contact_info}`}>
                    <i className="ri-tablet-line d-flex align-items-center"><span>+1 5589 55488 55</span></i>
                    <i className="ri-time-line d-flex align-items-center ms-4"><span> Mon-Sat: 11AM - 23PM</span></i>
                </div>

                <div className={`languages d-none d-md-flex align-items-center ${styles.languages}`}>
                    <ul>
                        <li>En</li>
                        <li><a href="#">De</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar
