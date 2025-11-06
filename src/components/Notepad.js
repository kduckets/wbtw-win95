"use client"

import { Modal, Frame } from "@react95/core"
import styled from "styled-components"
import { useRef, useEffect } from "react"
import ContentFactory from "./NotepadContent/ContentFactory"

// Icon component to load icons from CDN
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

const ContentWrapper = styled.div`
    padding: 10px 20px 20px 20px;
    
    /* Center all headings */
    h1, h2, h3, h4, h5, h6 {
        text-align: center;
        margin: 10px 0 15px 0;
    }
    
    /* Remove top margin from first child element */
    > *:first-child {
        margin-top: 0;
    }
    
    /* Center paragraphs and add spacing */
    p {
        text-align: center;
        margin: 15px 0;
        line-height: 1.6;
    }
    
    /* Center images */
    img {
        display: block;
        margin: 20px auto;
        max-width: 100%;
        height: auto;
    }
    
    /* Center divs and add spacing */
    > div {
        text-align: center;
        margin: 15px 0;
    }
    
    /* Style links */
    a {
        color: #0000ff;
        text-decoration: underline;
        cursor: pointer;
        
        &:visited {
            color: #800080;
        }
        
        &:hover {
            color: #ff0000;
        }
    }
    
    /* Add spacing between sections */
    hr {
        margin: 30px 0;
        border: none;
        border-top: 1px solid #808080;
    }
`

function Notepad({ closeNotepad, selectedItem, isMobile }) {
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0
    }
  }, [selectedItem.id])

  return (
    <Modal
      icon={<IconSprite name="notepad" />}
      title={`${selectedItem.name}`}
      closeModal={closeNotepad}
      buttons={[{ value: "Close", onClick: closeNotepad }]}
      style={{
        left: isMobile ? "5%" : "32%",
        top: isMobile ? "3%" : "5%",
        width: isMobile ? "90%" : 450,
      }}
      menu={[
        { name: "File", list: [] },
        { name: "Edit", list: [] },
      ]}
    >
      <Frame
        bg="white"
        boxShadow="in"
        height="100%"
        ref={scrollRef}
        style={{
          overflowY: "auto",
          maxHeight: isMobile ? "60vh" : "72vh",
        }}
      >
        <ContentWrapper>
          <ContentFactory id={selectedItem.id} isMobile={isMobile} />
        </ContentWrapper>
      </Frame>
    </Modal>
  )
}

export default Notepad
