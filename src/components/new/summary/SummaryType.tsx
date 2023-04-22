import { Button } from 'antd'
import { PageContext } from '../../../context/PageContext'
import React from 'react'
import { AddInfoList } from '../../../services/Services'

interface Props {
  onSuccessCallback: () => any
  onPreviousCallback: () => any
}
export const SummaryType = ({
  onSuccessCallback,
  onPreviousCallback,
}: Props) => {
  const pageContext = React.useContext(PageContext)
  const { state } = pageContext
  const isYearly = state?.isYearly
  const addons = state?.addons
  const plan = state?.plans

  const getTotal = (): number => {
    const totalAddon =
      addons?.reduce((a: number, b: AddInfoList) => a + b.amount, 0) || 0
    const totalPlan = plan?.amount || 0
    return totalAddon + totalPlan
  }
  return (
    <div>
      <div>
        <div className=" bg-[#1888880f] p-5 rounded-md">
          <div className="flex justify-between border border-b-gray-300  border-t-0 border-x-0">
            <div className="mb-3 ">
              <h3 className="text-blue-800 font-bold text-[18px]">
                {plan?.title}
              </h3>
              <a
                href=""
                className="text-16px text-gray-400 underline cursor-pointer hover:text-blue-500"
              >
                Change
              </a>
            </div>
            <div className="mt-3">
              <h3 className="text-gray-700 font-bold text-[16px]">
                {plan?.amount}/{isYearly ? 'yr' : 'mo'}
              </h3>
            </div>
          </div>
          {addons?.map((list) => {
            return (
              <div className="">
                <div className="flex justify-between mb-5 mt-5">
                  <p className="text-gray-400">{list.title}</p>
                  <h3 className="text-blue-700 font-semibold">
                    {list.amount}/ {isYearly ? 'yr' : 'mo'}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex justify-between  p-5 mt-5 ">
          <p className="text-gray-400">
            Total {isYearly ? '(year)' : '(month)'}
          </p>
          <h3 className="text-blue-800 font-bold">
            ${getTotal()}/ {isYearly ? 'yr' : 'mo'}
          </h3>
        </div>
      </div>
      <div className="flex pt-10 justify-between w-full">
        <button
          className=" bg-white text-[#172554]  h-[40px] px-5 rounded-md border"
          onClick={onPreviousCallback}
        >
          Go Back
        </button>

        <button
          className=" bg-blue-600 text-white  h-[40px] px-5 rounded-md"
          onClick={onSuccessCallback}
        >
          Confirm
        </button>
      </div>
    </div>
  )
}
