import Testimonal from "../Components/Testimonal";

import CallTo from "../Components/CallTo";
import Features from "../Components/Features";
import Brand from "../Components/Brand";

import About from "../Components/About";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
function Home() {
    return (
        <div>
          <Banner></Banner>
          <Navbar></Navbar>
            <CallTo />
            <Testimonal />
            <Features />
            <Brand />
            <About/>
        <Footer></Footer>
           
        </div>
    )
}

export default Home;
