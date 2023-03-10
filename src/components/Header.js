import React, { useEffect } from 'react'
import Navbarcomp from './NavbarComp'
import Aos from 'aos';
import "aos/dist/aos.css"

export default function Header() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>
            <div className='text1'>
                <div className="content1">
                    <p><b>Call US:</b> &nbsp; (+04) 743 323 424 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Address: &nbsp;</b> New York, Thomas Nolan 5322</p>
                    <hr className='line1' />
                </div>
                <Navbarcomp />
                <div data-aos="fade-right" className="content2">
                    <h2>Pizza Delivery</h2>
                    <h1>MAESTRO <br />PIZINNI</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                        Distinctio commodi ab quod officia? Possimus, veniam <br />
                        delectus asperiores deleniti modi rem eius harum, odio <br />
                        porro nostrum officiis quos minima sint</p>

                    <button className="btn btn-danger btn1">Delivery Now</button>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="content3">
                            <h2>About Us</h2>
                            <h1>WELCOME TO</h1>
                            <h1>MAESTRO PIZZINI</h1>
                            <p>Investigationes demonstraverunt lectores legere me lius
                                quod ii legunt saepius. Claritas est etiam processus dynaus,
                                quise sequitur mutationem consuetudium lectorum.</p>
                            <button className="btn btn-danger btn1">Read More</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <img className="img2" src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/maestropizzini-aboutus-bg-1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg2">
                <div className="content4">
                    <div className="content5">
                        <h2>Free Delivery With</h2>
                        <h1>PIZZA OF THE DAY</h1>
                        <h2>Only 8.99 USD</h2>
                    </div>
                    {/* <button className="btn btn-danger set3">CALLNOW</button> */}
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <img className="img2" src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/maestropizzini-pizzamenu-bg.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="content3">
                            <h2>The Pizza Menu</h2>
                            <h1>CHICAGO</h1>
                            <h1>THIN CRUST</h1>
                            <p>Investigationes demonstraverunt lectores legere me lius
                                quod ii legunt saepius. Claritas est etiam processus dynaus,
                                quise sequitur mutationem consuetudium lectorum.</p>
                            <button className="btn btn-danger btn1">View More</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="num">
                                <h1>120</h1>
                                <h2>Awesome Employees</h2>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="num">
                                <h1>58</h1>
                                <h2>Pizza Types</h2>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="num">
                                <h1>1468</h1>
                                <h2>Satisfied Clients</h2>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="num">
                                <h1>2031</h1>
                                <h2>Dilivery</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form">
                            <h2>Quick Delivery</h2>
                            <h1>ORDER A</h1>
                            <h1>PIZZA NOW</h1>
                            <p>Investigationes demonstraverunt lectores legere me lius
                                quod ii legunt saepius. Claritas est etiam processus.</p>
                            <form className='form1' action="">
                                <input className='inp' placeholder='First Name' type="text" name="" id="" /> &nbsp;&nbsp;&nbsp;
                                <input className='inp' placeholder='Last Name' type="text" name="" id="" />
                                <input className='inp1' placeholder='Enter Street Address' type="text" name="" id="" />
                                <input className='inp2' placeholder='Appartment/Room' type="text" name="" id="" />&nbsp;&nbsp;&nbsp;&nbsp;
                                <input className='inp2' placeholder='Phone Number' type="text" name="" id="" />
                                <select className='opt' placeholder='Pizza Type' name="" id="">
                                    <option value="">Pizza Type</option>
                                    <option value="">Pizza 1</option>
                                    <option value="">Pizza 2</option>
                                    <option value="">Pizza 3</option>
                                    <option value="">Pizza 4</option>
                                </select>
                                <input className='inp2' placeholder='Enter Number' type="text" name="" id="" /> &nbsp;&nbsp;&nbsp;
                                <select className='opt1' placeholder='Pizza Type' name="" id="">
                                    <option value="">Size</option>
                                    <option value="">Small</option>
                                    <option value="">Medium</option>
                                    <option value="">Large</option>
                                    <option value="">X-Large</option>
                                </select>
                                <button className="btn btn-danger btnn">Quick Delivery</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='set5'>
                            <img className="img5" src="https://t4.ftcdn.net/jpg/02/52/32/43/360_F_252324359_OeI80GJXWtqZ9QNFNXpXgclOXaF0Yn7m.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg5">
                <div className="container">
                    <div className="menu">
                        <h2>Pizza Menu</h2>
                        <h1>WELCOME TO</h1>
                        <h1>MAESTRO PIZZINI</h1>
                        <hr />
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="menu1">
                                <img className='img7' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza6.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content7">
                                <h3>Low Carb Pizza</h3>
                                <p>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="content8">
                                <h1>$34</h1>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="menu1">
                                <img className='img7' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza5.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content7">
                                <h3>Pizza Biscuit Bake</h3>
                                <p>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="content8">
                                <h1>$25</h1>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="menu1">
                                <img className='img7' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza4.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content7">
                                <h3>Crazy Crust Pizza</h3>
                                <p>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="content8">
                                <h1>$49</h1>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="menu1">
                                <img className='img7' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza3.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content7">
                                <h3>Beer Pizza Crust</h3>
                                <p>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="content8">
                                <h1>$39</h1>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="menu1">
                                <img className='img7' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza2.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content7">
                                <h3>Pizza Prosciutto</h3>
                                <p>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="content8">
                                <h1>$19</h1>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="menu1">
                                <img className='img7' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content7">
                                <h3>Pizza Margeritta</h3>
                                <p>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="content8">
                                <h1>$9</h1>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="menu2">
                            <h2>Pizza Menu</h2>
                            <h1>WELCOME TO</h1>
                            <h1>MAESTRO PIZZINI</h1>
                            <hr />
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="menu3">
                            <img className='img8' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza6.png" alt="" />
                            <h3>Low Carb Pizza</h3>
                            <p>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            <h1>$34</h1>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="menu3">
                            <img className='img8' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza5.png" alt="" />
                            <h3>Pizza Biscuit Bake</h3>
                            <p>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            <h1>$25</h1>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="menu3">
                            <img className='img8' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza4.png" alt="" />
                            <h3>Crazy Crust Pizza</h3>
                            <p>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            <h1>$39</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="foot">
                                <h2>About Us</h2>
                                <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Eodem modo typi, qui nunc nobis videntur. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Investigationes demonstraverunt lectores.</p>
                                <p><b>Monday to Saturday:</b> 9.00 am to 9.00 pm</p>
                                <p><b>Sunday:</b> 10.00 am to 6.00 pm</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="foot">
                                <h2>Quick Links</h2>
                                <ul>
                                    <li><a href="" className='li'>Need Help?</a></li>
                                    <li> <a href="" className='li'>Our Last News</a></li>
                                    <li><a href="" className='li'>About Us Page</a></li>
                                    <li><a href="" className='li'>Table Booking</a></li>
                                    <li> <a href="" className='li'>Fast Delivery</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="foot">
                                <h2 className='recep'>Recepies</h2>
                                <ul>
                                    <li><a href="/" className='li'>Pizza Buscuit Bake</a></li>
                                    <li><a href="/" className='li'>Pizza Margeritta</a></li>
                                    <li><a href="/" className='li'>Pizza Prosqiutto</a></li>
                                    <li><a href="/" className='li'>Pizza Low Carb</a></li>
                                    <li><a href="/" className='li'>Pizza Del Sole</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="foot">
                                <h2>Contact Us</h2>
                                <p><b>Ph:&nbsp;</b>(+40) 74 0920 2288</p>
                                <p><b>mail:&nbsp;</b>office@example.com</p>
                                <p><b>Add:&nbsp;</b>New York 11673</p>
                            </div>
                        </div>
                        <hr />
                        <h4 className='copy'>Copyright by ModelTheme. All Rights Reserved.</h4>
                    </div>
                </div>
            </div>


        </>
    )
}
