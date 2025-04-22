const Banner = () => {
  return (
    <>
      <p className="text-white font-poppins text-[35px] md:text-[60px] font-bold uppercase">
        Khóa học Forex online Đăng ký là học luôn, không cần vào Zoom
      </p>
      <div className="mt-5">
        <a className="text-white font-poppins text-xl mt-10 underline" href="#">
          Ngắn gọn - Dễ Hiểu - Hiểu rõ về Forex trong 1 giờ
        </a>
      </div>
      <div className="mt-9 md:mt-16">
        <p className="text-transparent text-[27px] md:text-[35px] font-bold bg-clip-text bg-gradient-to-r from-[#fdb508] via-[#ffe87c] to-[#fdb508] uppercase">
          Bạn sẽ Nhận được gì từ khóa học này?
        </p>
      </div>
      <div className="mt-3 md:mt-5">
        <p className="flex flex-row gap-x-2 text-white text-base md:text-xl">
          ✅ Bạn có thể vào học ngay, mọi lúc, mọi nơi mà không cần chờ lịch
          zoom, không cần đến lớp họ
        </p>
      </div>
    </>
  );
};

export default Banner;
