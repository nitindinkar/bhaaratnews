import React from "react";

const Footer = () => {
  return (
      <footer className="footer" style={{textAlign:"center"}}>
  <div className="container bottom_border">
    <div className="row">
      <div className=" col-sm-4 col-md col-sm-4  col-12 col">
        <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
        <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <p><i className="fa fa-location-arrow"></i> 9878/25 sec 9 noida 35 </p>
        <p><i className="fa fa-phone"></i> +91-9999878398 </p>
        <p><i className="fa fa fa-envelope"></i> info@example.com </p>

      </div>

      <div className=" col-sm-4 col-md  col-6 col">
        <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
        <ul className="footer_ul_amrc">
          <li><a href="https://bhaaratnews.com">Image Rectoucing</a></li>
          <li><a href="https://bhaaratnews.com">Clipping Path</a></li>
          <li><a href="https://bhaaratnews.com">Hollow Man Montage</a></li>
          <li><a href="https://bhaaratnews.com">Ebay & Amazon</a></li>
          <li><a href="https://bhaaratnews.com">Hair Masking/Clipping</a></li>
          <li><a href="https://bhaaratnews.com">Image Cropping</a></li>
        </ul>
      </div>

     
      <div className=" col-sm-4 col-md  col-12 col">
        <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>

        <ul className="footer_ul2_amrc">
          <li><a href="#"><i className="fab fa-twitter fleft padding-right"></i> </a>
            <p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://www.lipsum.com/</a></p>
          </li>
          <li><a href="#"><i className="fab fa-twitter fleft padding-right"></i> </a>
            <p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://www.lipsum.com/</a></p>
          </li>
          <li><a href="#"><i className="fab fa-twitter fleft padding-right"></i> </a>
            <p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://www.lipsum.com/</a></p>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="container">
    

    <p className="text-center">Copyright @2022 | All right reserved by <a href="#">Bhaarat News</a></p>

    <ul className="social_footer_ul">
      <li><a href="https://bhaaratnews.com" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
      <li><a href="https://bhaaratnews.com" target="_blank"><i className="fab fa-twitter"></i></a></li>
      <li><a href="https://bhaaratnews.com" target="_blank"><i className="fab fa-linkedin"></i></a></li>
      <li><a href="https://bhaaratnews.com" target="_blank"><i className="fab fa-instagram"></i></a></li>
    </ul>
  </div>

</footer>
  );
};

export default Footer;
