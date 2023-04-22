import React, { useState } from 'react'
import { AuthListId } from '../../services/Services'
import { PersonalInfoPage } from '../new/info/PersonalInfoPage'
import { AddOns } from '../new/add/AddOns'
import { Summary } from '../new/summary/Summary'
import { ThankYouPage } from '../new/ThankYou/ThankYouPage'
import { Mobile } from './Mobile'
import { LeftSidebar } from './LeftSidebar'
import { PaymentPlan } from '../new/plan/PaymentPlan'

export const Pages = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const gotoNext = () => {
    setCurrentStepIndex((x) => x + 1)
  }

  const gotoPrevious = () => {
    setCurrentStepIndex((x) => x - 1)
  }

  const renderCurrentSelection = () => {
    switch (currentStepIndex) {
      case 0:
        return <PersonalInfoPage onNextClick={gotoNext} />
        break
      case 1:
        return <PaymentPlan onNextClick={gotoNext} onBackClick={gotoPrevious} />
        break
      case 2:
        return <AddOns onNextClick={gotoNext} onBackClick={gotoPrevious} />
        break
      case 3:
        return <Summary onNextClick={gotoNext} onBackClick={gotoPrevious} />
        break
      case 4:
        return <ThankYouPage />
      default:
        return <PersonalInfoPage onNextClick={gotoNext} />
    }
  }

  return (
    <>
      <div className="page p-5">
        <div className=" flex">
          <LeftSidebar users={page} />
          <div className="w-full pl-10 pr-10">{renderCurrentSelection()}</div>
        </div>
      </div>
      <div className="mobile_header">
        <div className="pl-3 pr-3">
          <Mobile />
          <div className="w-full bg-white pb-10 pl-3 pr-3">
            {renderCurrentSelection()}
          </div>
        </div>
      </div>
    </>
  )
}
const page = [
  {
    id: 0,
    item: (
      <div className="border border-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer active">
        1
      </div>
    ),
    title: 'Your Info',
    step: 'Step 1',
  },
  {
    id: 1,
    item: (
      <div className="border border-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer active:bg-sky-100">
        2
      </div>
    ),
    title: 'select plan',
    step: 'Step 2',
  },
  {
    id: 2,
    item: (
      <div className="border border-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer active:bg-sky-100">
        3
      </div>
    ),
    title: 'add-ons',
    step: 'Step 3',
  },
  {
    id: 3,
    item: (
      <div className="border border-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer active:bg-sky-100">
        4
      </div>
    ),
    title: 'summary',
    step: 'Step 4',
  },
]
