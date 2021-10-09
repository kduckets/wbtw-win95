import React from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import { Modal, Frame } from '@react95/core';
import SoundfontProvider from '../utils/SoundfontProvider';
import DimensionsProvider from '../utils/DimensionsProvider';


function Synth ({ closeSynth, isMobile, props }) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';
    const firstNote = MidiNumbers.fromNote('c3');
    const lastNote = MidiNumbers.fromNote('f5');
    const noteRange = {
        first: MidiNumbers.fromNote('c3'),
        last: MidiNumbers.fromNote('f4'),
      };
    const keyboardShortcuts = KeyboardShortcuts.create({
      firstNote: firstNote,
      lastNote: lastNote,
      keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });
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
    <Frame>
    <DimensionsProvider>
      {({ containerWidth, containerHeight }) => (
        <SoundfontProvider
          instrumentName="lead_2_sawtooth"
          audioContext={audioContext}
          hostname={soundfontHostname}
          render={({ isLoading, playNote, stopNote }) => (
            <Piano
              noteRange={noteRange}
              width={containerWidth}
              playNote={playNote}
              stopNote={stopNote}
              disabled={isLoading}
              keyboardShortcuts={keyboardShortcuts}
              {...props}
            />
          )}
        />
      )}
    </DimensionsProvider>
    </Frame>
    </Modal>
  );
};

export default Synth