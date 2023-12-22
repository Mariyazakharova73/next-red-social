import React from 'react'
import { Loader2 } from 'lucide-react'
import s from './Loader.module.css';

const Loader = () => {
  return (
    <Loader2 className={s.loader}/>
  )
}

export default Loader