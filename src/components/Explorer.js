import styled from "styled-components"
import { Modal, Frame } from "@react95/core"
import Item from "./Item"

const FilesWrapper = styled.div`
  display: flex;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
`

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

function Explorer({ items, closeExplorer, openNotepad, isMobile }) {
  return (
    <Modal
      icon={<IconSprite name="folder_file" />}
      title="Documents"
      closeModal={closeExplorer}
      buttons={[{ value: "Close", onClick: closeExplorer }]}
      style={{
        left: isMobile ? "5%" : "15%",
        top: isMobile ? "15%" : "10%",
        width: isMobile ? "90%" : 500,
      }}
      menu={[
        { name: "File", list: [] },
        { name: "Edit", list: [] },
      ]}
    >
      <Frame bg="white" boxShadow="in" height="100%" padding={20}>
        <FilesWrapper>
          {items.map((item) => (
            <Item key={item.id} item={item} openNotepad={openNotepad} />
          ))}
        </FilesWrapper>
      </Frame>
    </Modal>
  )
}

export default Explorer
