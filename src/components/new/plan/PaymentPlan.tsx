import React, { useState } from 'react'
import { PaymentPlanList } from '../../../services/Services'
import { Button, Form, Switch } from 'antd'
import { PageHeader } from '../auth/header/PageHeader'
import { PageContext } from '../../../context/PageContext'

interface Props {
  onNextClick: () => any
  onBackClick: () => any
}

export const PaymentPlan = ({ onNextClick, onBackClick }: Props) => {
  const pageContext = React.useContext(PageContext)
  const { state } = pageContext
  const isYearly = state?.isYearly
  console.log({ isYearly })

  const [active, setActive] = useState(false)
  const [selected, setSelected] = useState<PaymentPlanList | undefined>()

  const handleClick = () => {
    setActive(!active)
  }

  const handleOnClick = (item: PaymentPlanList) => {
    setSelected(item)
  }

  const items: PaymentPlanList[] = [
    {
      id: 0,
      title: 'Arcade',
      amount: 9,
      icon: <img src="../src/assets/images/icon-arcade.svg" className='plan_icon' alt="arcade" />,
    },
    {
      id: 1,
      title: 'Advanced',
      amount: 12,
      icon: <img src="../src/assets/images/icon-advanced.svg" alt="advanced" />,
    },
    {
      id: 2,
      title: 'Pro',
      amount: 15,
      icon: <img src="../src/assets/images/icon-pro.svg" alt="pro" />,
    },
  ]

  const handleSubmit = () => {
    if (selected === undefined) {
      return
    }
    pageContext.dispatch({ type: 'setPlans', payload: selected })
    pageContext.dispatch({ type: 'isYearly', payload: active })
    onNextClick()
  }

  return (
    <div className="pt-10 p-5">
      <PageHeader
        title=" Select your plan"
        description="You havethe option of monthly or yearly billing"
      />
      <div>
        <div className="lg:grid gap-5 grid-cols-3 pt-10 sm:block ">
          {items.map((list) => {
            return (
              <div
                key={list.id}
                className="border p-5 rounded-xl cursor-pointer hover:border-blue-600 plan_card"
                style={{ borderColor: list.id === selected?.id ? 'blue' : '' }}
                onClick={() => handleOnClick(list)}
              >
                <div className="plan_container">
                  <div className="mb-14">{list.icon}</div>
                  <div className=" plan_content" >
                    <h3 className="font-bold text-[18px] text-blue-800 ">
                      {list.title}
                    </h3>
                    <p className="text-gray-400 text-[14px]">
                      +${list.amount}/{active ? 'yr' : 'mo'}
                    </p>
                    <h3 className="text-blue-700 font-semibold mt-2">
                      {active ? '2 months free' : ''}
                    </h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex justify-center mt-10 mb-20 p-3 rounded- bg-gray-100 font-semibold">
          <span
            className="text-gray-700"
            style={{ color: active ? 'darkgray' : 'blue' }}
          >
            Monthly
          </span>
          <Switch
            onClick={handleClick}
            defaultChecked
            onChange={onChange}
            className="mx-5 bg-[#172554]"
          />
          <span
            className="text-gray-400"
            style={{ color: active ? 'blue' : 'darkgray' }}
          >
            Yearly
          </span>
        </div>
        <div className="flex pt- justify-between w-full">
          <button
            className=" bg-white text-[#172554] h-[40px] px-5 rounded-md border"
            onClick={onBackClick}
          >
            Go Back
          </button>

          <button
            className=" bg-blue-950 text-white p-2 px-5 rounded-md"
            onClick={handleSubmit}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  )
}

const list = [
  {
    id: 0,
    title: 'Arcade',
    amount: '$9/mo',
    icon: <img src="../src/assets/images/icon-arcade.svg" alt="arcade" />,
    duration: '2 months free',
  },
  {
    id: 1,
    title: 'Advanced',
    amount: '$12/mo',
    icon: <img src="../src/assets/images/icon-advanced.svg" alt="advanced" />,
    duration: '2 months free',
  },
  {
    id: 2,
    title: 'Pro',
    amount: '$15/mo',
    icon: <img src="../src/assets/images/icon-pro.svg" alt="pro" />,
    duration: '2 months free',
  },
]
type PaymentListProps = {
  items: PaymentPlanList[]
}
const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`)
}
