import useAuth from "../hooks/useAuth";


const Home = () => {
    const {user}=useAuth()
    console.log(user)
    return (
        <div className="container mx-auto">
            <h1>This is home </h1>
            
        </div>
    );
};

export default Home;