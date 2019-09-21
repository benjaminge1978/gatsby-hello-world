import React from 'react'
import Header from '../components/Header'
import Article from '../components/Article'
import '../normalise.css'
import '../fontstyles.css'
import globalStyles from '../global-styles.module.css'

const Layout = (props) => {
    return (
    <div>
        <Header />
        <div className = {globalStyles.container}>
        <Article>
        {props.children}
        </Article>
        </div>
       
    </div>
    )
}

export default Layout