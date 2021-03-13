import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

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
      paddingTop: '45px'
    }
  }

  return (
    <div className="app">
      <Header />

      <div className="content" style={styles.content}>
        <div className="content__wrapper" style={styles.contentWrapper}>
          {/* Sidebar */}
          <Sidebar />
          {/* feed */}
          <div></div>
          {/* widgets */}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
