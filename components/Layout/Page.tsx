import { FunctionComponent } from 'react'

type Props = {}

const Page: FunctionComponent<Props> = ({ children }) => (
  <>
    <main className="flex flex-col items-center justify-center w-screen h-screen">
      {children}
    </main>
  </>
)

export default Page
