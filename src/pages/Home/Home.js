import Header from '../../components/Header/Header';
import Navigator from '../../components/Navigator/Navigator';
import ImageBanner from '../../components/ImageBanner/ImageBanner';
import './Home.css';

import Logo from '../../assets/images/logo.png';
import GreenMap from '../../assets/images/GreenMap.png';

const Home = () => {
  return (
    <>
      <Header />
      <section id='Home'>
        <div className="container home-content">
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
    </>
  );
};

export default Home;