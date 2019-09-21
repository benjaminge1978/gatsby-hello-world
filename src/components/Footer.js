import React from 'react'
import globalStyles from '../global-styles.module.css'
import footerStyles from './styles/footer.module.css'

const Footer = () => {
    return (
        <div className= {footerStyles.blueBg}>
          <div className = {globalStyles.container}>
              <div className={footerStyles.iconBlock}>
                  <div>
                      <h5>Landsdekkende</h5>
                  </div>
                  <div>
                      <h5>Landsdekkende</h5>
                  </div>
                  <div>
                      <h5>Landsdekkende</h5>
                  </div>
                  <div>
                      <h5>Landsdekkende</h5>
                  </div>
              </div>
          </div>
        </div>
    )
}

export default Footer