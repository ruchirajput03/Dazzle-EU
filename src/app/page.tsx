"use client";
import Image from "next/image";
import Link from "next/link";
import { Minus } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/layout/footer";
import CountUp from "@/components/countup";
import Animation from "@/components/animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const page = () => {
  const [active, setActive] = useState("brief");

  const toggle = (name: any) => {
    setActive(active === name ? "" : name);
  };
  return (
    <>
      <div className="lg:pt-[150px] pt-[100px]  ">
        <section className="lg:px-[80px]  px-[20px]">
          <div className="row ">
            <div className="col-xl-11 mb-4 ">
              <p className="lg:text-[18px] text-[#1B1B1C]">
                Building a Better Tomorrow for Building Owners
              </p>
              <p className="lg:text-[48px] text-[20px] leading-[25px] text-[#1B1B1C] font-[bb] lg:leading-[50px]">
                We blend art & science to create Exhibitions and events magic.{" "}
              </p>
            </div>
          </div>
        </section>
        <section className="lg:px-[80px]  px-[20px]">
          <div className="row justify-between mb-4 ">
            <div className="col-lg-5 space-y-6">
              <div className="col-lg-10 lg:mt-8">
                <p className="text-[#1B1B1C] lg:text-[18px] text-[14px]">
                  Discover the art of Events with Dazzle, where every space
                  tells a story and every detail is crafted to perfection. Our
                  team of dedicated designers and teams is here to turn your
                  dreams into reality.
                </p>
                <button className="border hover:bg-[#000] hover:text-[#fff] border-[#1B1B1C]! px-4! py-1! text-sm text-[#1B1B1C] uppercase!">
                  Start Building
                </button>
              </div>
            </div>
            <div className="col-lg-6 mb-4 mt-4">
              <Image
                src="/Rectangle 1.png"
                width={1080}
                height={1080}
                alt="Image"
                className=""
              />
            </div>
          </div>
        </section>
        <section className="lg:mt-[100px] bg-[#F6F6F6] pb-10 ">
          <div className="lg:px-[80px]  px-[20px] pt-4 ">
            <div className="flex items-center">
              <p className="text-[18px] mb-3 text-[#1B1B1C] flex gap-1 tracking-wide p-0 m-0 items-center">
                <Image
                  src="/Line.svg"
                  alt="Line"
                  width={1080}
                  height={1080}
                  className="w-[50px] h-[7px]"
                />
                About Us
              </p>
            </div>

            <h2 className="text-4xl font-bold text-[#1B1B1C]! font-[bb] leading-tight mb-3">
              Where Passion Meets <br />
              Expertise!
            </h2>

            <p className="text-[24px] text-[#1B1B1C] mb-10">
              Transforming ideas into Unforgettable Event Experiences
            </p>

            <div className="row  ">
              <div className="col-lg-6 lg:mb-10 ">
                <p className="text-[#565656] leading-tighr mb-8 font-[md]">
                  We always strive to provide premium quality materials and
                  solutions for the best exhibition booth design and thus ensure
                  that our services are visually appealing and have a strong
                  foundation and structure that can endure sudden weather
                  conditions or any unforeseen glitches. Moreover, our team of
                  dedicated project managers ensure that the individual design
                  of the exhibition stand becomes a reality for a first-class
                  experience for our eminent clients and their target customers.
                  Our team will design to budget, working within your deadlines,
                  creating the perfect sales environment for your team and your
                  business.
                </p>

                <img
                  src="/Rectangle3.png"
                  alt="Exhibition"
                  className="rounded-lg w-full shadow-md mb-4"
                />
              </div>

              <div className="col-lg-6 mb-4 ">
                <img
                  src="/Rectangle2.png"
                  alt="Booth"
                  className="rounded-lg w-full shadow-md mb-6"
                />

                <p className="text-[#565656] leading-tight mb-4 font-[md]">
                  Dazzle Exhibitions & Events is a globally recognized brand
                  delivering customized and innovative exhibition stand design
                  and fabrication services. As a leading exhibition stand design
                  and build company, we offer superior-quality materials,
                  creative designs, and end-to-end solutions for exhibitions
                  worldwide.
                </p>

                <p className="text-[#565656] leading-tight mb-4 font-[md]">
                  Our expert designers understand your business goals to craft
                  stands that attract attention and deliver measurable results.
                  From concept to installation, we provide a complete one-stop
                  solution for exhibition design, fabrication, branding, and
                  project management.
                </p>

                <p className="text-[#565656] leading-tight mb-6 font-[md]">
                  With extensive experience in exhibition booth design, project
                  management, and branding, Dazzle Exhibitions & Events ensures
                  your presence stands out and supports your business
                  objectives—making us your trusted partner for global
                  exhibition success.
                </p>

                <button className="border border-[#1B1B1C]! px-6 py-2 text-[#1B1B1C] text-sm tracking-wide hover:bg-black hover:text-white transition">
                  MORE ABOUT
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:px-[80px] px-[20px] lg:pt-20 pt-10">
          <div className="row items-center justify-center mb-4">
            <div className="col-lg-6 mb-4">
              <p className="text-[18px] mb-3 text-[#1B1B1C] flex gap-1 tracking-wide p-0 m-0 items-center">
                <Image
                  src="/Line.svg"
                  alt="Line"
                  width={1080}
                  height={1080}
                  className="w-[50px] h-[7px]"
                />
                Our Services
              </p>
              <p className="text-xl lg:text-5xl font-bold text-[#1B1B1C] font-[bb] leading-tight mb-6 max-w-sm">
                Unleashing the Artistry of Dazzle Services
              </p>
              <p className="text-[16px] text-gray-700 leading-fit max-w-sm">
                At Dazzle, we specialize in creating exceptional architectural
                and Events solutions tailored to your lifestyle. Our services
                redefine spaces, blending innovation with timeless elegance.
              </p>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="col-lg-12">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value="item-1"
                    className="border-b-[#000] data-[state=open]:border  data-[state=open]:px-4 data-[state=open]:mb-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="w-full">
                        <span className="text-sm text-[#292929] mt-1">01</span>
                        <div className="flex gap-2 items-center w-full pl-5">
                          <p className="text-[22px] font-[bb] text-[#1B1B1C] p-0 m-0  ">
                            Mezzanine | Double Decker Stands
                          </p>
                          <Image
                            src="/Arrows Wrapper.svg"
                            alt="Minus"
                            width={1080}
                            height={1080}
                            className="w-8 h-8 "
                          />
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-[12px] text-[#292929] pb-6 pl-5 pt-0">
                      Dazzle Exhibitions & Events is a leading double decker
                      exhibition stand design and build company, offering
                      innovative and efficient solutions for trade shows and
                      exhibitions worldwide. Our custom double decker stands are
                      designed for easy installation, smart space utilization,
                      and maximum visual impact. By expanding your display area,
                      these multi-level stands enhance brand visibility, create
                      premium meeting spaces, and elevate your product showcase
                      at any event.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-2"
                    className="border-b-[#000] data-[state=open]:border  data-[state=open]:px-4 data-[state=open]:mb-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <div className=" w-full">
                        <span className="text-sm text-[#292929] mt-1">02</span>
                        <div className="flex gap-2 items-center w-full pl-5">
                          <p className="text-[22px] font-[bb] text-[#1B1B1C] p-0 m-0 uppercase! ">
                            MODULAR Stands
                          </p>
                          <Image
                            src="/Arrows Wrapper.svg"
                            alt="Minus"
                            width={1080}
                            height={1080}
                            className="w-8 h-8 "
                          />
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-[12px] text-[#292929] pb-6 pl-5 pt-0">
                      Content for modular stands...
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-3"
                    className="border-b-[#000] data-[state=open]:border  data-[state=open]:px-4 data-[state=open]:mb-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <div className=" w-full">
                        <span className="text-sm text-[#292929] mt-1">03</span>
                        <div className="flex gap-2 items-center w-full pl-5">
                          <p className="text-[22px] font-[bb] text-[#1B1B1C] p-0 m-0 uppercase! ">
                            Custom Stands
                          </p>
                          <Image
                            src="/Arrows Wrapper.svg"
                            alt="Minus"
                            width={1080}
                            height={1080}
                            className="w-8 h-8 "
                          />
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-[12px] text-[#292929] pb-6 pl-5 pt-0">
                      Content for modular stands...
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-4"
                    className="border-b-[#000] data-[state=open]:border  data-[state=open]:px-4 data-[state=open]:mb-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <div className=" w-full">
                        <span className="text-sm text-[#292929] mt-1">04</span>
                        <div className="flex gap-2 items-center w-full pl-5">
                          <p className="text-[22px] font-[bb] text-[#1B1B1C] p-0 m-0 uppercase! ">
                            Portable Stands
                          </p>
                          <Image
                            src="/Arrows Wrapper.svg"
                            alt="Minus"
                            width={1080}
                            height={1080}
                            className="w-8 h-8 "
                          />
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-[12px] text-[#292929] pb-6 pl-5 pt-0">
                      Content for modular stands...
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-5"
                    className="border-b-[#000] data-[state=open]:border  data-[state=open]:px-4 data-[state=open]:mb-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <div className=" w-full">
                        <span className="text-sm text-[#292929] mt-1">05</span>
                        <div className="flex gap-2 items-center w-full pl-5">
                          <p className="text-[22px] font-[bb] text-[#1B1B1C] p-0 m-0 uppercase! ">
                            Country Pavilion
                          </p>
                          <Image
                            src="/Arrows Wrapper.svg"
                            alt="Minus"
                            width={1080}
                            height={1080}
                            className="w-8 h-8 "
                          />
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-[12px] text-[#292929] pb-6 pl-5 pt-0">
                      Content for modular stands...
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:px-20 px-5 pt-20">
          <div className="lg:relative">
         
            <div className="w-full">
              <img
                src="/Rectangle4.png"
                alt="Rectangle4"
                className="w-full h-auto object-cover"
              />
            </div>

        
            <div
              className="lg:absolute lg:left-1/2 lg:transform -translate-x-1/2 w-full px-4"
              style={{ top: "60%" }}
            >
              <div className="bg-white backdrop-blur-md p-8  max-w-5xl mx-auto shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* LEFT SIDE — ACCORDION */}
                  <div className="">
                    <p className="text-[18px] mb-3 text-[#1B1B1C] flex gap-1 tracking-wide p-0 m-0 items-center">
                      <Image
                        src="/Line.svg"
                        alt="Line"
                        width={1080}
                        height={1080}
                        className="w-[50px] h-[7px]"
                      />
                      Work Our Process
                    </p>
                    <p className="text-[22px] font-[bb] leading-tight mb-4">
                      Dazzle is here to guide you through every step of your
                      exhibition journey.
                    </p>

                    <div className="space-y-2">
                      {/* ITEM 1 */}
                      <div className="border-b">
                        <div className="flex gap-1 items-center"></div>

                        <button
                          className={`w-full flex gap-2 text-left  px-4 py-3  ${
                            active !== "brief" ? "bg-white" : "bg-white"
                          }`}
                          onClick={() => toggle("brief")}
                        >
                          {" "}
                          <Image
                            src="/svg/1.svg"
                            alt="svg"
                            height={1080}
                            width={1080}
                            className="w-[20px]"
                          />
                          <span className="text-[#121212] font-[bb]">
                            Brief
                          </span>
                        </button>
                        {active === "brief" && (
                          <div className="px-4 py-3 text-sm text-gray-700">
                            We listen and gather information from the client. We
                            research and investigate concepts to understand the
                            business goal.
                          </div>
                        )}
                      </div>

                      {/* ITEM 2 */}
                      <div className="border-b">
                        <button
                          className={`w-full flex gap-2 text-left  px-4 py-3  ${
                            active !== "visuals" ? "bg-white" : "bg-white"
                          }`}
                          onClick={() => toggle("visuals")}
                        >
                          <Image
                            src="/svg/2.svg"
                            alt="svg"
                            height={1080}
                            width={1080}
                            className="w-[20px]"
                          />
                          <span className="text-[#121212] font-[bb]">
                            3D Visuals
                          </span>
                        </button>
                        {active === "visuals" && (
                          <div className="px-4 py-3 text-sm text-gray-700">
                            We develop 3D renderings based on your brand and
                            project goals.
                          </div>
                        )}
                      </div>

                      {/* ITEM 3 */}
                      <div className="border-b">
                        <button
                          className={`w-full flex gap-2 text-left px-4 py-3 font-[md] ${
                            active !== "feedback" ? "bg-white" : "bg-white"
                          }`}
                          onClick={() => toggle("feedback")}
                        >
                          <Image
                            src="/svg/3.svg"
                            alt="svg"
                            height={1080}
                            width={1080}
                            className="w-[20px]"
                          />
                          <span className="text-[#121212] font-[bb]">
                            Feedback
                          </span>
                        </button>
                        {active === "feedback" && (
                          <div className="px-4 py-3 text-sm text-gray-700">
                            We refine and adjust designs based on your feedback.
                          </div>
                        )}
                      </div>

                      {/* ITEM 4 */}
                      <div className="border-b">
                        <button
                          className={` w-full flex gap-2 flex gap-2 text-left px-4 py-3 font-[md] ${
                            active !== "build" ? "bg-white" : "bg-white"
                          }`}
                          onClick={() => toggle("build")}
                        >
                          <Image
                            src="/svg/4.svg"
                            alt="svg"
                            height={1080}
                            width={1080}
                            className="w-[20px]"
                          />
                          <span className="text-[#121212] font-[bb]">
                            Build & Install
                          </span>
                        </button>
                        {active === "build" && (
                          <div className="px-4 py-3 text-sm text-gray-700">
                            Our production team builds and installs the final
                            structure.
                          </div>
                        )}
                      </div>

                      {/* ITEM 5 */}
                      <div className="border-b">
                        <button
                          className={` w-full flex gap-2 text-left px-4 py-3 font-[md] ${
                            active !== "supervision" ? "bg-white" : "bg-white"
                          }`}
                          onClick={() => toggle("supervision")}
                        >
                          <Image
                            src="/svg/5.svg"
                            alt="svg"
                            height={1080}
                            width={1080}
                            className="w-[20px]"
                          />
                          <span className="text-[#121212] font-[bb]">
                            Onsite Supervision
                          </span>
                        </button>
                        {active === "supervision" && (
                          <div className="px-4 py-3 text-sm text-gray-700">
                            Our team ensures everything is executed perfectly
                            during setup.
                          </div>
                        )}
                      </div>

                      {/* ITEM 6 */}
                      <div className="border-b">
                        <button
                          className={` w-full flex gap-2 text-left px-4 py-3 font-[md] ${
                            active !== "dismantle" ? "bg-white" : "bg-white"
                          }`}
                          onClick={() => toggle("dismantle")}
                        >
                          <Image
                            src="/svg/6.svg"
                            alt="svg"
                            height={1080}
                            width={1080}
                            className="w-[20px]"
                          />
                          <span className="text-[#121212] font-[bb]">
                            Dismantle & Storage
                          </span>
                        </button>
                        {active === "dismantle" && (
                          <div className="px-4 py-3 text-sm text-gray-700">
                            Once the event is complete, we dismantle and store
                            materials safely.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT SIDE — IMAGE */}
                  <div className="flex justify-center items-center">
                    <img
                      src="/Rectangle5.png"
                      alt="Work process illustration"
                      className=" w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

     
          <div className="h-[500px] md:h-[400px]"></div>
        </section>
        <section className="lg:px-20 px-5 lg:pt-40">
          <div className="row mb-4">
            <div className="col-lg-6">
              <p className="text-[18px]  text-[#1B1B1C]  tracking-wide p-0 m-0 items-center">
                Why Choose Us?
              </p>
              <p className="text-4xl lg:text-[40px] font-bold text-[#1B1B1C] font-[bb] leading-tight mb-6 max-w-lg">
                Numbers that speak for themselves.
              </p>
              <p className="text-[16px] text-gray-700 leading-tight max-w-sm">
                Our work goes beyond beautiful events — it&apos;s about
                delivering results our clients can see and feel.
              </p>
              <button className="rounded-full! text-black hover:text-white hover:bg-black bg-white border border-[#000]! px-4 py-2 uppercase!">
                READ more
              </button>
            </div>
            <div className="col-lg-6">
              <p className="text-[14px] text-[#121212] leading-tight">
                Dazzle Exhibitions & Events is one of the best exhibition stand
                builders in India, specializing in custom, modular, country
                pavilion, and double-decker exhibition stands. With over 10
                years of experience, we provide end-to-end services including
                design, fabrication, installation, dismantling, storage, and
                logistics — all tailored to your brand guidelines and
                objectives.
              </p>
              <p className="text-[14px] text-[#121212] leading-tight">
              Our expert team ensures every stand is meticulously planned, visually impactful, and delivered on time. From concept to completion, we handle every detail, ensuring a smooth and stress-free exhibiting experience.
              </p>
              <p className="text-[14px] text-[#121212] leading-tight">
              Based in Sahibabad, Ghaziabad, we serve both domestic and international clients, offering innovative, space-efficient, and cost-effective exhibition stand solutions that enhance visitor engagement and brand presence.
              </p>
            </div>
          </div>
          <div className="row  justify-center lg:pt-[40px] pt-[40px]  ">
                                    <div className="col-lg-3 col-6  pb-4">
                                        <div className="flex items-center gap-2 text-[#141414]">
                                            <CountUp to={200} duration={3} separator=","
                                                className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bb]"
                                            />
                                            <span className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bb]">+</span>
                                        </div>
 
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]    lg:pt-[10px] pt-[10px] uppercase text-[#545353]">Client&apos;s</p>
 
                                    </div>
 
                                    <div className="col-lg-3 col-6  pb-4 ">
                                        <div className="flex lg:justify-center gap-2">
                                            <CountUp to={1} duration={1} separator=","
                                                className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bb]"
                                            />
                                            <span className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bb]">K+</span>
                                        </div>
 
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]    lg:pt-[10px] pt-[10px] uppercase text-[#545353] lg:text-center">Projects</p>
 
                                    </div>
 
                                    <div className="col-lg-3  col-6  pb-4 ">
                                        <div className="flex lg:justify-center ">
 
                                            <span className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bb]">0</span>
                                            <CountUp to={7} duration={3} separator=","
                                                className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bb]"
                                            />
                                        </div>
 
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pt-[10px] pt-[10px] uppercase text-[#545353] lg:text-center">CONTINENTS</p>
 
                                    </div>
 
                                    <div className="col-lg-3  col-6  pb-4 ">
                                        <div className="flex lg:justify-end gap-2">
                                            <CountUp to={500} duration={2} separator=","
                                                className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bb]"
                                            />
                                            <span className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bb]">+</span>
                                        </div>
 
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]    lg:pt-[10px] pt-[10px] uppercase text-[#545353] lg:text-end lg:pr-10">EXHIBITIONS</p>
 
                                    </div>
                                </div>
          <div className="div">
            <Image
            src="/Rectangle6.png"
            alt="rectangle"
            width={1080}
            height={1080}
            className="w-full"
            />
          </div>
        </section>
        <section className="lg:px-20 px-5 lg:pt-20 ">
          <p className="text-[18px] mb-3 text-[#1B1B1C] font-[md] flex gap-1 tracking-wide p-0 m-0 items-center ">Our Portfolio</p>
      <Animation/>
          </section>
          <section className=" border-b ">
            <div className="bg-black shadow-md">
              <p className="pt-10 text-center text-[40px] font-[bb] text-[#FFFFFF] max-w-2xl mx-auto uppercase! leading-tight">We are exited to learn more about your project</p>
              <p className="text-center text-[20px] font-[md] text-[#FFFFFF] max-w-lg mx-auto  leading-tight p-0 m-0">Become a member now and start your journey toward mastering the perfect swing!</p>
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
      </div>
      <Footer/>
    </>
    
  );
};

export default page;
