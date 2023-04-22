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
  const [active, setActive] = useState(false)
  const [selected, setSelected] = useState<PaymentPlanList[]>([])

  const handleClick = () => {
    setActive(!active)
  }

  const handleOnClick = (item: PaymentPlanList) => {
    const res = findItem(item)
    let updatedSelected: PaymentPlanList[] = selected
    if (res) {
      updatedSelected = selected.filter((e) => e.id != item.id)
    } else {
      updatedSelected = [...selected, item]
    }
    setSelected(updatedSelected)
  }

  const findItem = (item: PaymentPlanList): PaymentPlanList | undefined => {
    return selected.find((i) => item.id === i.id)
  }
  const isSelected = (item: PaymentPlanList): boolean => {
    return findItem(item) !== undefined
  }

  const items: PaymentPlanList[] = [
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

  const handleSubmit = () => {
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
                className="border p-5 rounded-xl cursor-pointer hover:border-blue-600 "
                style={{ borderColor: isSelected(list) ? 'blue' : '' }}
                onClick={() => handleOnClick(list)}
              >
                <div className="lg:block sm:flex">
                  <div className="mb-14">{list.icon}</div>
                  <div className="lg:pl-0 sm:pl-5">
                    <h3 className="font-bold text-[18px] text-blue-800 ">
                      {list.title}
                    </h3>
                    <p className="text-gray-400 text-[14px]">{list.amount}</p>
                    <h3 className="text-blue-700 font-semibold mt-2">
                      {list.duration}
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
            style={{ color: active ? 'blue' : 'darkgray' }}
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
            style={{ color: active ? 'darkgray' : 'blue' }}
          >
            Yearly
          </span>
        </div>
        <div className="flex pt- justify-between w-full">
          <Button
            onClick={onBackClick}
            className=" bg-white text-gray-400 float-right"
            htmlType="submit"
          >
            Go Back
          </Button>

          <Button
            className=" bg-blue-950 text-white float-right h-[45px] px-5 hover:text-white"
            htmlType="submit"
            onClick={handleSubmit}
          >
            Next Step
          </Button>
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
