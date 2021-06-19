import '../components/footer.css'
import image1 from '../../src/applegoogle.png'


function Footer() {
    return (

        <div className="footer">
            <br />
            <div className="footer1">
                <div>
                    <br />
                    <h3>We're Always Here</h3>
                    <h3>To Help</h3>
                    <p>Reach out to us through any</p>
                    <p>of these support channels</p>
                </div>
                <div className="footer2">
                    <div>
                        <br />
                        <div className="iconWala">

                            <i class="fa fa-info-circle" aria-hidden="true"></i>
                        </div>
                        <br />
                        <br />
                        <div lassName="iconWala">
                            <i class="fa fa-envelope" aria-hidden="true"></i>

                        </div>
                    </div>
                    <div>
                        <br />
                        <div>
                            <h6>HELP CETER</h6>
                            <strong>help.noon.com</strong>
                        </div>
                        <br />
                        <div>

                            <h6>EMAIL SUPPORT</h6>
                            <strong>care@noon.com</strong>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="footer_colums">
                <div className="colum1">
                    <h4>ELECTRONICS</h4>
                    <ul>
                        <li>Mobiles</li>
                        <li>Tablets</li>
                        <li>Laptops</li>
                        <li>Home Appliances</li>
                        <li>Camera, Photos & video</li>
                    </ul>
                </div>
                <div className="colum1">
                    <h4>FASHION</h4>
                    <ul>
                        <li>Womens Fashion</li>
                        <li>Men's Fashion</li>
                        <li>Girls Fashion</li>
                        <li>Watches</li>
                        <li>Handbags</li>
                    </ul>
                </div>
                <div className="colum1">
                    <h4>HOME AND KITCHEN</h4>
                    <ul>
                        <li>Bath</li>
                        <li>Home Decor</li>
                        <li>Dining</li>
                        <li>Furniture</li>
                        <li>Pet Supplies</li>
                    </ul>
                </div>
                <div className="colum1">
                    <h4>BEAUTY</h4>
                    <ul>
                        <li>Fragrance</li>
                        <li>Make-Up</li>
                        <li>Haircare</li>
                        <li>Skincare</li>
                        <li>Personal Care</li>
                    </ul>
                </div>
                <div className="colum1">
                    <h4>BABY</h4>
                    <ul>
                        <li>Strollers</li>
                        <li>Car Seat</li>
                        <li>Feeding</li>
                        <li>Diapering</li>
                        <li>Foods</li>
                    </ul>
                </div>

            </div>
            <div className="footerEndComponent">
                <br />
                <div>
                    <h4>SHOP ON THE GO</h4>
                    <img width="300px" src={image1} alt="" />
                </div>
                <div>
                    <h4>CONNECT WITH US</h4>
                    <div>
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>



                    </div>


                </div>
            </div>
        </div>
    )
}

export default Footer;