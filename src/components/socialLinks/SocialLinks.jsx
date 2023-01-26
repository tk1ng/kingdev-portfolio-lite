import {BsGithub, BsTwitter} from 'react-icons/bs'
import {GrLinkedinOption} from 'react-icons/gr';
import {FaCodepen} from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="social-links social-links-grid-item">
      <a href="https://github.com/tk1ng" rel="noreferrer" target="_blank"><BsGithub /></a>
      <a href="https://codepen.io/gemking1" rel="noreferrer" target="_blank"><FaCodepen /></a>
      <a href="https://linkedin.com/in/taryn-king" rel="noreferrer" target="_blank"><GrLinkedinOption /></a>
      <a href="https://twitter.com/iimkiing" rel="noreferrer" target="_blank"><BsTwitter /></a>
    </div>
  )
}

export default SocialLinks