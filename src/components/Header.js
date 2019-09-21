import React from "react"
import { Link } from 'gatsby'
import headerStyle from '../components/styles/header.module.css'
import globalStyles from '../global-styles.module.css'
import logo from '../img/codex-logo.svg'

const Header = () => {
    return (
        <header>
            <div className={headerStyle.containerFull}>
                <div className={headerStyle.grid}>
                    <div>
                    <img className = {headerStyle.logo} src = {logo} alt= "Codex logo"></img>
                    </div>
                    <div>
                        <h3>Rettinghetsadvokater</h3>
                        <p>En del av Codex Advokat</p>
                    </div>
                    <div class={headerStyle.contact}>
                        <p>Ring oss 22 93 3850</p>
                        <p>Kontakt oss</p>
                        <p>C-IPR Login</p>
                    </div>
                </div>
            </div>

            <div className={headerStyle.containerFull}>
                <div className={headerStyle.blueBg}>
                    <div className={globalStyles.container}>
                        <div className={headerStyle.menuItems}>
                            <ul>
                                <li><Link to="/">Vare fagområder</Link></li>
                                <li><Link to="/">Vare fagområder</Link></li>
                                <li><Link to="/">Vare fagområder</Link></li>
                                <li><Link to="/">Vare fagområder</Link></li>
                                <li><Link to="/">Vare fagområder</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={headerStyle.containerFull}>
                <div className={headerStyle.greyBg}>
                    <div className={globalStyles.container}>
                        <div className={headerStyle.pointers}>
                            <div>
                                <h5>UFORPLIKTENDE OG KONFIDENSIELT</h5>
                                <p>Det er uforpliktende å ta kontakt med oss</p>
                            </div>
                            <div>
                                <h5>UFORPLIKTENDE OG KONFIDENSIELT</h5>
                                <p>Det er uforpliktende å ta kontakt med oss</p>
                            </div>
                            <div>
                                <h5>UFORPLIKTENDE OG KONFIDENSIELT</h5>
                                <p>Det er uforpliktende å ta kontakt med oss</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header



