import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ValuesSection from "@/components/valueSection";
import Image from "next/image";
import CountUp from "@/components/countup";
const page = () => {
  const clientLogos = [
    "/aboutus/1.png",
    "/aboutus/2.png",
    "/aboutus/3.svg",
    "/aboutus/4.svg",
    "/aboutus/5.svg",
    "/aboutus/6.svg",
    "/aboutus/7.svg",
    "/aboutus/8.svg",
    "/aboutus/9.svg",
    "/aboutus/10.svg",
    "/aboutus/11.svg",
    "/aboutus/12.svg",
    "/aboutus/13.svg",
    "/aboutus/14.svg",
    "/aboutus/15.svg",
    "/aboutus/16.svg",
    "/aboutus/17.svg",
    "/aboutus/18.png",
    "/aboutus/19.svg",
    "/aboutus/20.svg",
    "/aboutus/21.svg",
    "/aboutus/22.svg",
    "/aboutus/23.svg",
    "/aboutus/24.png",
  ];
  return (
    <>
      <Header />
      <section className="overflow-hidden lg:pt-[150px] pt-[100px] lg:px-[80px]  px-[20px]">
        <div className="row justify-between mb-4">
          <div className="col-lg-5">
            <p className="lg:text-[48px] text-[20px] leading-[25px] text-[#1B1B1C] font-[bb] lg:leading-[50px]">
              Our Story
            </p>
            <p className="lg:text-[16px] text-[14px] leading-tight text-[#141411]  ">
              We craft timeless architectural experiences that blend innovation,
              functionality, and aesthetics. From concept to execution, we bring
              visions to life with precision and creativity.
            </p>
          </div>
          <div className="col-lg-5">
            <Image
              src="/about1.png"
              alt="img"
              height={1080}
              width={1080}
              className=""
            />
          </div>
        </div>
      </section>
      <section className=" lg:pt-[80px] pt-[40px] lg:px-[80px]  px-[20px]">
        <div className="row items-end">
          <div className="col-lg-6 lg:sticky lg:top-[100px] ">
            <div className="col-lg-8">
              <p className="">HOW IT STARTED</p>
              <p className="lg:text-[29px] text-[14px] font-[bb] leading-tight text-[#141411]">
                Welcome to Dazzle Exhibitions and Events Since 2010
              </p>
            </div>
            <div className="mt-4">
              <Image
                src="/about2.png"
                alt="img"
                height={1080}
                width={1080}
                className="w-full "
              />
            </div>
          </div>
          <div className="col-lg-6">
            <p className="lg:text-[16px] text-[14px] leading-tight text-[#141411]  ">
              We take your ideas and concepts and turn them into tangible
              realities. Our process begins with concept development, then moves
              on to our creative department for designing, creating, and
              building the stand. Our team utilizes the latest technology and
              quality standards to exceed expectations. With over 12 years of
              experience providing exhibition stand services in India, we are
              dedicated to revolutionizing the way you present your business
              through trade shows, product launches, fairs, and exhibitions. We
              are a true partner in the exhibition industry, offering a wide
              range of services including Custom-designed booths, Mezzanine,
              Modular-designed booths, Portable Stands and Country Pavilions.
            </p>
            <p className="lg:text-[16px] text-[14px] leading-tight text-[#141411]  ">
              Dazzle Exhibitions & Events is a top-notch company in Ghaziabad,
              Uttar Pradesh, India that specializes in designing, building, and
              managing tradeshow booths. From initial design to final
              construction, we offer comprehensive tradeshow booth services and
              handle all aspects of booth management. As an experienced
              exhibition stand builder in India, we provide end-to-end solutions
              for our clients' exhibition needs. If exhibiting with the most
              creative and exclusive exhibition stands in India is your motive,
              you can rely on us since we acquire an in-house production
              facility that eases the exhibition process while ensuring quality
              work.
            </p>
            <div className="mt-4">
              <Image
                src="/about3.png"
                alt="img"
                height={1080}
                width={1080}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden lg:pt-[80px] pt-[40px] lg:px-[80px]  px-[20px]">
        <div className="row  justify-center   ">
          <div className="col-lg-3 col-6  pb-4">
            <div className="flex items-center gap-2 text-[#141414]">
              <CountUp
                to={200}
                duration={3}
                separator=","
                className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bb]"
              />
              <span className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bb]">
                +
              </span>
            </div>

            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]    lg:pt-[10px] pt-[10px] uppercase text-[#545353]">
              Client&apos;s
            </p>
          </div>

          <div className="col-lg-3 col-6  pb-4 ">
            <div className="flex lg:justify-center gap-2">
              <CountUp
                to={1}
                duration={1}
                separator=","
                className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bb]"
              />
              <span className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bb]">
                K+
              </span>
            </div>

            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]    lg:pt-[10px] pt-[10px] uppercase text-[#545353] lg:text-center">
              Projects
            </p>
          </div>

          <div className="col-lg-3  col-6  pb-4 ">
            <div className="flex lg:justify-center ">
              <span className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bb]">
                0
              </span>
              <CountUp
                to={7}
                duration={3}
                separator=","
                className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bb]"
              />
            </div>

            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pt-[10px] pt-[10px] uppercase text-[#545353] lg:text-center">
              CONTINENTS
            </p>
          </div>

          <div className="col-lg-3  col-6  pb-4 ">
            <div className="flex lg:justify-end gap-2">
              <CountUp
                to={500}
                duration={2}
                separator=","
                className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bb]"
              />
              <span className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bb]">
                +
              </span>
            </div>

            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]    lg:pt-[10px] pt-[10px] uppercase text-[#545353] lg:text-end lg:pr-10">
              EXHIBITIONS
            </p>
          </div>
        </div>
      </section>
      <section className="overflow-hidden lg:pt-[80px] pt-[40px] lg:px-[80px]  px-[20px] bg-[#000]">
        <div className="row items-center">
          <div className="col-lg-7">
            <Image
              src="/about4.png"
              alt="img"
              height={1080}
              width={1080}
              className=""
            />
          </div>
          <div className="col-lg-5">
            <p className="text-[20px] font-[bb] leading tight text-[#F8F8F5CC]">
              OUR MISSION
            </p>
            <p className="text-[16px]  leading tight text-[#F8F8F5CC]">
              To craft exhibition experiences that seamlessly blend creativity
              and functionality, elevating the presence of every brand we
              collaborate with. At Dazzle Exhibitions & Events, we push the
              boundaries of stand design, embracing innovation and
              sustainability to create lasting impressions at every event we
              undertake.
            </p>
            <Image
              src="/Karan Adlakha.png"
              alt="img"
              height={1080}
              width={1080}
              className="w-40 h-20"
            />

            <p className="p-0 m-0 mt-4 text-[#FFFFFF80]">CEO, Dazzle</p>
            <p className="text-[#FFFFFF80]"> exhibitions and events</p>
          </div>
        </div>
      </section>
      <section className="overflow-hidden lg:pt-[80px] pt-[40px]  ">
        <div className="row items-center">
          <div className="col-lg-8">
            <div className="col-lg-9 ">
              <p className="text-[20px] text-[#000000] font-[bb] lg:px-[80px] ">
                OUR VISION
              </p>
              <p className="lg:px-[80px] text-[14px] ">
                We envision a world where exhibitions go beyond displays —
                becoming powerful experiences that inspire, engage, and connect
                people across industries and cultures. At Dazzle Exhibitions &
                Events, our vision is to redefine global exhibition design by
                blending creativity, innovation, and sustainability, leaving a
                lasting impression on every brand we showcase and every audience
                we engage.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <Image
              src="/about5.png"
              alt="img"
              height={1080}
              width={1080}
              className=""
            />
          </div>
        </div>
      </section>
      <section className="overflow-hidden ">
        <ValuesSection />
      </section>

      <section className="overflow-hidden py-20 px-6 md:px-20">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-xs tracking-wide text-[#000000] mb-2">
            BRAND COLLABORATIONS
          </p>
          <h2 className="text-2xl font-[bb] mb-2">
            ESTEEMED CLIENTS OVER THE YEARS
          </h2>
          <p className="text-gray-600 max-w-xl text-sm leading-relaxed">
            We&apos;re honored to have partnered with these reputable
            organizations on impactful events projects through the decades.
          </p>
        </div>

        {/* Logo Grid - 7 per row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
          {clientLogos.map((file, index) => (
            <div
              key={index}
              className=" bg-white flex items-center justify-center h-24"
            >
              <img
                src={`${file}`}
                alt={`${index + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden  border-b ">
        <div className="bg-black shadow-md">
          <p className="pt-10 text-center text-[40px] font-[bb] text-[#FFFFFF] max-w-2xl mx-auto uppercase! leading-tight">
            We are exited to learn more about your project
          </p>
          <p className="text-center text-[20px] font-[md] text-[#FFFFFF] max-w-lg mx-auto  leading-tight p-0 m-0">
            Become a member now and start your journey toward mastering the
            perfect swing!
          </p>
          <div className="flex justify-center pt-4 pb-3 ">
            <button className="flex items-center border text-white !rounded-full gap-2  py-1 mb-4 pl-3  pr-1  ">
              GET IN TOUCH{" "}
              <Image
                src="/svg/scroll/Arrows Wrapper.svg"
                alt="arrow"
                width={1080}
                height={1080}
                className="w-6 h-6 "
              />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
