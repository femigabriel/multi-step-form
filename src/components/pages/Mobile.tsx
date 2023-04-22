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
      <div className="border border-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
        2
      </div>
    ),
    title: 'select plan',
    step: 'Step 2',
  },
  {
    id: 2,
    item: (
      <div className="border border-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer ">
        3
      </div>
    ),
    title: 'add-ons',
    step: 'Step 3',
  },
  {
    id: 3,
    item: (
      <div className="border border-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
        4
      </div>
    ),
    title: 'summary',
    step: 'Step 4',
  },
]

export const Mobile = () => {
  return (
    <div className="flex justify-center pt-10 mobile pb-6 ">
      {page.map((list) => {
        return (
          <div key={list.id} className=" mx-2">
            {list.item}
          </div>
        )
      })}
    </div>
  )
}
