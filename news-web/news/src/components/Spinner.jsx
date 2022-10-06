
import loading from './loading.gif'
import React from 'react'

export default function Spinner() {
    return (
      <div className="grid grid-v-screen place-items-center">
        <img src={loading} alt="loading"/>
      </div>
    )
  }

