import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer id="footer" className="footer">
        <div className="copyright">
            &copy; Copyright{' '}
            <strong>
                <span>Smart Agri</span>
            </strong>
            . All Rights Reserved
        </div>
        <div className="credits">
            Designed by <a href="#">Sija1</a>
        </div>
    </footer>
  );
}

export default Footer;