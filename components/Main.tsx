import React, { useEffect, useState } from "react"
import { useRserveContext } from "../store/appState"

const Main = () => {
  const R = useRserveContext()
  const [url, setUrl] = useState("")

  const [data, setData] = useState<any>([])
  const [vars, setVars] = useState<string[]>([])

  useEffect(() => {
    setUrl(
      "https://www.stat.auckland.ac.nz/~wild/data/FutureLearn/Census%20at%20School-500.csv"
    )
  }, [])

  useEffect(() => {
    if (!R || !R.running) return

    if (url === "") return

    const s: any = R.ocap((err: any, funs: any) => {
      funs.load_data(url, (err: any, value: any) => {
        value.get_data((err: any, value: any) => setData(value))
        value.variables((err: any, value: any) => setVars(value))
      })
    })
  }, [url, R])

  return (
    <div>
      {data && (
        <>
          <p>You have some data now ...</p>

          <p>
            <strong>Variables</strong>
          </p>
          <ul>
            {vars.map((v: string) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Main
