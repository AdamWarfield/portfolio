import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

const Hero = ({ image, name, title, content, linkedin, email }) => (
  
  <div className={styles.hero}>
    {image && (
      <GatsbyImage className={styles.image} alt={image.description} image={image} />
    )}
    
    <div className={styles.details}>
      <h1 className={styles.name}>{name} <br></br><small className='style.title'>{title}</small></h1>
      {content && <p className={styles.content}>{content}</p>}
      <div className={styles.contact}>
        
        <div className={styles.contact}>
          
          <a href='${linkedin}'>linkedIn</a>
          <a href='mailto:${email}'>{email}</a>
          </div>
      </div>
    </div>
    
  </div>
)

export default Hero
