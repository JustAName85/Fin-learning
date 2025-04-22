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
      time: "15:48",
    },
    {
      id: 2,
      title: "Trader có tác động lên cung cầu của thị trường Forex không?",
      time: "6:28",
    },
    {
      id: 3,
      title: "Tiền nạp vào sàn sẽ đi đâu? Bạn đang thực sự giao dịch với ai?",
      time: "5:35",
    },
    { id: 4, title: "Sàn Forex làm gì với tiền của bạn?", time: "6:03" },
    {
      id: 5,
      title: "Những chiêu trò thường gặp của sàn và môi giới Forex",
      time: "3:48",
    },
    {
      id: 6,
      title: "Lợi nhuận tiềm năng và các rủi ro khi tham gia thị trường",
      time: "8:38",
    },
    {
      id: 7,
      title: "Bí quyết để chiến thắng lâu dài trong giao dịch Forex",
      time: "30:55",
    },
    {
      id: 8,
      title: "Bản đồ thành công trong giao dịch Forex",
      time: "15:25",
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
            time={lesson.time}
            focusEmailField={focusEmailField}
          />
        ))}
      </div>
    </>
  );
};
