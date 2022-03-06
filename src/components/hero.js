import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

const Hero = ({ image, title, content }) => (
  <div className={StyleSheet.blue-bg}>
  <div className={styles.hero}>
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && <p className={styles.content}>{content}</p>}
    </div>
  </div>
  </div>
)

export default Hero
