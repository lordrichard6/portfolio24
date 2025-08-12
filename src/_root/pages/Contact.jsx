import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { SiGithub, SiWhatsapp } from "react-icons/si";

import { socialMedia } from '../../constants'

import meHeader from '../../assets/images/me05.jpg'

import emailIcon from '../../assets/icons/email.svg'
import phoneIcon1 from '../../assets/icons/phone-01.svg'
import phoneIcon2 from '../../assets/icons/phone02.svg'
import homeIcon from '../../assets/icons/home.svg'
import handIcon from '../../assets/icons/hand.svg'

const Contact = () => {
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [stateMessage, setStateMessage] = useState(null);

  // FORM DOESN'T WORK TRY TO FIX LATER
  
  // const handleOnSubmit = (e) => {
  //   const publicKey = process.env.EMAILJS_PUBLIC_KEY
  //   const serviceId = process.env.EMAILJS_SERVICE_ID
  //   const templateId = process.env.EMAILJS_TEMPLATE_ID

  //   e.persist();
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   emailjs.sendForm(serviceId, templateId, e.target, publicKey)
  //     .then((result) => {
  //       setStateMessage('Message sent!');
  //       setIsSubmitting(false);
  //       console.log(result.text);
  //       setTimeout(() => {
  //         setStateMessage(null);
  //       }, 5000); // hide message after 5 seconds

  //     }, (error) => {
  //       setStateMessage('Something went wrong, please try again later');
  //       console.log(error.text);
  //       setIsSubmitting(false);
  //       setTimeout(() => {
  //         setStateMessage(null);
  //       }, 5000); // hide message after 5 seconds
  //     });
  //   e.target.reset()
  // };

  return (
    <>
      <header id="top" className='contact-header flex-centered h-[80vh] lg:h-[70vh] w-full relative'>
        <div className="section-width-default flex-centered flex-col lg:flex-row w-full">

          <div className="info-container w-full lg:w-1/2 h-full mb-10 lg:mb-0">
            <div className="mb-10">
              <h4>Let&apos;s get in touch</h4>
              <h3>Let&apos;s talk about you &amp; your challenges</h3>
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
                <button className='btn primary social blue'><a href={socialMedia.github} target="_blank" rel="noopener noreferrer"><SiGithub /></a></button>
                <button className='btn primary social blue'><a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer"><SlSocialInstagram /></a></button>
                <button className='btn primary social blue'><a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer"><SlSocialLinkedin /></a></button>
                <button className='btn primary social blue'><a href={socialMedia.whatsapp} target="_blank" rel="noopener noreferrer"><SiWhatsapp /></a></button>
              </div>
            </div>
          </div>

          <div className="form-container w-full lg:w-1/2 h-full">
            {/* <form onSubmit={handleOnSubmit} className='flex flex-col justify-between absolute left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 lg:top-64 bg-light-1 dark:bg-dark-3 w-[376px] h-[654px] lg:w-[476px] lg:h-[754px] p-10'>
              <h3>Send me a message</h3>
              <fieldset>
                <label htmlFor="from_name">Your name</label>
                <input id="from_name" name="from_name" type="text" placeholder="Ex: Jordan Peterson" required />
              </fieldset>

              <fieldset>
                <label htmlFor="from_email">Your email</label>
                <input id="from_email" name="from_email" type="email" placeholder="Ex: paulolopes@gmail.com" required />
              </fieldset>

              <fieldset>
                <label htmlFor="from_phone">Your phone number</label>
                <input type="tel" id="from_phone" name="from_phone" placeholder="Ex: +41 078 798 95 33" required />
              </fieldset>

              <fieldset>
                <label htmlFor="message">Comments</label>
                <textarea id="message" name="message" rows="6" placeholder="What do you need help with? What challenges you have?" required></textarea>
              </fieldset>
              {stateMessage && <span>{stateMessage}</span>}
              <button className='btn small blue' type='submit' disabled={isSubmitting} >Send</button>
            </form> */}
            <figure className="absolute left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 lg:top-64 w-[376px] h-[654px] lg:w-[476px] lg:h-[754px]">
              <img className='object-cover w-full h-full rounded-md drop-shadow-2xl' src={meHeader} alt="paulo reizinho" />
            </figure>
          </div>
        </div>
      </header>
      <section className='h-[640px] lg:h-[20vh]'></section>
    </>
  )
}

export default Contact