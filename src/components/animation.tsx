import Image from "next/image";


export default function Page() {
  return (
    <div className="">
      
      <div className="flex gap-2 justify-center">
        
        {/* COLUMN 1 (UP) */}
        
        <div className="relative w-1/3    h-[500px] overflow-hidden">
          <div className="scroll-wrapper scroll-up">
            <div className="scroll-column space-y-2">
              <Image src="/svg/scroll/1.png" width={400} height={400} alt="1" className="object-cover w-full" />
              <Image src="/svg/scroll/2.png" width={400} height={400} alt="2" className="object-cover w-full" />
              <Image src="/svg/scroll/3.png" width={400} height={400} alt="3" className="object-cover w-full" />
            </div>

            {/* DUPLICATE for seamless loop */}
            <div className="scroll-column space-y-2">
              <Image src="/svg/scroll/1.png" width={400} height={400} alt="1-copy" className="object-cover w-full" />
              <Image src="/svg/scroll/2.png" width={400} height={400} alt="2-copy" className="object-cover w-full" />
              <Image src="/svg/scroll/3.png" width={400} height={400} alt="3-copy" className="object-cover w-full" />
            </div>
          </div>
        </div>

        {/* COLUMN 2 (DOWN) */}
        <div className="relative w-1/3 h-[500px] overflow-hidden">
          <div className="scroll-wrapper scroll-down">
            <div className="scroll-column space-y-2">
              <Image src="/svg/scroll/6.png" width={400} height={400} alt="4" className="object-cover w-full" />
              <Image src="/svg/scroll/5.png" width={400} height={400} alt="5" className="object-cover w-full" />
              <Image src="/svg/scroll/4.png" width={400} height={400} alt="6" className="object-cover w-full" />
            </div>

            <div className="scroll-column space-y-2">
              <Image src="/svg/scroll/1.png" width={400} height={400} alt="4-copy" className="object-cover w-full" />
              <Image src="/svg/scroll/2.png" width={400} height={400} alt="5-copy" className="object-cover w-full" />
              <Image src="/svg/scroll/3.png" width={400} height={400} alt="6-copy" className="object-cover w-full" />
            </div>
          </div>
        </div>

        {/* COLUMN 3 (UP) */}
        <div className="relative w-1/3  h-[500px] overflow-hidden">
        <div className="scroll-wrapper scroll-up">
  <div className="scroll-column space-y-2">
    <Image src="/svg/scroll/4.png" width={400} height={400} alt="1" className="object-cover w-full" />
    <Image src="/svg/scroll/2.png" width={400} height={400} alt="2" className="object-cover w-full" />
    <Image src="/svg/scroll/1.png" width={400} height={400} alt="3" className="object-cover w-full" />
  </div>

  <div className="scroll-column space-y-2">
    <Image src="/svg/scroll/4.png" width={400} height={400} alt="1-copy" className="object-cover w-full" />
    <Image src="/svg/scroll/5.png" width={400} height={400} alt="2-copy" className="object-cover w-full" />
    <Image src="/svg/scroll/6.png" width={400} height={400} alt="3-copy" className="object-cover w-full" />
  </div>
</div>

        </div>

      </div>

    </div>
  );
}
