import { Buttons } from 'components/Buttons'
import { FunctionComponent } from 'react'

type Props = {}

const Index: FunctionComponent<Props> = () => (
  <>
    <p className="flex">
      <a
        href="https://github.com/pablopunk/realtime-next"
        className="flex items-center justify-center p-2 mx-2 transition-all border rounded-md focus:outline-none text-accent hover:scale-110 hover:border-accent"
      >
        GitHub
      </a>
      <a
        href="https://pablopunk.com/posts/how-to-create-a-real-time-ui-with-nextjs-and-supabase "
        className="flex items-center justify-center p-2 mx-2 transition-all border rounded-md focus:outline-none text-accent hover:scale-110 hover:border-accent"
      >
        Read about it
      </a>
      <button
        className="flex items-center justify-center p-2 mx-2 transition-all border rounded-md focus:outline-none text-accent hover:scale-110 hover:border-accent"
        onClick={() => window['__toggleDarkMode']()}
      >
        Change theme
      </button>
    </p>
    <div className="my-6 text-center">
      <h1 className="text-3xl">Real-time UI</h1>
      <h2 className="text-lg">with NextJS and Supabase</h2>
    </div>
    <Buttons />
  </>
)

export default Index
