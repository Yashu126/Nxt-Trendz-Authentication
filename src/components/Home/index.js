import './index.css'

import Header from '../Header'

const Home = () => (
  <div className="home-page-con">
    <Header />
    <div className="main-body">
      <div className="left-con">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <p className="description">
          Fashion is part of the daily air and it dos not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that wa you are so, celebrate the seasons new and exiting fashion in
          your own way
        </p>
        <button className="show-btn" type="button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="clothes-img"
      />
    </div>
  </div>
)

export default Home
