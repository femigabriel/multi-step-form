import { PageHeader } from '../auth/header/PageHeader'
import { Button } from 'antd'
import { SummaryType } from './SummaryType'

interface Props {
  onNextClick: () => any
  onBackClick: () => any
}
export const Summary = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="pt-10 p-5">
      <PageHeader
        title="Finshing up"
        description="Double check everything looks OK before confirming."
      />
      <div className="pt-10">
        <SummaryType onSuccessCallback={onNextClick} onPreviousCallback={onBackClick}/>
      </div>
    </div>
  )
}
