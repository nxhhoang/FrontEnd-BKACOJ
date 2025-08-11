import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ContestCard from "./components/ContestCard";
import Slide from "./components/Slide";
import AboutPage from "./pages/About/AboutPage";
import ProblemSet from "./pages/Problemset/ProblemSet";
import Contest from "./pages/Contest/Contest";

function HomePage() {
  return (
    <>
      <Slide /> 
      <main className="content">
        {/* <ContestCard
          title="MarisaOJ Contest - Round #0.25"
          posted="April 7, 2025, 4:06 a.m."
          description={`The next MarisaOJ Contest will take place on Monday, 07/04/2025 at 20:00 GMT+7!
The round consists of 6 problems in ICPC format, and you've got 2 hours and 30 minutes to solve them all.
Join for fumo ▯,▯
Join the Discord server here to get notified faster!`}
          author="bkac"
        /> */}

        <ContestCard
          title="BACH KHOA CODE CHALLENGE #1 [KẾT THÚC & CÔNG BỐ GIẢI]"
          posted="Jan. 20, 2025, 3:18 a.m."
          description={`
Chúc mừng các bạn đã hoàn thành cuộc thi Bach khoa Code Challenge #1! Sau ba tiếng đồng hồ căng thẳng, với 8 bài toán thử thách, chúng ta đã tìm ra tên của 3 bạn xuất sắc nhất cuộc thi lần này, gồm:
1. Huỳnh Minh Trung — Kurashikku
2. Võ Phương Minh Nhật — nhatvpm
3. Nguyễn Xuân Huy Hoàng — hoangbinhthuong2k5

Bên cạnh đó, Ban Tổ chức cũng xin chúc mừng các bạn đã giành được “First Solve”:
Bài A: Kurashikku
Bài B: Kurashikku
Bài C: _VNND
Bài D: Kurashikku
Bài E: Kurashikku
Bài G: nhatvpm

Lời giải và hình ảnh buổi thi các bạn thể xem qua: https://furl.one/BKCC1-Editorial
Link upsolve: https://codeforces.com/gym/105733
Do đây là đợt contest đầu tay, chúng mình cũng rất cần feedback của các bạn để có thể cải thiện trong những contest tiếp theo: https://furl.one/feedbackForm-BKCC1
Một lần nữa, Google Developer Groups on Campus - HCMUT (GDGoC HCMUT) và Bach Khoa Algorithm Club (BKAC) xin gửi lời cảm ơn đến tất cả thí sinh đã tham gia, thử sức và học hỏi cùng nhau trong suốt cuộc thi. Dù kết quả thế nào, chúng mình hy vọng đây là cơ hội để các bạn rèn luyện khả năng lập trình, trau dồi tư duy thuật toán và chuẩn bị cho những kỳ thi lập trình lớn sắp tới.
Hẹn gặp lại trong những cuộc thi tiếp theo và cùng duy trì đam mê giải thuật thuật toán cùng GDGoC HCMUT & BKAC!`}
          author="bkac"
          image="/images/bkcc1.jpg"
          alt="bkcc1"
        />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/problem" element={<ProblemSet />} />
        {/* <Route path="/announcement" element={<Announcement />} /> */}
        <Route path="/contest" element={<Contest />} />
      </Routes>
    </Router>
  );
}

export default App;
