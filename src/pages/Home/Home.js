import Header from '../../components/Header/Header';
import Navigator from '../../components/Navigator/Navigator';
import ImageBanner from '../../components/ImageBanner/ImageBanner';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Divider from '../../components/Divider/Divider';
import './Home.css';

import Logo from '../../assets/images/logo.png';
import GreenMap from '../../assets/images/GreenMap.png';
import MissionLeaf from '../../assets/images/MissionLeaf.png';
import AboutBanner from '../../assets/images/AboutBanner.png';
import BannerLeaf from '../../assets/images/BannerLeaf.png';

const Home = () => {
  return (
    <>
      <Header />
      <section id='home'>
        <div className="container home-container">
          <img src={Logo} alt='logo' className='app-logo' />
          <Navigator />
          <p className="home-caption">
            <span className="text-primary">Bringing Joy of </span>
            <span className="text-secondary">Food</span>
          </p>
          <p className="home-sub-caption text-primary">
            Quality Products. Great Flavours
          </p>
        </div>
        <ImageBanner image={GreenMap}>
          <p className="home-banner-title">Growing Food & Franchise Business</p>
          <p className="home-banner-subtitle text-primary">nationwide</p>
        </ImageBanner>
      </section>

      <section id='mission'>
        <div className="container mission-container">
          <SectionTitle title='Our Mission' />
          <img src={MissionLeaf} alt='' className="mission-leaf" />
          <p className='section-content'>
            Growing franchising businesses, focusing on great tasting Zfood and exceptional customer service while
            giving back to our community.
            We aim to be financially successful through great people consistently delivering outstanding food, drinks
            and service in an inviting atmosphere, making every guest loyal. We are always open to add more brands,
            restaurants and franchises to our family. Please contact our business relations team for any inquiry..
          </p>
          <div className="mission-growth text-primary">
            <span>Growth&nbsp;</span>
            <span className='ampersand text-secondary'>&</span>
            <span>&nbsp;Expansion</span>
          </div>
          <Divider />
          <p className="mission-growing text-secondary">
            <span>We are </span>
            <span className="text-primary">Growing!</span>
          </p>
          <p className="mission-extend text-primary">
            We are expanding - Proven concept,<br />
            Excellent Support and Great People!
          </p>
          <div className='find-button'>
            <span className='text-secondary'>Find out </span>
            <span className='text-primary'>More</span>
          </div>
        </div>
      </section>

      <section id='about'>
        <div className="about-banner">
          <img src={AboutBanner} alt='' className="banner-image" />
          <img src={BannerLeaf} alt='leaf' className="about-banner-leaf" />
        </div>
        <div className="mission-container">
          <SectionTitle title='About Us' />
          <p className='section-content'>
            Growing franchising businesses, focusing on great tasting Zfood and exceptional customer service while
            giving back to our community.
            We aim to be financially successful through great people consistently delivering outstanding food, drinks
            and service in an inviting atmosphere, making every guest loyal. We are always open to add more brands,
            restaurants and franchises to our family. Please contact our business relations team for any inquiry..
          </p>
          <div className="inline-divider" />
          <Divider align='right' />
        </div>
      </section>
    </>
  );
};

export default Home;