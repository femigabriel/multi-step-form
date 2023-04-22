import { useState } from 'react'
import { AuthList } from '../../../../services/Services'
export const PageHeader = (props: AuthList) => {
  

  return (
    <div className="">
      <h1 className=" text-gray-700 text-[24px] font-bold">{props.title}</h1>
      <p className=" text-gray-400 text-[16px]">{props.description}</p>
    </div>
  )
}
