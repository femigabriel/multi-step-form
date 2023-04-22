import { CheckSquareFilled, BorderOutlined } from '@ant-design/icons'
import { PageHeader } from '../auth/header/PageHeader'
import React, { useState } from 'react'
import { Button } from 'antd'
import { AddInfoList } from '../../../services/Services'
import { PageContext } from '../../../context/PageContext'

interface Props {
  onNextClick: () => any
  onBackClick: () => any
}

export const AddOns = ({ onNextClick, onBackClick }: Props) => {
  const pageContext = React.useContext(PageContext)
  const [active, setActive] = useState<AddInfoList[]>([])

  const handleClick = (item: AddInfoList) => {
    const res = findItem(item)
    if (res) {
      setActive(active.filter((e) => e.id != item.id))
    } else {
      setActive((current) => [...current, item])
    }
  }

  const isSelected = (item: AddInfoList): boolean => {
    return findItem(item) !== undefined
  }

  const findItem = (item: AddInfoList): AddInfoList | undefined => {
    return active.find((i) => item.id === i.id)
  }

  const items: AddInfoList[] = [
    {
      id: 0,
      title: ' Online service',
      description: '  Access to multiplayer games',
      amount: 1,
    },
    {
      id: 1,
      title: 'Larger storage',
      description: 'Extra 1TB cloud save',
      amount: 1,
    },
    {
      id: 2,
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      amount: 1,
    },
  ]

  const handleSubmit = () => {
    if(active.length<1){
      return
    }
    pageContext.dispatch({ type: 'addons', payload: active })
    onNextClick()
  }

  return (
    <div className="pt-10 p-5">
      <PageHeader
        title=" Pick add-ons"
        description="Add-ons helps your gaming experience"
      />
      <div className="pt-10">
        <div>
          {items.map((list) => {
            return (
              <div
                key={list.id}
                className=" border border-gray-200 w-full p-5 mb-5 flex justify-between rounded-xl"
                onClick={() => handleClick(list)}
                style={{ borderColor: isSelected(list) ? 'blue' : '' }}
              >
                <div className="flex">
                  <span className="mx-3 mt-3 text-blue-700">
                    {isSelected(list) ? (
                      <CheckSquareFilled />
                    ) : (
                      <BorderOutlined />
                    )}
                  </span>
                  <div>
                    <h3 className="text-gray-700 font-bold text-[18px]">
                      {list.title}
                    </h3>
                    <p className="text-16px text-gray-400">
                      {list.description}
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="text-blue-500 ">+${list.amount}</span>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex pt-10 justify-between w-full">
          <button
            className=" bg-white text-[#172554]  h-[40px] px-5 rounded-md border"
            onClick={onBackClick}
          >
            Go Back
          </button>

          <button
            className=" bg-blue-950 text-white float-right p-2 px-5 rounded-md"
            onClick={handleSubmit}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  )
}
