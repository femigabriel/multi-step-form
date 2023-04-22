import { PageHeader } from '../auth/header/PageHeader'
import { PersonalInfoForm } from './PersonalInfoForm'

interface Props{
  onNextClick: ()=>any;
}

export const PersonalInfoPage = ({onNextClick}:Props) => {
  return (
    <div className="pt-10 p-5">
      <PageHeader
        title=" Personal info"
        description="Please provide your name, email address, and phone number"
      />
      <div className="pt-10">
        <PersonalInfoForm onSuccessCallback={onNextClick} />
      </div>
    </div>
  )
}
