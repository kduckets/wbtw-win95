import React from 'react';
import {
  FolderIcon,
  DocumentIcon,
  MusicIcon,
  ApplicationIcon,
  SystemIcon,
  DriveIcon,
  ComputerIcon,
  PrinterIcon
} from '@react95/icons';

// Map icon names to actual icon components
const ICON_MAP = {
  media_cd: MusicIcon,
  folder: FolderIcon,
  document: DocumentIcon,
  txt: DocumentIcon,
  app: ApplicationIcon,
  system: SystemIcon,
  drive: DriveIcon,
  computer: ComputerIcon,
  printer: PrinterIcon,
};

function Icon({ name, className, onClick }) {
  const IconComponent = ICON_MAP[name] || ApplicationIcon; // Default to app icon
  return (
    <div className={className} onClick={onClick} style={{ cursor: 'pointer' }}>
      <IconComponent />
    </div>
  );
}

export default Icon;