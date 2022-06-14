import { RserveProvider } from "../store/appState"
import "../styles/globals.css"
import type { AppProps } from "next/app"
import Rserve from "rserve"
import { useEffect, useState } from "react"
// import { Promise } from "bluebird"

function MyApp({ Component, pageProps }: AppProps) {
  const [Rcon, setRcon] = useState({})

  const RserveInit = () => {
    console.log("init Rserve")
    let s = Rserve.create({
      host: "ws://localhost:8081",
      on_connect: () => setRcon(s),
    })
  }

  useEffect(() => RserveInit(), [])

  // const do_connect = () => {
  //   console.log("connected")
  //   r.ocap(function (err: any, funs: any) {
  //     console.log("hi")
  //     funs = Promise.promisifyAll(funs)
  //     // setRFuns(afns)
  //   })
  // }

  // const r = Rserve.create({
  //   host: "http://localhost:8081",
  //   on_connect: do_connect,
  // })

  return (
    <RserveProvider value={Rcon}>
      <Component {...pageProps} />
    </RserveProvider>
  )
}

export default MyApp
