/* eslint-disable react/jsx-no-undef */
import {Link} from 'react-router-dom'
import aboutImg from '../../assests/images/about.png'
import aboutcardImg from '../../assests/images/about-card.png'

const About = () => {
    return <section>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">

                {/*=====About Img=======  */}
                <div className=" relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img src={aboutImg} alt="" />
                    <div className=" absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                        <img src={aboutcardImg} alt="" />
                    </div>
                </div>

                {/*=====About Content ========== */}
                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                <h2 className='heading'>Proud to one of the Indias Best</h2>
                <p className='text_para'>For 30Years in a row ,Indian News and Report has recognized us as one of the publics hospital in the nation and #1 in the Delhi ,Mumbai ,Jaipur ,Banglore ,Srinagar,Bhopal and to Many Metro cities and Urban Areas.</p>

                <p className="text_para mt-[30px]">
                    Our best is something we strive for each day, caring for our patients-not looking back at what we accomplished but towards what we can do tomrrow.Providing the best.
                </p>
                <Link to ="/"><button className="btn">Learn More</button></Link>
                </div>

            </div>
        </div>
    </section>


}

export default About
