// AboutPage.tsx
import React from "react";
import aboutJPG from '../../assets/images/about.jpg';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10 text-center">
      {/* Banner image */}
      <img
        src={aboutJPG}
        alt="Giới thiệu BK Algorithms Club"
        className="mx-auto mb-8 rounded-lg shadow-lg max-h-[400px] w-full object-cover"
      />

      {/* Club name */}
      <h1 className="text-3xl font-bold mb-4">BK Algorithms Club</h1>

      {/* Description */}
      <p className="text-lg mb-6 max-w-3xl mx-auto text-justify">
        BK Algorithms Club là sân chơi dành cho các bạn yêu thích <strong>giải thuật, thuật toán và competitive programming</strong>. 
        Chúng tôi cùng nhau thảo luận các thuật toán từ cơ bản đến nâng cao, giải quyết các bài toán khó và chuẩn bị cho các cuộc thi lập trình trong và ngoài nước.
      </p>

      {/* Activities */}
      <div className="mb-6 max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-2">Hoạt động chính:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Thảo luận thuật toán và cấu trúc dữ liệu.</li>
          <li>Giải quyết các bài toán nâng cao từ sách và trang lập trình trực tuyến.</li>
          <li>Luyện tập và thi đấu nội bộ, chuẩn bị cho các cuộc thi như ICPC.</li>
          <li>Chia sẻ kinh nghiệm và mẹo lập trình hiệu quả.</li>
        </ul>
      </div>

    </div>
  )
};

export default AboutPage;
