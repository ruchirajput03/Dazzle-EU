// components/ValuesSection.jsx

const values = [
    {
      title: "Authenticity",
      description:
        "Building bold structures with purpose and elegance. Transform your vision through modern form and seamless functionality.",
    },
    {
      title: "Artisanship",
      description:
        "Crafting visionary spaces with precision and artistry. Elevate your architecture with cutting-edge design and innovation.",
    },
    {
      title: "Sustainability",
      description:
        "Designing timeless environments with balance and style. Push your project further with sleek, intelligent architecture.",
    },
  ];
  
  export default function ValuesSection() {
    return (
      <section className="bg-black text-white py-20 px-8 md:px-20">
        {/* Top Heading Row */}
        <div className="flex justify-between items-start mb-12">
          <h2 className="lg:text-[20px] tracking-wider font-[md]">OUR VALUES</h2>
          <p className="max-w-sm text-[#FFFFFF] text-[16px] leading-tight">
            Crafting visionary spaces with precision and artistry. Elevate your
            architecture with cutting-edge design and innovation.
          </p>
        </div>
  
        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white text-black p-8 min-h-[300px] border border-gray-200 relative"
            >
              {/* Placeholder icon */}
              <div className="text-gray-300 text-8xl mb-8">✱</div>
  
              <h3 className="text-xl font-[md] ">{item.title}</h3>
              <p className="text-[#141411] text-[14px] leading-tight">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  