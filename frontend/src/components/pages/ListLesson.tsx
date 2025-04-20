import { Lesson } from "./Lesson";

import React from "react";

export const ListLesson = ({
  focusEmailField,
}: {
  focusEmailField: React.RefObject<(() => void) | null>;
}) => {
  const LIST_LESSONS = [
    {
      id: 1,
      title: "Hiểu về bản chất thực sự của thị trường Forex",
      viewed: 823,
    },
    {
      id: 2,
      title: "Trader có tác động lên cung cầu của thị trường Forex không?",
      viewed: 1477,
    },
    {
      id: 3,
      title: "Tiền nạp vào sàn sẽ đi đâu? Bạn đang thực sự giao dịch với ai?",
      viewed: 536,
    },
    { id: 4, title: "Sàn Forex làm gì với tiền của bạn?", viewed: 962 },
    {
      id: 5,
      title: "Những chiêu trò thường gặp của sàn và môi giới Forex",
      viewed: 1291,
    },
    {
      id: 6,
      title: "Lợi nhuận tiềm năng và các rủi ro khi tham gia thị trường",
      viewed: 1152,
    },
    {
      id: 7,
      title: "Bí quyết để chiến thắng lâu dài trong giao dịch Forex",
      viewed: 748,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-y-8">
        {LIST_LESSONS.map((lesson) => (
          <Lesson
            key={lesson.id}
            id={lesson.id}
            title={lesson.title}
            viewed={lesson.viewed}
            focusEmailField={focusEmailField}
          />
        ))}
      </div>
    </>
  );
};
