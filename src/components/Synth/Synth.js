"use client"

import { useState } from "react"
import { Modal } from "@react95/core"
import Oscillator from "./Oscillator"
import ChangeWaveform from "./Waveform"
import Gain from "./Gain"
import Filter from "./Filter"
import "./piano.css"

const IconSprite = ({ name }) => (
  <i
    style={{
      display: "inline-block",
      width: "16px",
      height: "16px",
      backgroundImage: `url(https://raw.githubusercontent.com/React95/React95/master/packages/icons/src/icons/${name}.ico)`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      verticalAlign: "middle",
    }}
  />
)

function Synth({ closeSynth, isMobile }) {
  const [effects, setEffects] = useState({
    waveform: "sine",
    gainValue: 0.15,
    filterType: "lowpass",
    filterFreq: 15000,
  })

  const inputChange = (e) => {
    setEffects({ ...effects, [e.target.name]: e.target.value })
  }

  return (
    <Modal
      icon={<IconSprite name="media_cd_5" />}
      title="Control Panel"
      closeModal={closeSynth}
      style={{
        left: isMobile ? "5%" : "25%",
        top: isMobile ? "10%" : "5%",
        width: isMobile ? "90%" : 700,
      }}
      menu={[
        { name: "File", list: [] },
        { name: "Edit", list: [] },
      ]}
    >
      <ChangeWaveform inputChange={inputChange} />
      <Gain inputChange={inputChange} />
      <Filter inputChange={inputChange} />
      <Oscillator effects={effects} />
    </Modal>
  )
}

export default Synth
