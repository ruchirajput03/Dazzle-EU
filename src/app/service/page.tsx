import React from 'react'
import Image from 'next/image';
const page = () => {
  return (
    <>
    <section className='overflow-hidden lg:pt-[150px] pt-[100px] lg:px-[80px]  px-[20px]'>
   
       
            <p className='lg:text-[50px] font-[bb] leading-tight'>Our <br></br>
            Services</p>
            <div className="col-lg-10">
            <div className="row">
          
            <div className="col-lg-4">
                <Image
                src="/aboutus/service/1.png"
                alt="img"
                height={1080}
                width={1080}
                className="w-full h-full"
                />
            </div>
            <div className="col-lg-5"></div>
        </div>
    </div>
    </section>
    </>
  )
}

export default page