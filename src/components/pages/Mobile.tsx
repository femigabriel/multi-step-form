const items = [
  {
    id: 0,
    step: 'Step 1',
  },
  {
    id: 1,
    step: 'Step 2',
  },
  {
    id: 2,
    step: 'Step 3',
  },
  {
    id: 3,
    step: 'Step 4',
  },
]

interface Props {
  curentId: number
}

export const Mobile = ({ curentId }: Props) => {
  const active = curentId < items.length ? curentId : items.length - 1

  return (
    <div className="flex justify-center pt-10 mobile pb-6 ">
      {items.map((page) => {
        return (
          <div key={page.id} className=" mx-2">
            <div
              className={`border border-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer ${
                page.id === active ? 'active' : ''
              }`}
            >
              {page.id + 1}
            </div>
          </div>
        )
      })}
    </div>
  )
}
