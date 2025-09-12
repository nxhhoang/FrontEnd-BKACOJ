import Slide from '../../components/Slide/Slide'
import ContestCard from '../../components/ContestCard';
import bkcc1 from '../../assets/images/bkcc1.jpg'

function Home() {
  return (
    <>
      <Slide />
      <main className="max-w-5xl mx-auto p-6">
        {/* Example ContestCard (comment lại khi chưa dùng) */}
        {/* 
        <ContestCard
          title="MarisaOJ Contest - Round #0.25"
          posted="April 7, 2025, 4:06 a.m."
          description={`The next MarisaOJ Contest will take place...`}
          author="bkac"
        />
        */}

        <ContestCard
          title="BACH KHOA CODE CHALLENGE #1 [KẾT THÚC & CÔNG BỐ GIẢI]"
          posted="Jan. 20, 2025, 3:18 a.m."
          description={`
Chúc mừng các bạn đã hoàn thành cuộc thi Bach khoa Code Challenge #1! ...
Hẹn gặp lại trong những cuộc thi tiếp theo!`}
          author="BKAC"
          image={bkcc1}
          alt="bkcc1"
        />
      </main>
    </>
  );
}

export default Home;