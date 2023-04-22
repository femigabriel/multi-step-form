import React, { useState } from 'react'
import { AuthListId } from '../../services/Services'

type UserListProps = {
  users: AuthListId[]
}

export const LeftSidebar = (props: UserListProps) => {
  const [active, setActive] = useState(null)
  const [list, setList] = useState([])
  return (
    <div className="div w-full max-w[320px] h-screen text-white p-5 pt-10">
      {props.users.map((page) => {
        return (
          <div key={page.id} className="flex mb-6">
            {page.item}

            <div className="pl-5 uppercase ">
              <h3 className="text-gray-300 text-[12px]">{page.step}</h3>
              <h2 className="text-[14px]  font-semibold">{page.title}</h2>
            </div>
          </div>
        )
      })}
    </div>
  )
}
