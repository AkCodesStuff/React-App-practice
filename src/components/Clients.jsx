import React from 'react'
import { clients } from '../constants'
import styles from '../style'
const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-row gap-10 justify-around`}>
        {clients.map((client)=>(
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[120px] min-w-[120px]`}>
            <img src={client.logo} alt="client-logo" className="sm:w-[162px] w-[100px] object-contain"/>
          </div>
        ))}
      </div>
  </section>
)

export default Clients