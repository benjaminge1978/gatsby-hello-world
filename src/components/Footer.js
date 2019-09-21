import React from 'react'
import globalStyles from '../global-styles.module.css'
import footerStyles from './styles/footer.module.css'
import norskIcon from '../img/ny-norge-map.svg'
import footerImage from '../img/pexels-photo-325876.jpg'
import footerImageNext from '../img/arkiv.jpg'

const Footer = () => {
    return (
        <footer>
            <div className={footerStyles.blueBg}>
                <div className={globalStyles.container}>
                    <div className={footerStyles.iconBlock}>
                        <div>
                            <img className={footerStyles.blockIcons} src={norskIcon} alt="Norweigan map logo"></img>
                            <h5>Landsdekkende</h5>
                        </div>
                        <div>
                            <img className={footerStyles.blockIcons} src={norskIcon} alt="Norweigan map logo"></img>
                            <h5>Landsdekkende</h5>
                        </div>
                        <div>
                            <img className={footerStyles.blockIcons} src={norskIcon} alt="Norweigan map logo"></img>
                            <h5>Landsdekkende</h5>
                        </div>
                        <div>
                            <img className={footerStyles.blockIcons} src={norskIcon} alt="Norweigan map logo"></img>
                            <h5>Landsdekkende</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className={footerStyles.greyBg}>
                <div className={globalStyles.container}>
                    <div className={footerStyles.footerBlockWrapper}>
                        <div className={footerStyles.footerBlock}>
                            <a href="">Hello</a>
                            <img src={footerImage} alt="Norweigan map logo"></img>
                            <p>Vi har mange dyktige advokater innen immaterielle rettigheter, it og media. Se oversikten over alle våre advokater her.</p>
                        </div>
                        <div className={footerStyles.footerBlock}>
                            <a href="">Hello</a>
                            <img src={footerImageNext} alt="Norweigan map logo"></img>
                            <p>Vi har mange dyktige advokater innen immaterielle rettigheter, it og media. Se oversikten over alle våre advokater her.</p>
                        </div>
                        <div className={footerStyles.footerBlock}>
                            <a href="">Hello</a>
                            <img src={footerImage} alt="Norweigan map logo"></img>
                            <p>Vi har mange dyktige advokater innen immaterielle rettigheter, it og media. Se oversikten over alle våre advokater her.</p>
                        </div>
                    </div>
                </div>
            </div>


        </footer >
    )
}

export default Footer