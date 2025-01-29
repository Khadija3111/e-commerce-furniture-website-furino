export default function Blog() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="relative h-[200px] md:h-[320px] w-full">
        <img src="the2.png" className="w-full h-full object-cover" alt="Blog Header" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black">Blog</h2>
          <div className="flex text-black text-sm md:text-base pt-4">
            <label>Home</label>
            <img src="arrow.png" alt="Arrow" className="mx-2" />
            <label>Blog</label>
          </div>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="flex flex-col md:flex-row justify-center py-16 px-4 md:px-20 lg:px-40 space-y-8 md:space-y-0 md:space-x-12">
        {/* Blog Posts */}
        <div className="flex-1">
          {[1, 2, 3].map((index) => (
            <div key={index} className="mb-12">
              <img src={`blog${index}.png`} className="w-full h-auto rounded-lg" alt={`Blog Post ${index}`} />
              <img src="blogp.png" className="pt-2" alt="Author" />
              <h2 className="text-black text-xl md:text-2xl font-medium pt-3">
                {index === 1
                  ? "Going all-in with millennial design"
                  : index === 2
                  ? "Exploring new ways of decorating"
                  : "Handmade pieces that took time to make"}
              </h2>
              <p className="text-[#9F9F9F] pt-3 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices.
              </p>
              <p className="text-black text-sm underline pt-4 cursor-pointer">READ MORE</p>
            </div>
          ))}
        </div>

        {/* Blog Sidebar */}
        <div className="w-full md:w-1/4 flex flex-col space-y-8">
          <img src="blog2div.png" alt="Sidebar Image 1" className="rounded-lg" />
          <img src="blog2div2.png" alt="Sidebar Image 2" className="rounded-lg" />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "trophy.png", title: "High Quality", text: "Crafted from top materials" },
              { icon: "guarantee.png", title: "Warranty Protection", text: "Over 2 years" },
              { icon: "shipping.png", title: "Free Shipping", text: "Order over $150" },
              { icon: "custom.png", title: "24/7 Support", text: "Dedicated support" },
            ].map((feature, index) => (
              <div key={index} className="text-center flex flex-col items-center">
                <img src={feature.icon} alt={`${feature.title} Icon`} className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
