import React from 'react'

import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { SiGithub, SiWhatsapp } from "react-icons/si";

import { socialMedia } from './Home'

import emailIcon from '../../assets/icons/email.svg'
import phoneIcon1 from '../../assets/icons/phone-01.svg'
import phoneIcon2 from '../../assets/icons/phone02.svg'
import homeIcon from '../../assets/icons/home.svg'
import handIcon from '../../assets/icons/hand.svg'

const Contact = () => {
  return (
    <>
      <header id="top" className='contact-header flex-centered h-[80vh] lg:h-[70vh] w-full relative'>
        <div className="section-width-default flex-centered flex-col lg:flex-row w-full">

          <div className="info-container w-full lg:w-1/2 h-full mb-10 lg:mb-0">
            <div className="mb-10">
              <h4>Let's get in touch</h4>
              <h3>Let's talk about you & your challenges</h3>
            </div>
            <div className="">
              <p><strong>Contact information</strong></p>
              <span className='icons email'>
                <img src={emailIcon} alt="" />
                <p><a href="mailto: paulolopesreizinho@gmail.com">paulolopesreizinho@gmail.com</a></p>
              </span>

              <span className='icons phone'>
                <img src={phoneIcon1} alt="" />
                <img src={phoneIcon2} alt="" />
                <p><a href="tel: +41787989533">+41 078 798 95 33</a></p>
              </span>
              <span className='icons home'>
                <img src={homeIcon} alt="" />
                <img src={handIcon} alt="" />
                <p>Zurich, Switzerland</p>
              </span>
              <div className="flex justify-evenly lg:justify-start mt-6">
                <button className='btn primary social blue'><a href={socialMedia.github} target="_blank"><SiGithub /></a></button>
                <button className='btn primary social blue'><a href={socialMedia.instagram} target="_blank"><SlSocialInstagram /></a></button>
                <button className='btn primary social blue'><a href={socialMedia.linkedin} target="_blank"><SlSocialLinkedin /></a></button>
                <button className='btn primary social blue'><a href={socialMedia.whatsapp} target="_blank"><SiWhatsapp /></a></button>
              </div>
            </div>
          </div>

          <div className="form-container w-full lg:w-1/2 h-full">
            <form className='flex flex-col justify-between absolute left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 lg:top-64 bg-light-1 dark:bg-dark-3 w-[376px] h-[654px] lg:w-[476px] lg:h-[754px] p-10' action="">
              <h3>Send me a message</h3>
              <fieldset>
                <label for="name">Your name</label>
                <input type="text" id="name" name="name" placeholder="Ex: Jordan Peterson" required />
              </fieldset>

              <fieldset>
                <label for="email">Your email</label>
                <input type="email" id="email" name="email" placeholder="Ex: paulolopes@gmail.com" required />
              </fieldset>

              <fieldset>
                <label for="phone">Your phone number</label>
                <input type="tel" id="phone" name="phone" placeholder="Ex: +41 078 798 95 33" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
              </fieldset>

              <fieldset>
                <label for="message">Comments</label>
                <textarea id="message" name="message" rows="6" placeholder="What do you need help with? What challenges you have?" required></textarea>
              </fieldset>

              <button className='btn small blue' type='submit'>Send</button>
            </form>
          </div>
        </div>
      </header>
      <section className='h-[640px] lg:h-[20vh]'></section>
    </>
  )
}

export default Contact