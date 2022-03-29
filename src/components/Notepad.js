import React from 'react'
import { Modal, Frame } from '@react95/core'
import ContentFactory from './NotepadContent/ContentFactory';

function Notepad({ closeNotepad, selectedItem, isMobile }) {
    return (
        <Modal
            icon="notepad"
            title={`${selectedItem.name}`}
            closeModal={closeNotepad}
            buttons={[{ value: "Close", onClick: closeNotepad }]}
            style={{
                left: isMobile ? '5%' : '32%',
                width: isMobile ? '90%' : 450
            }}
            menu={[
                { name: 'File', list: [] },
                { name: 'Edit', list: [] }
            ]}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
                paddingLeft={20}
                paddingRight={20}
                paddingBottom={20}
                paddingTop={4}
                style={{
					overflowY: "auto",
					maxHeight: isMobile ? '60vh' : '72vh'
				}}
            >
            <ContentFactory id={selectedItem.id} isMobile={isMobile} />
            </Frame>
        </Modal >
    )
}

export default Notepad
