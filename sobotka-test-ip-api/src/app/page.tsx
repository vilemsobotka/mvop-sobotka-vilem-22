"use client"
import { useState } from "react"
import { getData } from "./lib/getData"
import type { InfoProps } from "./components/Info"
import Info from "./components/Info"
export default function Home() {
  const [address, setAddress] = useState<string>("")
  const [info, setInfo] = useState<InfoProps>()
  async function processIPChange(): Promise<void> {
    const result = (await getData(address));
    setInfo(result)
    console.log(result)
  }

  return (
    <>
      <input
        id="address"
        className="dark:text-black rounded-l-md shadow outline-none p-1"
        onChange={(event) => setAddress(event.target.value)}
        size={32} placeholder={"192.168.0.1"}
      />
      <button onClick={processIPChange} className="rounded-r-md text-black bg-lime-400 border-md hover:bg-lime-300 p-1 shadow">locate</button>
      {info ?<Info {...info}/> : null}
      
    </>
  )
}
