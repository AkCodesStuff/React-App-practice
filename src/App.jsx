import React from 'react'
import styles from './style'
import {Navbar,Hero,Stats,Billing,Business,CardDeal,Testimonials,Clients,CTA,Footer} from './components/index.js'


const App = () => (
 <div>
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} `}>
      <div className={`${styles.boxWidth}`}>
      <Navbar/>
      </div>
    </div>
    <div className={`bg-primary  ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
  </div>
    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/> 
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Clients/> 
        <CTA/> 
        <Footer/> 
        
      </div>
    </div>
  </div>
  </div>

)

export default App