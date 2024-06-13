import React from 'react';
import './footer.css'

const footer = () => {
    return (
        <div id='MainFooter'>
            <div className='FtSec'>
            <h1>ZOMATO</h1>
                <div className='InnerSec'>
                    <h2>ABOUT ZOMATO</h2>
                    <p>Who we are</p>
                    <p>Blogs</p>
                    <p>Work with Us</p>
                    <p>Contact Us</p>
                </div>
                <div className='InnerSec'>
                    <h2>ZOMAVERSE</h2>
                    <p>Zomato</p>
                    <p>BlinkIt</p>
                    <p>Feeding India </p>
                    <p>Zomaland</p>
                </div>
                <div className='InnerSec'>
                    <h2>FOR RESTORANTS</h2>
                    <p>Partner with Us</p>
                    <p>Apps for you</p>
                </div>
                <div className='InnerSec'>
                    <h2>LEARN MORE</h2>
                    <p>Privacy</p>
                    <p>Security</p>
                    <p>Terms</p>
                    <p>Sitemap</p>
                </div>
                <div className='InnerSec'>
                    <h2>SOCIAL LINKS</h2>
                </div>
            </div>
            <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
        </div>
    );
}

export default footer;
