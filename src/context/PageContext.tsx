import { createContext, useEffect, useState, useReducer } from 'react'
import { AddInfoList, PaymentPlanList } from '../services/Services'
import React from 'react'
// const Context = React.createContext()

interface Props {
  children: React.ReactNode
}

const reducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case 'setPlans':
      return (state = { ...state, plans: payload })
    case 'addons':
      return (state = { ...state, addons: payload })
      case 'isYearly':
        return (state = { ...state, isYearly: payload })
    default:
      return state
  }
}

const initialState = {
  plans: [],
  addons: [],
  isYearly: false
}

interface StateProp{
  plans: PaymentPlanList
  addons: AddInfoList[]
  isYearly: boolean
}

export const PageContext = createContext<{
  state: StateProp|undefined
  dispatch: React.Dispatch<any>
}>({ state: undefined, dispatch: () => null })

export default ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <PageContext.Provider value={{ state, dispatch }}>
      {children}
    </PageContext.Provider>
  )
}
