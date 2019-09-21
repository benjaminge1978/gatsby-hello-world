import React from 'react'
import globalStyles from '../global-styles.module.css'
import footerStyles from './styles/footer.module.css'
import norskIcon from '../img/ny-norge-map.svg'

const Footer = () => {
    return (
        <div className= {footerStyles.blueBg}>
          <div className = {globalStyles.container}>
              <div className={footerStyles.iconBlock}>
                  <div>
                  <img className = {footerStyles.blockIcons} src = {norskIcon} alt= "Norweigan map logo"></img>
                      <h5>Landsdekkende</h5>
                  </div>
                  <div>
                  <img className = {footerStyles.blockIcons} src = {norskIcon} alt= "Norweigan map logo"></img>
                      <h5>Landsdekkende</h5>
                  </div>
                  <div>
                  <img className = {footerStyles.blockIcons} src = {norskIcon} alt= "Norweigan map logo"></img>
                      <h5>Landsdekkende</h5>
                  </div>
                  <div>
                  <img className = {footerStyles.blockIcons} src = {norskIcon} alt= "Norweigan map logo"></img>
                      <h5>Landsdekkende</h5>
                  </div>
              </div>
          </div>
        </div>
    )
}

export default Footer