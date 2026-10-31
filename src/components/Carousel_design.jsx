
const Carousel_design = ({ item }) => {
    return (
        <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">

            <div className="flex flex-col md:flex-row gap-10 items-center justify-center min-h-[700px] px-16 md:px-20 py-10">

                {/* Left Side: Product Information */}
                <div className="space-y-4 w-full md:w-[500px]">

                    <h3 className="text-red-500 font-semibold font-sans text-2xl capitalize">
                        Explore Our {item.category} Collection
                    </h3>

                    <h1 className="text-4xl font-bold uppercase line-clamp-2 text-white">
                        {item.title}
                    </h1>

                    <p className="text-sm line-clamp-3 text-gray-400 pr-7">
                        {item.description}
                    </p>

                    {/* Price */}
                    {/* <h3 className="text-3xl font-bold text-white">
                        ${item.price.toFixed(2)}
                    </h3> */}

                    {/* Category */}
                    {/* <h2 className="text-gray-300 capitalize">
                        Category: {item.category}
                    </h2> */}

                    <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-5 py-3 rounded-xl cursor-pointer mt-2 hover:scale-105 transition-all">
                        Shop Now
                    </button>

                </div>

                {/* Right Side: Product Image */}

                {/* Right Side: Product Image */}
                <div className="w-full md:w-[650px] flex items-center justify-center">

                    <div className="w-[450px] h-[450px] sm:w-[500px] sm:h-[450px] md:w-[550px] md:h-[550px] rounded-full bg-white flex items-center justify-center shadow-2xl shadow-red-400/50 p-4 ">

                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain hover:scale-110 transition-all duration-300"
                        />

                    </div>

                </div>


            </div>
        </div>
    );
};

export default Carousel_design;
