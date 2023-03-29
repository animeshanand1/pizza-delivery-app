import React from 'react'
import Card from '../components/Card'
import pizzas from '../data'

function Home() {
  return (
    <div>
        {
            pizzas.map(pizza=>{
                return(
                    <div className='col-md-4 p-3'><Card pizza={pizza}/></div>
                )
            })
        }
    </div>
  )
}

export default Home