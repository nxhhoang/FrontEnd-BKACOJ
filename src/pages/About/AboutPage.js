// AboutPage.jsx
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="container" style={{ textAlign: "center", padding: "20px" }}>
      <img 
        src="/images/about.jpg" 
        alt="Giới thiệu" 
        style={{ maxWidth: "100%", height: "auto" }} 
      />
      <h1>Giới thiệu về chúng tôi</h1>
      <p>
        <strong>Codeforces</strong> là một nền tảng trực tuyến chuyên về lập trình thi đấu 
        (competitive programming), được nhiều lập trình viên và sinh viên trên toàn thế giới 
        sử dụng để rèn luyện kỹ năng thuật toán và giải quyết vấn đề.
      </p>

      <h2>Điểm nổi bật</h2>

      <ul>
        <li>
          <strong>Ra đời và quản lý:</strong>
          <p>Codeforces được sáng lập năm 2010 bởi Mike Mirzayanov, hiện được vận hành bởi một nhóm phát triển ở Nga và cộng đồng lập trình viên toàn cầu.</p>
        </li>

        <li>
          <strong>Hệ thống thi đấu:</strong>
          <p>Tổ chức <em>contest</em> thường xuyên (thường 1–2 lần mỗi tuần). Các cuộc thi phổ biến gồm <em>Codeforces Round</em>, <em>Educational Round</em>, và các sự kiện đặc biệt. Thời gian thi thường ngắn (khoảng 2 giờ) với 5–8 bài từ dễ đến khó.</p>
        </li>

        <li>
          <strong>Hệ thống xếp hạng:</strong>
          <p>Người dùng có <em>rating</em> và <em>rank</em> (Newbie, Pupil, Specialist, Expert, Candidate Master, Master, Grandmaster, International Grandmaster, Legendary Grandmaster). Rating thay đổi dựa trên kết quả thi so với các thí sinh khác.</p>
        </li>

        <li>
          <strong>Kho bài tập phong phú:</strong>
          <p>Mỗi bài thường có phần <em>editorial</em> (lời giải chính thức). Người dùng có thể <em>upsolve</em> (làm lại bài của contest đã kết thúc) để luyện tập.</p>
        </li>

        <li>
          <strong>Tính năng cộng đồng:</strong>
          <p>Blog và thảo luận về thuật toán, kinh nghiệm thi đấu; người dùng có thể theo dõi, nhắn tin, hoặc xem lịch sử thi đấu của nhau.</p>
        </li>

        <li>
          <strong>Ngôn ngữ hỗ trợ:</strong>
          <p>Hỗ trợ nhiều ngôn ngữ như C++, Python, Java, Kotlin, Rust, Go,... Môi trường chấm tự động đưa ra kết quả như AC, WA, TLE, MLE.</p>
        </li>
      </ul>
    </div>
  );
}
