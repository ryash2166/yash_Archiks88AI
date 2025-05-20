import Banner from "../Components/Common/Banner";
import SectionTitle from "../Components/Common/SectionTitle";
import MainVideo from "../Components/Common/MainVideo";
import { TrendingCardData } from "../Data/AllData";
import TrendingCard from "../Components/Common/TrendingCard";
import TrendingCreatives from "../Components/Common/TrendingCreatives";
import Footer from "../Components/Footer/Footer";
import Button from "../Components/Common/Button";
import { useNavigate } from "react-router-dom";
import { useNavigation } from "../Context/NavigationContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { setActiveTab } = useNavigation();

  const handleExploreClick = () => {
    navigate("/Explore");
    setActiveTab("Explore");
  };

  return (
    <div className="relative w-full overflow-auto overflow-x-hidden">
      <main className="lg:pl-64 pt-0 m-0 bg-primary">
        <MainVideo />
        <div className="relative max-xl:static">
          <h1 className="absolute -mt-80 ml-5 lg:ml-0 max-xl:static max-lg:mx-4 max-xl:mt-0">
            <p className="mt-10 lg:ml-8 max-w-full text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold bg-gradient-to-r from-purple-700 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Next-Generation AI Creative Studio
            </p>
          </h1>
        </div>
        <div className="">
          <div className="-mt-28 mx-4 mb-0 max-lg:flex-col flex flex-wrap max-xl:mt-10">
            <Banner
              title="AI Images"
              className="mr-6 lg:mr-4 mb-4 lg:mb-0"
              subtitle="Powered by Archiks88"
              to="/ImageAI"
            />
            <Banner
              title="AI Videos"
              className="mr-6 lg:mr-4 mb-4 lg:mb-0"
              subtitle="Powered by Archiks88"
              to="/VideoAI"
            />
            <Banner
              title="Video Editor"
              showSVG={false}
              showR={false}
              subtitle="The feature is coming! We'll share with you soon."
            />
          </div>
        </div>

        {/* Trending Shorts Section */}
        <SectionTitle title="Trending Shorts" />
        <div className="mx-4 min-h-56">
          <div className="flex flex-wrap justify-between max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-4">
            {TrendingCardData.map((card) => (
              <TrendingCard
                key={card.id}
                title={card.title}
                subtitle={card.subtitle}
                videoSrc={card.videoSrc}
                posterSrc={card.posterSrc}
                likes={card.likes}
                time={card.time}
                author={card.author}
              />
            ))}
          </div>
        </div>

        {/* Trending Creatives Section */}
        <SectionTitle title="Trending Creatives" />
        <div className="mt-4 mb-20 w-full px-4">
          <TrendingCreatives />
          <div className="relative flex items-center justify-center  mt-10">
            <div className="p-0.5 bg-gradient-to-r from-purple-700 to-sky-600 group  rounded-full transition-all duration-300 group-hover:shadow-lg">
              <Button
                onClick={handleExploreClick}
                title="View More"
                // icon={<ImageToVideoIcon className="w-6 h-6" />}
                className="bg-black text-white sm:!text-base !py-2.5 !px-8 rounded-full w-full h-full transition-all duration-300 group-hover:bg-gradient-to-l group-hover:from-purple-900 group-hover:to-sky-700 font-medium"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
