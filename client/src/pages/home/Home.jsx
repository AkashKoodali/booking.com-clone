import Featured from "../../components/Featured/Featured.Componet";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList/MailList";
import NavBar from "../../components/NavBar/NavBar";
import PropertyList from "../../components/PropertyList/PropertyList.Component";
import "./Home.css";

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <h1 className="homeTilte">Browse by property type</h1>
          <PropertyList/>
          <h1 className="homeTilte">Home quests love</h1>
          <FeaturedProperties/>
          <MailList/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home