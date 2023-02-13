import CoverImg from '../images/img_cover.jpg';
import PersonImg from '../images/img_person.png';
import { FaTwitter, FaGithub } from 'react-icons/fa'

export const Header = () => {
  return (
    <header className="main-cover" style={{backgroundImage: `url(${CoverImg})`}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            <div className="profile-thumb" style={{backgroundImage: `url(${PersonImg})`}}></div>
            <h1 className="title-text">ボブ</h1>
            <h3 className="title-text">Chief</h3>
            <ul className="social-icons">
              <li className='icon-link'>
                <a href="https://twitter.com/" target="_blank">
                  <FaTwitter color="white" size="2rem" />
                </a>
              </li>
              <li className='icon-link'>
                <a href="https://github.com/" target="_blank">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div> 
      </div>

    </header>
  )
}
