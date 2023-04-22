import { Button } from 'antd'

interface Props {
  onSuccessCallback: () => any
  onPreviousCallback: () => any
}
export const SummaryType = ({
  onSuccessCallback,
  onPreviousCallback,
}: Props) => {
  return (
    <div>
      <div className=" bg-[#1888880f] p-5 rounded-md">
        <div className="flex justify-between">
          <div className="mb-5">
            <h3 className="text-blue-800 font-bold text-[18px]">
              Arcade(Yearly)
            </h3>
            <a href="" className="text-16px text-gray-400 underline cursor-pointer hover:text-blue-500">
              Change
            </a>
          </div>
          <div className="mt-3">
            <h3 className="text-gray-700 font-bold text-[16px]">$90/yr</h3>
          </div>
        </div>
        <div className="border border-t-gray-300  border-b-0 border-x-0">
          <div className="flex justify-between mb-5 mt-5">
            <p className="text-gray-400">Online service</p>
            <h3 className="text-blue-700 font-semibold">+$10/yr</h3>
          </div>
          <div className="flex justify-between m">
            <p className="text-gray-400">Large storage</p>
            <h3 className="text-blue-700 font-semibold">+$20/yr</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-between  p-5 mt-5 ">
        <p className="text-gray-400">Total(per month)</p>
        <h3 className="text-blue-800 font-bold">$120/yr</h3>
      </div>
      <div className="flex pt-10 justify-between w-full">
        <Button
          className=" bg-white text-gray-400  h-[40px] px-5"
          htmlType="submit"
          onClick={onPreviousCallback}
        >
          Go Back
        </Button>

        <Button
          className=" bg-blue-600 text-white  h-[40px] px-5"
          htmlType="submit"
          onClick={onSuccessCallback}
        >
          Confirm
        </Button>
      </div>
    </div>
  )
}
