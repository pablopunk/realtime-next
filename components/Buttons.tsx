import { FunctionComponent } from 'react'

const useClicks = () => []

const buttons = [
  {
    type: 'happy',
    label: '😊',
  },
  {
    type: 'sad',
    label: '😞',
  },
  {
    type: 'party',
    label: '🎉',
  },
  {
    type: 'love',
    label: '❤️',
  },
]

export const Buttons: FunctionComponent = () => {
  const clicks = useClicks()

  return (
    <div>
      <p>
        These buttons update in real time. Go ahead and open several windows to
        see it in action.
      </p>
      <div className="flex justify-center mt-4">
        {buttons.map((button) => (
          <button
            onClick={() => {}}
            key={button.type}
            className="flex p-2 mx-3 transition-all border rounded-md shadow-md focus:outline-none hover:border-accent hover:scale-110 hover:shadow-lg active:outline-none"
          >
            <span className="mr-1">
              {clicks?.filter((c) => c.type === button.type).length}
            </span>
            <span>{button.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
