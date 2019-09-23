import React from 'react'
import Header from '../components/Header'
import Article from '../components/Article'
import Footer from '../components/Footer'
import '../normalise.css'
import '../fontstyles.css'
import globalStyles from '../global-styles.module.css'

const Layout = (props) => {
    return (
        <div>
            <Header />
            <div className={globalStyles.container}>
                <div className={globalStyles.article}>
                  
                        {props.children}
                 
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Layout