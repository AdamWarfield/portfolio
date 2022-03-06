import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

const Hero = ({ image, name, title, content }) => (
  <section class="blue-bg">
  <div className={styles.hero}>
    {image && (
      <GatsbyImage className={styles.image} alt={image.description} image={image} />
    )}
    
    <div className={styles.details}>
      <h1 className={styles.name}>{name}<small className='style.title'>{title}</small></h1>
      {content && <p className={styles.content}>{content}</p>}
    </div>
    
  </div>
  </section>
)

export default Hero
