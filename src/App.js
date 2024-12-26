import Nam1 from "./image/anh1.jpg";
import Nam2 from "./image/anh2.jpg";

import cafe from "./asset/cafe.jpg";
import cafe2 from "./asset/cafe2.png";

import tuiCafe from "./asset/tuiCafe.jpg";
import ilota from "./asset/ilota.png";

import coc from "./asset/coc.png";

function App() {
  return (
    <div className="bg-[#191818] h-screen ">
      <Component2 />
      <Component3 />
    </div>
  );
}

const Component2 = () => {
  return (
    <div
      className=" h-screen w-screen  bg-center bg-cover px-96  flex flex-col  justify-around  items-center "
      style={{
        backgroundImage: `url(${cafe})`,
        // Điều chỉnh chiều cao tùy ý (có thể thay bằng auto)
      }}
    >
      <div className="text-white ">
        <div>Trụ sở Viettel</div>
        <div>06 | 01 | 2025</div>
      </div>

      <div>
        <img alt="cafe" src={cafe2} className="bg-center bg-cover" />
      </div>
      <div className="text-white px-20 text-center ">
        <div>
          Đến với Viettel&You 2025, khách mời sẽ được bước vào một hành trình
          đặc biệt, nơi mỗi hạt cà phê Việt Nam được tôn vinh qua từng giai
          đoạn: từ những nương cà phê bạt ngàn của cao nguyên Lâm Đồng, quy
          trình rang xay tinh tế, cho đến tách cà phê hoàn mỹ trên tay. Đây
          không chỉ là trải nghiệm thưởng thức mà còn là dịp để khám phá câu
          chuyện văn hóa cà phê Việt – một di sản kết nối truyền thống và hiện
          đại.
        </div>
        <div className="mt-6">
          Khách mời sẽ được tận mắt chứng kiến quy trình rang xay cà phê – một
          nghệ thuật đòi hỏi sự tỉ mỉ và am hiểu sâu sắc về hạt cà phê. Từng
          giai đoạn, từ việc lựa chọn nguyên liệu đến cách rang để tạo ra hương
          thơm đặc trưng, đều mang trong mình câu chuyện của người nông dân và
          nghệ nhân cà phê Việt. Đỉnh cao của hành trình là khi bạn được thưởng
          thức tách cà phê được pha chế bởi chính Barista Trần Quế Hân, người
          thổi hồn vào từng giọt cà phê, biến chúng thành những tác phẩm nghệ
          thuật.
        </div>
      </div>
    </div>
  );
};

const Component3 = () => {
  return (
    <div className=" h-screen w-screen  bg-black px-96    ">
      <div
        className="h-[700px] flex flex-col justify-end items-center  bg-cover "
        style={{
          backgroundImage: `url(${tuiCafe})`,
          // Điều chỉnh chiều cao tùy ý (có thể thay bằng auto)
        }}
      >
        <div>
          <img alt="ilota" src={ilota} className="bg-center bg-cover" />
        </div>
        <div className="text-white ">- Nâng niu từng hạt cà phê Việt...</div>
      </div>

      <div className="  p-10 ">
        <div className=" p-10 rounded-3xl border ">
          <div className="text-white">
            Hành trình này thêm phần đặc biệt với sự góp mặt của Ilota, thương
            hiệu nổi tiếng với những dòng sản phẩm chất lượng cao, giúp nâng tầm
            hương vị cà phê Việt. Máy móc và công nghệ từ Ilota hỗ trợ tối ưu
            trong các giai đoạn chế biến, từ rang đến pha chế, đảm bảo mang lại
            sự chuẩn xác và giữ trọn tinh hoa của từng hạt cà phê. Ilota không
            chỉ là một thương hiệu đồng hành mà còn là cầu nối giúp cà phê Việt
            chạm đến tiêu chuẩn quốc tế.
          </div>
        </div>
      </div>
    </div>
  );
};

const Anh1 = () => {
  return (
    <div
      className=" bg-center bg-cover"
      style={{
        backgroundImage: `url(${Nam1})`,
        width: "100%", // Chiều rộng tối đa theo ảnh
        height: 1000, // Điều chỉnh chiều cao tùy ý (có thể thay bằng auto)
      }}
    ></div>
  );
};

const Anh2 = () => {
  return (
    <div
      className="bg-center bg-cover "
      style={{
        backgroundImage: `url(${Nam2})`,
        width: "100%", // Điều chỉnh chiều rộng theo ý muốn
        height: 300,
        backgroundColor: "red",
        // Điều chỉnh chiều cao
      }}
    ></div>
  );
};

export default App;
