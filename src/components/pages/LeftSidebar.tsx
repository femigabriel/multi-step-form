
const items = [
  {
    id: 0,
    title: 'Your Info',
    step: 'Step 1',
  },
  {
    id: 1,
    title: 'select plan',
    step: 'Step 2',
  },
  {
    id: 2,
    title: 'add-ons',
    step: 'Step 3',
  },
  {
    id: 3,
    title: 'summary',
    step: 'Step 4',
  },
]
interface Props {
  curentId: number
}

export const LeftSidebar = ({ curentId }: Props) => {

  // i want the active state to be fixed on the last acive number
  // if we've exhaused all available steps
  const active = curentId < items.length ? curentId : items.length-1

  return (
    <div className="div w-full max-w[320px] h-screen text-white p-5 pt-10">
      {items.map((page, index) => {
        return (
          <div key={page.id} className="flex mb-6">
            <div className={`border border-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer ${page.id === active?'active':''}`}
            >
              {page.id+1}
            </div>
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
