import React from 'react'
import {stats} from '../constants'
import styles from '../style'


const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 gap-[20px]`}>
    {stats.map((stat,index)=>(
      <div key={stat.id} className="flex-1 flex justify-start items-center flex-row m-3">
        
      <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]  text-white">{stat.value}</h4>
  
      <span className="font-poppins xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient">{stat.title}</span>{" "}    
      
      </div>
    ))}
  </section>
)

export default Stats