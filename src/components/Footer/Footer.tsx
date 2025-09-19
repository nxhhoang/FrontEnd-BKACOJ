export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 text-sm py-6 flex flex-col items-center space-y-2">
      {/* Horizontal separator */}
      <div className="w-[150vh] h-[1px] bg-gray-300 mb-6"></div>
      {/* Contact info */}
      <div className="mt-3 text-center">
        <h2 className="text-2xl font-semibold mb-2">Liên hệ</h2>
        <p>Đại học Bách Khoa, TP. Hồ Chí Minh, Việt Nam</p>
        <p>Email: <a href="mailto:bk.algorithms.club@gmail.com" className="text-blue-600">bk.algorithms.club@gmail.com</a></p>
        <p>Facebook: <a href="https://www.facebook.com/bk.algorithms.club/" target="_blank" rel="noopener noreferrer" className="text-blue-600">BK Algorithms Club</a></p>
      </div>
    </footer>
  );
}
