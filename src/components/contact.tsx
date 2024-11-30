'use client'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import "../styles/contact.css"

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div className="contact-grid md:grid-cols-2">
        <div className="contact-space">
          <h2 className="contact-heading" data-aos='zoom-in-up'>
            Get In Touch
          </h2>
          <p className="contact-text">Drop me a line,give me a call,or send me a message b submitting the form..

          </p>
          <div className='contact-flex'>
            <BsTelephone size={30} />
            0305-2108570
          </div>
          <div className='contact-flex'>
            <AiOutlineMail size={30} />
            saleemtooba365@gmail.com
          </div>
        </div>
        <div className="contact-space">
          <div className="form" data-aos='zoom-in-down'>
            <label htmlFor="name">Name:</label>
            <input type="text" className='input-field' id='name' />
          </div>
          <div className="form" data-aos='zoom-in-down'>
            <label htmlFor="email">E-mail:</label>
            <input type="text" className='input-field' id='email' />
          </div>
          <div className='form' data-aos='zoon-in-down'>
            <label htmlFor="message">Message</label>
            <textarea className='textarea-field' id='msg' rows={6}></textarea>
          </div>
          <button className="btn" data-aos="fade-right">
            Send
          </button>
        </div>
      </div>

    </div>
  )
}

export default Contact