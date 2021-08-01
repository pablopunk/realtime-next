import { Buttons } from 'components/Buttons'
import { FunctionComponent } from 'react'

type Props = {}

const Index: FunctionComponent<Props> = () => (
  <>
    <p>
      <a
        href="https://github.com/pablopunk/realtime-next"
        className="p-2 mx-2 border rounded-md text-accent"
      >
        GitHub
      </a>
      <a
        href="https://pablopunk.com/blog"
        className="p-2 mx-2 border rounded-md text-accent"
      >
        Read about it
      </a>
    </p>
    <div className="my-6 text-center">
      <h1 className="text-3xl">Real-time UI</h1>
      <h2 className="text-lg">with NextJS and Supabase</h2>
    </div>
    <Buttons />
  </>
)

export default Index
