import "../../index.css";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import section from "../../assets/image/section.png";
import section1 from "../../assets/image/section1.png";
import { Link } from "react-router-dom";
import { Card } from "../../fakeApi/Card";
import { product } from "../../fakeApi/Product";
import footerBG from "../../assets/image/prod5.png";
const Home = () => {
  const cvRupiah = (number) => {
    return number.toLocaleString("id-ID");
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="container mx-auto px-10 md:px-20 bg-svg bg-gradient-to-br from-blue-700 to-blue-400 min-h-screen">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-desk sm:grid-desk  md:mb-[96px] ">
          <div className="text-center md:text-start md:mt-[253px] mt-[130px] text-base text-slate-100 max-w-xl">
            <h3 className=" text-zinc-200 font-semibold text-xl">
              Sedang Mencari Inovasi Baru? Yuk Baca Sampe Bawah
            </h3>
            <h2 className="mb-[45px] text-4xl md:text-5xl font-bold">
              Kami siap bantu <br />
              <span className="text-yellow-400">Digitalisasi</span> usaha Anda
            </h2>
            <p className="max-w-xl  text-base md:text-lg">
              Tahun {currentYear} sangat WAJIB membangun
              <span className="font-bold"> Asset Digital</span> seperti
              Template, Software, List Building, Produk Whitelabel & PLR. untuk
              menunjang
              <span className="font-bold"> usaha di Lingkungan Warganet. </span>
              Sudah SIAP?
            </p>
            <div className="mt-[42px] flex justify-center md:justify-start text-center">
              <div>
                <button className="flex items-center  rounded-full bg-cyan-400 py-2 px-5 mb-5">
                  <p className="mr-3 text-base font-bold">TENTANG KAMI</p>
                  <FaArrowDown />
                </button>
                <button className="flex items-center rounded-full bg-cyan-400 py-2 px-5">
                  <RiAccountCircleFill className="text-base md:text-lg mr-1" />
                  <p className="mr-3 text-base font-bold">
                    LOGIN KE MEMBER AREA
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="md:mt-[300px] mt-10">
            <img
              src={section1}
              alt="deskripsi gambar"
              className="rounded-tl-[300px] rounded-br-[100px] rounded-bl-[100px] rounded-tr-[100px] "
            />
          </div>
        </div>
      </div>

      {/* sect2  */}
      <div className="container mx-auto px-10 md:px-20 bg-sect bg-gradient-to-br from-blue-700 to-blue-400 min-h-screen mt-9">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-desk sm:grid-desk md:mb-[96px] md:pt-36">
          <div className="mt-[10px] order-2 sm:order-1">
            <img
              src={section}
              alt="deskripsi gambar"
              className="rounded-tl-[100px] rounded-br-[300px] rounded-bl-[100px] rounded-tr-[100px] "
            />
          </div>
          <div className="text-center md:text-start text-base text-stone-500 max-w-xl md:ml-7 mt-20 order-1 sm:order-2">
            <h3 className="md:font-semibold text-md md:text-xl  ">
              PROFIL SINGKAT KAMI
            </h3>
            <h2 className="mb-[45px] text-2xl md:text-5xl font-bold text-blue-500">
              Kami Membantu <br />
              Pengusaha HIJRAH Ke <br />
              Dunia Maya
            </h2>
            <p className="max-w-lg text-base md:text-lg md:my-0 my-5">
              Sejak tahun 2014 kami telah membuatkan website, toko online dan
              layanan konsultasi digital untuk UMKM, Kampus, Bimbel, Fashion,
              Portal Berita, Yayasan, Sekolah, Sistem PPDB, hingga ke perusahaan
              Internasional.
            </p>
            <div className="mt-[42px] flex justify-center md:justify-start">
              <button className="flex items-center  rounded-full bg-cyan-400 py-2 px-5 mb-5">
                <p className="mr-3 text-base text-slate-100 font-bold">
                  PROFILE LENGKAP
                </p>
                <FaArrowRight className="text-slate-100" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* sect 3  */}
      <div className="container mx-auto px-10 md:px-20 ">
        <div className="md:flex  justify-between items-center mb-[96px] pt-36 w-full">
          <div className="text-center  md:text-left text-stone-500 ">
            <h3 className="font-semibold text-xl">
              WE ARE CREATIVE DIGITAL AGENCY
            </h3>
            <h2 className="mb-[45px] text-4xl md:text-5xl font-bold text-slate-700 max-w-2xl">
              Apa Yang Bisa Kami Bantu Untuk Anda?
            </h2>
          </div>
          <button className="flex items-center rounded-full bg-indigo-700 py-3 px-5 mb-5">
            <p className="mr-3 text-base text-slate-100 md:font-bold">
              LAYANAN YANG KAMI SEDIAKAN
            </p>
            <FaArrowRight className="text-slate-100" />
          </button>
        </div>
      </div>

      {/* card */}
      <div className="container px-10 md:px-20 mt-9">
        <div className="grid md:grid-cols-3  gap-8">
          {Card.map((data, index) => (
            <div
              className="shadow-lg rounded-tl-[20px] rounded-bl-[70px] rounded-tr-[20px] rounded-br-[20px] "
              key={index}
            >
              <div className="p-10">
                <img src={data.icon} alt="" className="w-16" />

                <h3 className="mt-8 font-semibold  text-base md:text-lg text-slate-600">
                  {data.title}
                </h3>
                <p className="my-5 text-slate-500">{data.desc}</p>
                <Link to={data.link}>
                  <div className="flex items-center text-blue-600">
                    <p className="mr-3 font-semibold">SELENGKAP NYA</p>
                    <FaArrowRight />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* card 2 */}
      <div className="text-center text-stone-500 mt-[168px] ">
        <h3 className="font-semibold text-xl">Ayo Segera Miliki</h3>
        <h2 className="mb-[45px] text-4xl md:text-5xl font-bold text-blue-700 ">
          PRODUK DIGITAL
        </h2>
      </div>
      {/* product */}
      <div className="container px-10 md:px-20 grid md:grid-cols-4 gap-8">
        {product.map((item, index) => (
          <div key={index}>
            <div className="max-w-md">
              <img src={item.img} alt="" className="rounded-md shadow-lg" />
            </div>
            <h1 className="my-4">{item.name}</h1>
            <div className="flex">
              <p className="line-through text-red-200 mr-3">
                Rp{cvRupiah(item.discount)}
              </p>
              <p className="text-red-600">Rp{cvRupiah(item.price)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className=" container mt-32 flex justify-center">
        <button className="flex items-center rounded-full shadow-lg text-cyan-500  bg-[#ffffff] hover:bg-cyan-400  hover:text-slate-100 py-3 px-7 md:mb-24 max-w-xs md:max-w-xl ">
          <p className="mr-3 text-base font-bold">
            MAU LIHAT PRODUK LAIN? YUK KE TOKO
          </p>
          <FaArrowRight />
        </button>
      </div>

      {/* footer */}
      <div className="container mx-auto px-10 md:px-20 bg-svg2 bg-gradient-to-br from-blue-700 to-blue-400 h-auto">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-desk sm:grid-desk pt-40">
          <div className="text-center md:text-start text-base text-slate-100 max-w-xl pt-44">
            <h2 className="mb-[45px] text-4xl md:text-5xl font-bold">
              PAKET USAHA UNDANGAN DIGITAL
            </h2>
            <p className="max-w-xl text-base md:text-lg">
              Buka Jasa Pembuatan Undangan Versi Website Tanpa Pusing Setting
              Domain-Hosting? BISA.. Bikin Jasa Pembuatan Video Cukup Pake
              PowerPoint Tapi Hasilnya Mewah? BISA BGT..!!!
            </p>
            <div className="mt-[42px]">
              <button className="flex items-center rounded-full bg-cyan-400 py-2 px-5 mb-5">
                <p className="mr-3 text-base font-bold">
                  INFO LENGKAP PAKET USAHA
                </p>
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="">
            <img
              src={footerBG}
              alt="deskripsi gambar"
              className="rounded-tl-[300px] rounded-br-[100px] rounded-bl-[100px] rounded-tr-[100px] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
