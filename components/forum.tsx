"use client";

import { useState } from "react";

interface Notice {
  id: number;
  title: string;
  date: string;
  content?: string; // Optional for expandable content
}

const notices: Notice[] = [
  { id: 1, title: "[공지] 제 1회 온라인 코딩 경진대회 우승자 안내", date: "23.12.28", content: "제가 이겼습니다!"},
  { id: 2, title: "[공지] 스파르타코딩클럽 군교육 서비스 종료 안내", date: "23.12.19", content: "ㅠㅠ" },
  { id: 3, title: "[공지] 11월 버닝이벤트 당첨자 안내", date: "23.12.02", content: "제가 이겼습니다!" },
  { id: 4, title: "[공지] 교재 증정 이벤트 마감 안내", date: "23.11.23", content: "ㅠㅠ" },
  { id: 5, title: "[공지] 10월 버닝이벤트 당첨자 안내", date: "23.11.07", content: "straight up fire" },
  { id: 6, title: "[공지] 학습 질문 AI 답변 서비스 시범 운영 안내", date: "23.11.02", content: "wow" },
  {id: 7, title: "[공지] 개인정보 유효기간제 페이지에 따른 개인정보처리방침 변경 안내", date: "23.11.01", content: "그렇답디다"},
];

export default function Forum() {
  const [expandedNotice, setExpandedNotice] = useState<number | null>(null);

  const toggleNotice = (id: number) => {
    setExpandedNotice((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <ul>
        {notices.map((notice) => (
          <div key={notice.id}>
            <li
              className="border-b py-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleNotice(notice.id)}
            >
              <div className="flex-1">
                <span>{notice.title}</span>
              </div>
              <div className="flex-shrink-0 text-gray-500">{notice.date}</div>
              <div className="flex-shrink-0">
                {expandedNotice === notice.id ? "▲" : "▼"}
              </div>
            </li>
            {/* Notice Info (Visible when expanded) */}
            {expandedNotice === notice.id && (
              <li className="bg-gray-100 p-4 text-sm text-gray-700">
                {notice.content}
              </li>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}
