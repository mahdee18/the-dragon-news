import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <div className='container'>
            <div className='text-center py-3'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D YYYY")}</p>
            </div>
            <div className='d-flex mb-4'>
                <button className='btn btn-danger'>Latest</button>
                <Marquee speed={100}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>

        </div>
    );
};

export default Header;