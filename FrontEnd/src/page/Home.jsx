
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-wrap">
            <div className="w-full sm:w-8/12 mb-10">
                <div className="container mx-auto h-full sm:p-10">
                    <nav className="flex px-4 justify-between items-center">
                        <div className="text-4xl font-bold">
                            FashionLike<span class="text-green-700">.</span>
                        </div>
                        {/* <div>
                            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" class="w-8" />
                        </div> */}
                    </nav>
                    <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                        <div className="w-full">
                            <h1 className="text-4xl lg:text-6xl font-bold">Find your <span class="text-green-700">perfect </span>style for your look</h1>
                            <div className="w-20 h-2 bg-green-700 my-4"></div>
                            <p className="text-xl mb-10">Elegance and trends blend in harmony. Discover the latest fashion pieces that fit your personality and elevate your wardrobe with unique and stylish outfits.</p>
                            <Link to="/login" class="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">Iniciar sesion</Link>
                            <Link to="/register" class="bg-green-500 text-white text-2xl font-medium px-4 py-2 ml-1 rounded shadow">Registrarme</Link>
                        </div>
                    </header>
                </div>
            </div>
            <img src="/model.jpg" alt="Leafs" class="w-full h-48 object-center sm:h-screen sm:w-4/12" />
        </div>
    );
};

export default Home;