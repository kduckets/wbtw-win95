import React, { useState } from "react";
import { Modal } from '@react95/core';
import Oscillator from "./Oscillator";
import ChangeWaveform from "./Waveform";
import Gain from "./Gain";
import Filter from "./Filter";
import "./piano.css"


function Synth ({ closeSynth, isMobile }) {
  const [effects, setEffects] = useState({
    waveform: "sine",
    gainValue: 0.15,
    filterType: "lowpass",
    filterFreq: 15000
  });

  const inputChange = e => {
    setEffects({ ...effects, [e.target.name]: e.target.value });
  };

  return (
    <Modal
    icon="mmsys_90"
    title="synth.exe"
    closeModal={closeSynth}
    style={{
        left: isMobile ? '5%' : '5%',
        top: '5%',
        width: isMobile ? '90%' : '80%',
        height: isMobile ? '86%' : '90%'
    }}
    buttons={[

        { value: 'Exit', onClick: closeSynth },

      ]}>

    <div className="piano">
        <Oscillator
          waveform={effects.waveform}
          filterType={effects.filterType}
          filterFreq={effects.filterFreq}
          gainValue={effects.gainValue}
        />
      </div>
      <div className="effects">
        <ChangeWaveform inputChange={inputChange} waveform={effects.waveform} />
        <Gain inputChange={inputChange} gainValue={effects.gainValue} />
        <Filter
          inputChange={inputChange}
          filterType={effects.filterType}
          filterFreq={effects.filterFreq}
        />
      </div>

    </Modal>
  );
};

export default Synth