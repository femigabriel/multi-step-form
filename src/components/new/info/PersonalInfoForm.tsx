import React, { useState } from 'react'
import { Input } from 'antd'

interface Props {
  onSuccessCallback: () => any
}
export const PersonalInfoForm = ({ onSuccessCallback }: Props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!name || !email || !phone) {
      setError(true)
      return
    }
    onSuccessCallback()
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-3">
          <div className="flex justify-between">
            <label className=" text-gray-600 mb-2 font-Ubuntu-Medium">
              Name
            </label>
            {error && name.length <= 0 ? (
              <label className="text-red-400 font-semibold">
                This field is required
              </label>
            ) : (
              ''
            )}
          </div>
          <Input
            className="border rounded h-[45px] p-3  font-semibold text-[18px] mb-2"
            placeholder="e.g John Doe"
            onChange={(e) => setName(e.target.value)}
            pattern="^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)"
            type="text"
          />
        </div>

        <div className="flex flex-col mb-3">
          <div className="flex justify-between">
            <label className=" text-gray-600 mb-2">Email Address</label>
            {error && email.length <= 0 ? (
              <label className="text-red-400 font-semibold">
                This field is required
              </label>
            ) : (
              ''
            )}
          </div>
          <Input
            className="border rounded h-[45px] p-3  font-semibold text-[18px] mb-2"
            placeholder="e.g johndoe@lorem.com"
            onChange={(e) => setEmail(e.target.value)}
            pattern="^\S+@\S+\.\S+$"
            type="email"
          />
        </div>

        <div className="flex flex-col mb-3">
          <div className="flex justify-between">
            <label className=" text-gray-600 mb-2">Phone Number</label>
            {error && phone.length <= 0 ? (
              <label className="text-red-400 font-semibold">
                This field is required
              </label>
            ) : (
              ''
            )}
          </div>
          <Input
            className="border rounded h-[45px] p-3 font-semibold text-[18px] mb-2"
            placeholder="e.g +1 234567890"
            onChange={(e) => setPhone(e.target.value)}
            pattern="^\+[1-9]{1}[0-9]{3,14}$"
            type="tel"
          />
        </div>

        <div className="pt-20">
          <button className=" bg-blue-950 text-white float-right p-2 px-5 rounded-md">
            Next Step
          </button>
        </div>
      </form>
    </div>
  )
}
