import React from 'react'
import { Link } from 'gatsby'
import globalStyles from '../global-styles.module.css'

const Article = () => {
    return (
        <div>
            <Link to='#'>Hoveside</Link>
            <h1>GDPR</h1>
            <p>EU-forordning  2016/679, General Data Protection Regulation, GDPR  – Databehandleravtale
Fra 25. mai 2018 gjelder nye regler for personvern. Dette som følge av EU-forordning 2016/679, General Data Protection Regulation.
            </p>
            <p>20. mars 2019</p>
            <Link to = "#" className ={globalStyles.primaryButton}>Ta kontakt med oss</Link>
        </div>
    )
}

export default Article