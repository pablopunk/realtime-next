import { useClicks, useInsertClicks } from 'db/clicks'
import { FunctionComponent } from 'react'
import { usePrevious } from 'react-use'
import { animated, useSpring } from 'react-spring'

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

const from = {
  backgroundColor: 'var(--color-bg)',
  color: 'var(--color-fg)',
}

const to = {
  backgroundColor: 'var(--color-accent)',
  color: 'var(--color-bg)',
}

export const Buttons: FunctionComponent = () => {
  const clicks = useClicks()
  const prevClicks = usePrevious(clicks)
  const insertClicks = useInsertClicks()
  const clickedButton = (type: string) => () => insertClicks([{ type }])

  return (
    <div>
      <p className="text-center">
        These buttons update in real time. Go ahead and open several windows to
        see it in action.
      </p>
      <div className="flex justify-center mt-4">
        {buttons.map((button) => {
          const clicksForType =
            clicks?.filter((c) => c.type === button.type).length || 0
          const prevClicksForType =
            prevClicks?.filter((c) => c.type === button.type).length || 0
          const [styles, api] = useSpring(() => ({
            ...from,
            config: {
              duration: 200,
            },
          }))

          if (clicksForType !== prevClicksForType) {
            api.start({ to })
            setTimeout(() => api.start({ to: { ...from } }), 400)
          }

          return (
            <animated.button
              style={styles}
              onClick={clickedButton(button.type)}
              key={button.type}
              className="p-2 m-3 transition border rounded-lg shadow-md hover:scale-110 hover:border-accent focus:outline-none"
            >
              <span className="mr-1">{clicksForType}</span>
              <span>{button.label}</span>
            </animated.button>
          )
        })}
      </div>
    </div>
  )
}
