import React from 'react'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

function HomePage() {

    const styles = {
        content: {
          backgroundColor: '#f3f2ef',
          padding: '0 24px'
        },
        contentWrapper: {
          display: 'flex',
          justifyContent: 'spase-between',
          maxWidth: '1128px',
          margin: '0 auto',
          paddingTop: '45px',
          minHeight: 'calc(100vh - 75px)'
        }
      }

    return (
        <>
            <Header />
            <div className="content" style={styles.content}>
                <div className="content__wrapper" style={styles.contentWrapper}>
                    <Sidebar />
                    <Feed />
                    <Widgets />
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default HomePage
