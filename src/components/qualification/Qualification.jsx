import React from 'react'
import './qualification.css'
import { useState } from 'react'

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
    <section className="qualification section" id='qualification'>
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My Experiences</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>
                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
              </div>

                <div className="qualification__sections">
                    {/* content 1*/}
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"} >
                        {/* content 1 data 1*/}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">AUT University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/* content 1 data 2 */}
                       <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">UI Design</h3>
                                <span className="qualification__subtitle">Auckland University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present
                                </div>
                            </div>
                        </div>
                        {/* content 1 data 3 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">UX Design</h3>
                                <span className="qualification__subtitle">WhiteCliffe University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/* content 1 data 4 */}
                       <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">AI Design</h3>
                                <span className="qualification__subtitle">Dev Academy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present
                                </div>
                            </div>

                            
                        </div>
                    </div>

                    {/* content 2 */}
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}
                    onClick={() => toggleTab(2)}>
                        {/* content 2 data 1 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Intern Engineer</h3>
                                <span className="qualification__subtitle">Xero</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/* content 2 data 2 */}
                       <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Mobile Engineer</h3>
                                <span className="qualification__subtitle">Trademe</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present
                                </div>
                            </div>

                            
                        </div>
                        {/* content 3 data 3 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">UI/UX Designer</h3>
                                <span className="qualification__subtitle">Freelancing</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Qualification