import React from "react";
import { ListLesson } from "./ListLesson";

interface LeftPanelProps {
  focusEmailField: React.RefObject<(() => void) | null>;
}

export const LeftPanel: React.FC<LeftPanelProps> = ({ focusEmailField }) => {
  return (
    <>
      <div className="mt-6 md:mt-8">
        <ListLesson focusEmailField={focusEmailField} />
      </div>
    </>
  );
};
