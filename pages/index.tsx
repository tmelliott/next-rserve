import type { NextPage } from "next"
import { useEffect, useState } from "react"
import { useRserveContext } from "../store/appState"

const Home: NextPage = () => {
  const R = useRserveContext()

  const [rv, setRv] = useState("")

  useEffect(() => {
    if (R && R.running) {
      const s: any = R.ocap((err: any, funs: any) => {
        funs.rversion((err: any, value: string) => setRv(value))
      })
    }
  }, [R])

  return (
    <div>
      <h1>NextJS + Rserve</h1>

      {rv == "" ? <p>Not connected ...</p> : <p>Connected to R {rv}</p>}
    </div>
  )
}

export default Home
