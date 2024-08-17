import Baner from "../components/Baner";
import Gallary from "../components/Gallary";
import useAuth from "../hooks/useAuth";


const Home = () => {
    const {user}=useAuth()
    console.log(user)
    return (
        <div className="container mx-auto">
            <Baner></Baner>
            
            <div className="mt-8">
            <Gallary></Gallary>
            </div>
            
        </div>
    );
};

export default Home;