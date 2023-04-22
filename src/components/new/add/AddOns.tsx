import { CheckSquareFilled, BorderOutlined } from '@ant-design/icons'
import { PageHeader } from '../auth/header/PageHeader'
import React, { useState } from 'react'
import { Button } from 'antd'
import { AddInfoList } from '../../../services/Services'

interface Props {
  onNextClick: () => any
  onBackClick: () => any
}

export const AddOns = ({ onNextClick, onBackClick }: Props) => {
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
      amount: '+$1/mo',
    },
    {
      id: 1,
      title: 'Larger storage',
      description: 'Extra 1TB cloud save',
      amount: '+$1/mo',
    },
    {
      id: 2,
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      amount: '+$1/mo',
    },
  ]

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
                  <span className="text-blue-500 "> {list.amount}</span>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex pt-10 justify-between w-full">
          <Button
            className=" bg-white text-gray-400 h-[40px] px-5"
            onClick={onBackClick}
            htmlType="submit"
          >
            Go Back
          </Button>

          <Button
            className=" bg-blue-950 text-white h-[40px] px-5 hover:text-white"
            onClick={onNextClick}
            htmlType="submit"
          >
            Next Step
          </Button>
        </div>
      </div>
    </div>
  )
}