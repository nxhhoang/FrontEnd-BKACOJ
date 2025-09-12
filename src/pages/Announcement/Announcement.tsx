import AnnouncementCard from "../../components/AnnouncementCard";

export default function Announcement() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <AnnouncementCard
        title="🚀 Bạn đam mê lập trình thi đấu?"
        posted="07/09/2025 – 21/09/2025"
        description={`BKAC – CLB Giải Thuật Bách Khoa chính thức mở đơn tuyển thành viên cho năm học 2025 – 2026! Đây là cơ hội để bạn trở thành một phần của cộng đồng lập trình viên trẻ tại Đại học Bách Khoa – ĐHQG TP.HCM.

📅 Thời gian mở đơn: Từ Chủ nhật, 07/09/2025 đến hết Chủ nhật, 21/09/2025

💡 Khi trở thành thành viên BKAC, bạn sẽ được tham gia vào một môi trường học thuật chuyên nghiệp, nơi cùng nhau rèn luyện kỹ năng lập trình qua các buổi học, thi thử và thảo luận chuyên đề. Bên cạnh đó, bạn còn có cơ hội giao lưu với các anh chị nhiều kinh nghiệm từng tham dự các cuộc thi lớn như ICPC và Olympic Tin học Sinh viên, cũng như được đồng hành, hỗ trợ trong hành trình chinh phục những đấu trường lập trình trong và ngoài nước. Ngoài ra, khi tham gia vào các hoạt động của CLB bạn còn sẽ nhận được các ngày CTXH.

👉 Thông tin chi tiết về quyền lợi và công việc cụ thể sẽ có trong form ứng tuyển.`}
        link="https://tinyurl.com/TV-BKAC-2025"
      />
      <AnnouncementCard
        title="Đăng ký tham gia cuộc thi lập trình ACM-ICPC"
        posted="11/09/2025 – 05/10/2025"
        description={`BKAC – CLB Giải Thuật Bách Khoa chính thức mở đơn đăng ký tham gia kỳ thi ACM-ICPC cho sinh viên thuộc Trường Đại học Bách Khoa - ĐHQG TPHCM. 

📅 Thời gian mở đơn: Từ Chủ nhật, 11/09/2025 đến hết Chủ nhật, 05/10/2025

📅📅📅 [Lịch thi dự kiến của ACM-ICPC ba vòng Bắc-Trung-Nam năm nay]
⏰ Miền Nam: 11-12/10 (đơn vị tổ chức Đại học Khoa Học Tự Nhiên TPHCM)
⏰ Miền Trung: 18-19/10 (đơn vị tổ chức Đại học Bách Khoa Đà Nẵng)
⏰ Miền Bắc: 25-26/10 (đơn vị tổ chức Đại học Bách khoa Hà Nội)
📝 Thông tin chi tiết vui lòng xem thêm tại https://tinyurl.com/HCMUT-ICPC-2025-thong-tin.
Form đăng ký cá nhân: https://tinyurl.com/ICPC-BKAC-2025-ca-nhan

🌟 Khi tham gia đủ 3 vòng, bạn sẽ được cộng 5 điểm rèn luyện.
👉 Nếu bạn đã lập được team, hãy vui lòng đăng ký qua link sau:`}
        link="https://tinyurl.com/BKAC-ICPC-2025"
      />
    </div>
    
  );
}
