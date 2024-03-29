import Gallery from "./Gallery/Gallery";
import ByCategory from "./ByCategory/ByCategory";
import OurService from "../OurService/OurService";




const Home = () => {


    return (
        <div>
            {/* ---------Banar Section start--------------- */}
            <div className="hero h-[600px]" style={{ backgroundImage: `url("https://i.ibb.co/68zvjPY/istockphoto-1332097112-170667a.jpg")` }}>

                <div className="flex flex-col-reverse lg:flex-row lg:gap-40">
                    <div className="card-body text-white">
                        <h2 className="text-5xl font-semibold">Toy Cars!</h2>
                        <p className="text-xl mt-4 mb-4 lg:text-3xl">Welcome to my toy shop. <br /> Here you will find one of the world toy cars</p>
                        <div className="card-actions ">
                            <button className="px-4 py-3 border-2 text-[#52fff3] border-[#52fff3] hover:bg-[#52fff3] hover:text-black rounded-md">All Toys</button>
                        </div>
                    </div>
                    <figure><img src="https://freepngimg.com/thumb/porsche/22132-5-silver-porsche.png" alt="Movie" /></figure>

                </div>
                
            </div>
            <div className="pt-1  bg-[#52fff3]">
                        
                </div>
            {/* --------- Banar Section end --------------- */}

            {/* --------- Gallery Section start --------------------*/}

            <Gallery></Gallery>

            {/* --------- Gallery Section end --------------------*/}


            <ByCategory></ByCategory>


            <OurService></OurService>

        </div >
    );
};

export default Home;