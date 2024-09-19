import React from 'react'
import { card } from '../assets'
import styles , {layout} from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/>
      in a few easy steps.</h2>
      <p className={`${styles.paragraph} m-w-[470px] mt-5`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum enim dolores perspiciatis. Ratione deleniti nihil eos quaerat vel fugit incidunt facere amet pariatur asperiores eveniet, nam quae odit explicabo? Ab!

      </p>
      <Button/>
    </div>
    <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]"/>
    </div>
  </section>
)

export default CardDeal