
import './App.css';

import 'aos/dist/aos.css'

import profileImage from "./../src/Images/Snapchat-1768599857.jpg"
import { useState, useRef, useEffect } from 'react';
import javaImage from "./../src/Images/Java.jpg";
import cppImage from "./../src/Images/cpp.jpg";
import htmlImage from "./../src/Images/html.jpg"
import cssImage from "./../src/Images/css.jpg"
import jsImage from "./../src/Images/js.jpg"
import mongoImage from "./../src/Images/mongo.jpg"
import sqlImage from "./../src/Images/mysql.jpg"
import reactImage from "./../src/Images/react.jpg"
import expressImage from "./../src/Images/express.jpg"
import nodeImage from "./../src/Images/node.jpg"
import servImage from "./../src/Images/servlet.jpg"
import jspImage from "./../src/Images/jsp.jpg"
import vsImage from "./../src/Images/vscode.jpg"
import eclipseImage from "./../src/Images/eclipse.jpg"
import ecommerceprojectImage from "./../src/Images/ecom1.png"
import smpImage from "./../src/Images/AdminLogin.png"
import chatImage from "./../src/Images/chat1.png"
import inotebookImage from "./../src/Images/note1.png"
import image1 from "./../src/Images/602575.png"
import image2 from "./../src/Images/737474.png"
import image3 from "./../src/Images/1033283.jpg"
import tailwindImage from "./../src/Images/tailwind.jpg"
import smpimage1 from "./../src/Images/AdminLogin.png"
import smpimage2 from "./../src/Images/AddComplaint.png"
import smpimage3 from "./../src/Images/Departments.png"
import smpimage4 from "./../src/Images/VeiwComplaints.png"

import ecomimage1 from "./../src/Images/ecom1.png";
import ecomimage2 from "./../src/Images/ecom2.png";
import ecomimage3 from "./../src/Images/ecom3.png";
import ecomimage4 from "./../src/Images/ecom4.png";
import ecomimage5 from "./../src/Images/ecom5.png";
import ecomimage6 from "./../src/Images/ecom6.png";
import ecomimage7 from "./../src/Images/ecom7.png";

import chat1 from "./../src/Images/chat1.png"
import chat2 from "./../src/Images/chat2.png"
import chat3 from "./../src/Images/chat3.png"
import chat4 from "./../src/Images/chat4.png"
import chat5 from "./../src/Images/chat5.png"

import chat7 from "./../src/Images/chat7.png"
import chat8 from "./../src/Images/chat8.png"


import note1 from "./../src/Images/note1.png"
import note2 from "./../src/Images/note2.png"
import note3 from "./../src/Images/note3.png"
import note4 from "./../src/Images/note4.png"




// import sampleImage1 from "./../src/Imag


const backgroundImagesHome = [image1, image2, image3]
const backgroundImagesSMP = [smpimage1, smpimage2, smpimage3, smpimage4];
const backgroundImageEcom = [ecomimage1, ecomimage2, ecomimage3, ecomimage4, ecomimage5, ecomimage6, ecomimage7];
const backgroundImageChat = [chat1,chat2,chat3,chat4,chat5,chat7,chat8];
const backgroundImageNote = [note1,note2,note3,note4];



function App() {


  const [softwareClick, setSoftwareClick] = useState(true);

  const [frameworkClick, setFremeworkClick] = useState(true);
  const [languageClick, setLanguageClick] = useState(true);
  const [backendClick,setBackendClick]=useState(true);
  const [homeIndex, setHomeIndex] = useState(0);
  const [smpIndex, setSmpIndex] = useState(0);
  const [ecomIndex, setEcomIndex] = useState(0);
  const [chatIndex, setChatIndex] = useState(0);
  const [noteIndex, setNoteIndex] = useState(0);

  const [senderName, setSenderName] = useState();
  const [senderEmail, setSenderEmai] = useState();
  const [subject, setSubject] = useState();
  const [Message, setMessage] = useState();
  const [eduElement ,setEduAnimate]=useState(false);

  const mailRef = useRef(document.getElementById(''));

  const ecomvideoRef=useRef(null);

  const [mailStatus, setMailStatus] = useState('');
  
  const [animate, setAnimate] = useState(false);
  const [skillElement,setskillAnimate]=useState(false);
  const [projectElement,setProjectAnimate]=useState(false);
  const [contactElement,setContactAnimate]=useState(false);



  useEffect(()=>{
  
    // return ()=>{ ele.removeEventListener('scroll',handleScroll)}

  },[]);

  const dropdown = (event) => {
    setSoftwareClick(!softwareClick);

    setLanguageClick(true);
    setFremeworkClick(true);
    setBackendClick(true);


    console.log(softwareClick, event.target);

    const frameworkdropdowm = document.getElementById('frameworkdropdowm');
    const framework = document.getElementById('framework');
    const languageElement = document.getElementById('language');
    const languagedropdown = document.getElementById('languagedropdown');
    const softwareelement = document.getElementById('software');
    const softwaredropdown = document.getElementById('softwaredropdown');
    const backenddropdowm = document.getElementById('backenddropdown');
    const backend=document.getElementById('backend');
    backenddropdowm.classList.remove('show-backend');
    backend.classList.remove('active');
    languageElement.classList.remove('active');
    languagedropdown.classList.remove('show');
    framework.classList.remove('active');
    frameworkdropdowm.classList.remove('show-framework');


    if (softwareClick === true) {


      softwaredropdown.classList.add('show-software')
      softwareelement.classList.add('active');




    } else {

      softwareelement.classList.remove('active');
      softwaredropdown.classList.remove('show-software')

    }




  }


  const dropdownBackend = ()=>{

    const softwareelement = document.getElementById('software');
    const softwaredropdown = document.getElementById('softwaredropdown');
    const languageElement = document.getElementById('language');
    const languagedropdown = document.getElementById('languagedropdown');
    const frameworkdropdowm = document.getElementById('frameworkdropdowm');
    const backenddropdowm = document.getElementById('backenddropdown');
    const backend=document.getElementById('backend');
    frameworkdropdowm.classList.remove('show-framework');
    
    const framework = document.getElementById('framework');
    framework.classList.remove('active');
    softwaredropdown.classList.remove('show-software');
  
    softwareelement.classList.remove('active');
    languageElement.classList.remove('active');
    languagedropdown.classList.remove('show');
    
    setLanguageClick(true);
    setSoftwareClick(true);
    setFremeworkClick(true);

    setBackendClick(!backendClick)
    if (backendClick=== true) {
      backend.classList.add('active');
      backenddropdowm.classList.add('show-backend');


    } else {
      backend.classList.remove('active');
      backenddropdowm.classList.remove('show-backend');

    }


  }

  const dropdownLanguage = () => {

    const frameworkdropdowm = document.getElementById('frameworkdropdowm');
    const framework = document.getElementById('framework');



    const softwareelement = document.getElementById('software');
    const softwaredropdown = document.getElementById('softwaredropdown');
    const languageElement = document.getElementById('language');
    const languagedropdown = document.getElementById('languagedropdown');
    const backenddropdowm = document.getElementById('backenddropdown');
    const backend=document.getElementById('backend');
    backenddropdowm.classList.remove('show-backend');
    backend.classList.remove('active');
    softwaredropdown.classList.remove('show-software');
    softwareelement.classList.remove('active');
    framework.classList.remove('active');
    frameworkdropdowm.classList.remove('show-framework');
    setSoftwareClick(true)
    setFremeworkClick(true);
    setBackendClick(true);

    setLanguageClick(!languageClick);
    if (languageClick === true) {
      languageElement.classList.add('active');
      languagedropdown.classList.add('show');




    } else {
      languageElement.classList.remove('active');
      languagedropdown.classList.remove('show');



    }

  }

  const dropdownFrameworks = () => {

    const softwareelement = document.getElementById('software');
    const softwaredropdown = document.getElementById('softwaredropdown');
    const languageElement = document.getElementById('language');
    const languagedropdown = document.getElementById('languagedropdown');
    const frameworkdropdowm = document.getElementById('frameworkdropdowm');
    const backenddropdowm = document.getElementById('backenddropdown');
    const backend=document.getElementById('backend');
    backenddropdowm.classList.remove('show-backend');
    backend.classList.remove('active');
    const framework = document.getElementById('framework');
    softwaredropdown.classList.remove('show-software');
   
    softwareelement.classList.remove('active');
    languageElement.classList.remove('active');
    languagedropdown.classList.remove('show');
    
    setLanguageClick(true);
    setSoftwareClick(true);
    setBackendClick(true);

    setFremeworkClick(!frameworkClick)
    if (frameworkClick === true) {
      framework.classList.add('active');
      frameworkdropdowm.classList.add('show-framework');


    } else {
      framework.classList.remove('active');
      frameworkdropdowm.classList.remove('show-framework');

    }

  }


  const closeProjectContainer = (e) => {
    const element = document.getElementById('project-extent-container-smp');
   
    element.classList.remove('pop');
    
  }

  const SmpDropDown = (e) => {
    // console.log(e.target.value)
    const element = document.getElementById('project-extent-container-smp');
    
    const elementNote = document.getElementById('project-extent-container-note');
    elementNote.classList.remove('pop');
    const elementSmp = document.getElementById('project-extent-container-smp');
    elementSmp.classList.remove('pop');
    const elementEcom = document.getElementById('project-extent-container-ecom');
    elementEcom.classList.remove('pop');
  
    element.classList.add('pop');
    


  }

  const closeNoteContainer = (e) => {


    const element = document.getElementById('project-extent-container-note');
    // element.classList.add('hidden');
    element.classList.remove('pop');
  }

  const noteDropDown = (e) => {

    const element = document.getElementById('project-extent-container-note');
   
    const elementchat = document.getElementById('project-extent-container-chat');
    elementchat.classList.remove('pop');
    const elementSmp = document.getElementById('project-extent-container-smp');
    elementSmp.classList.remove('pop');
    const elementEcom = document.getElementById('project-extent-container-ecom');
    elementEcom.classList.remove('pop');
    element.classList.add('pop');

  }


  const closeEcommerceContainer = (e) => {

    const element = document.getElementById('project-extent-container-ecom');
    // element.classList.add('hidden');
    element.classList.remove('pop');

  }

  const ecomDropDown = (e) => {
    const element = document.getElementById('project-extent-container-ecom');
    // element.classList.remove('pop');
    const elementchat = document.getElementById('project-extent-container-chat');
    elementchat.classList.remove('pop');
    const elementNote = document.getElementById('project-extent-container-note');
    elementNote.classList.remove('pop');
    const elementSmp = document.getElementById('project-extent-container-smp');
    elementSmp.classList.remove('pop');
    element.classList.add('pop');
  }

  const closeChatContainer = (e) => {

    const element = document.getElementById('project-extent-container-chat');
   
    element.classList.remove('pop');

  }

  const cahtDropDown = (e) => {
    const element = document.getElementById('project-extent-container-chat');

    const elementNote = document.getElementById('project-extent-container-note');
    elementNote.classList.remove('pop');
    const elementSmp = document.getElementById('project-extent-container-smp');
    elementSmp.classList.remove('pop');
    const elementEcom = document.getElementById('project-extent-container-ecom');
    elementEcom.classList.remove('pop');
    element.classList.add('pop');
    console.log(element.classList);
  }








  const downloadResume = () => {

    const url = "https://drive.google.com/file/d/1hrP-FSz8V0yKzpv8215MnnQTeHn2gtnF/view?usp=share_link";
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.pdf';
    link.target = "_blank";
    link.rel="noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }


  const closeMailPopup = () => {
    console.log(mailRef);
    if (mailRef) {
      mailRef.current.classList.add('hidden');
    }
  }


  const Reset = () => {
    setMessage('');
    setSenderName('');
    setSenderEmai('');
    setSubject('');
  }


  const sendMail = async () => {
    const apiKey = process.env.REACT_APP_SENDINBLUE_API_KEY;
    const mail = process.env.REACT_APP_MAIL;
    console.log(apiKey)
    console.log(process.env)




    const url = 'https://api.brevo.com/v3/smtp/email';

    const data = {
      sender: {
        name: senderName,
        email: senderEmail
      },
      to: [{ email: mail }],
      subject: subject,
      htmlContent: `<html><body><h1>${Message}</h1></body></html>`,

    };

    try {

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': apiKey,

        },
        body: JSON.stringify(data)

      })

      const result = await response.json();

      if (mailRef) {
        mailRef.current.classList.remove('hidden');
        console.log(result)
        if (result.messageId) {


          setMailStatus('Mail Sent SuccessFully ')


        }
        else {

          setMailStatus("Something Went Wrong !!! Please Resend It..... ")

        }
      }

      Reset();




    } catch (err) {
      console.log(err)
    }

  }

  const showMenu = () => {
    const leftelement = document.getElementById('left-container');
    leftelement.style.display = "block";

  }

  const ShowAbout = ()=>{

    const ele = document.getElementById('about');
    ele.classList.add('animate');
    console.log('in about');

  }

  useEffect(()=>{

    const ele = document.getElementById('right-sidecontainer');
    const aboutElement = document.getElementById('about');
    ele.addEventListener('scroll',function(){
    
    //  console.log(aboutElement.getBoundingClientRect().bottom < ele.getBoundingClientRect().bottom)
    if(ele.getBoundingClientRect().width <= 320){
      if(aboutElement.getBoundingClientRect().bottom - 330 < ele.getBoundingClientRect().bottom ){
        setAnimate(true);
        }
       

    }else{
      if(aboutElement.getBoundingClientRect().bottom - 180 < ele.getBoundingClientRect().bottom ){
        setAnimate(true);
        }

    }
    
    
    });
    

  },[])


  useEffect(()=>{

    const ele = document.getElementById('right-sidecontainer');
    const eduElement = document.getElementById('education');
    ele.addEventListener('scroll',function(){
    
    //  console.log(eduElement.getBoundingClientRect().bottom , ele.getBoundingClientRect().bottom)
     if(eduElement.getBoundingClientRect().bottom - 600 < ele.getBoundingClientRect().bottom ){
     setEduAnimate(true);
     }
   
    
    });
    

  },[])

  useEffect(()=>{

    const ele = document.getElementById('right-sidecontainer');
    const skillElement = document.getElementById('skill');
    ele.addEventListener('scroll',function(){
    
    //  console.log(skillElement.getBoundingClientRect().bottom , ele.getBoundingClientRect().bottom)
     if(skillElement.getBoundingClientRect().bottom  < ele.getBoundingClientRect().bottom ){
     setskillAnimate(true);
     }
   
    
    });
    

  },[])

  useEffect(()=>{

    const ele = document.getElementById('right-sidecontainer');
    const projectElement = document.getElementById('project');
    ele.addEventListener('scroll',function(){
    
    //  console.log(projectElement.getBoundingClientRect().bottom , ele.getBoundingClientRect())
     if(ele.getBoundingClientRect().width <= 320){
      if(projectElement.getBoundingClientRect().bottom - 1300  < ele.getBoundingClientRect().bottom ){
        setProjectAnimate(true);
       
        }

     }
     else
     {

      if(projectElement.getBoundingClientRect().bottom - 700  < ele.getBoundingClientRect().bottom ){
        setProjectAnimate(true);
       
        }

     }
    
   
    
    })
    

  },[])

  useEffect(()=>{

    const ele = document.getElementById('right-sidecontainer');
    const contacttElement = document.getElementById('contact');
    ele.addEventListener('scroll',function(){
    
    //  console.log(contacttElement.getBoundingClientRect().bottom , ele.getBoundingClientRect().bottom)
     if(contacttElement.getBoundingClientRect().bottom -380   < ele.getBoundingClientRect().bottom ){
     setContactAnimate(true);
     }
   
    
    })
    

  },[])


  useEffect(() => {

    const interval = setInterval(() => {

      setHomeIndex(homeIndex => (homeIndex + 1) % backgroundImagesHome.length)
    }, 5000)

    return () => clearInterval(interval);
  }, [])

  useEffect(() => {

    const interval = setInterval(() => {

      setSmpIndex(smpIndex => (smpIndex + 1) % backgroundImagesSMP.length)

    }, 5000)

    return () => clearInterval(interval);

  }, [])



  useEffect(() => {

    const interval = setInterval(() => {

      setEcomIndex(ecomIndex => (ecomIndex + 1) % backgroundImageEcom.length)
     
    }, 5000)

    return () => clearInterval(interval);

  }, [])


  
  useEffect(() => {

    const interval = setInterval(() => {

      setChatIndex(chatIndex => (chatIndex + 1) % backgroundImageChat.length)
      
    }, 5000)

    return () => clearInterval(interval);

  }, [])

  useEffect(() => {

    const interval = setInterval(() => {

      setNoteIndex(noteIndex => (noteIndex + 1) % backgroundImageNote.length)
      
    }, 5000)

    return () => clearInterval(interval);

  }, [])

  useEffect(()=>{
    ecomvideoRef && ecomvideoRef.current && ecomvideoRef.current.play().catch((err)=>{
      console.log(err);
    })

  },[])








  return (
    <>
      <div className="App">
        <div className='maincontainer w-full h-fit border fixed flex' >
          <div id='left-container' className=' leftside-container w-72 ml-48 h-fit  border-gray-700' style={{ backgroundColor: "rgb(242, 243, 247)", height: '800px' }}>
            <div className='profile-container w-full mt-14 h-fit justify-center text-center'>
              <div className='image-container'>
                <div className='w-40 h-40 m-auto rounded-full bg-black'>
                  <img src={profileImage} alt="" className='w-full h-full  rounded-full' />
                </div>
              </div>
              <div className='text-center'>
                <div className='mt-3 font-mono '>
                  <h2>Jay Bodade</h2>
                </div>
                <div className='mt-2 font-mono text-sm'>
                  <h3> C.S Student</h3>
                </div>

              </div>

            </div>
            <div className='w-full h-fit mt-8' >
              <nav className='navbar w-full h-fit  justify-center text-center'>
                <ul className=' font-mono text-sm' style={{ fontSize: '14px' }} >
                  <li className='mt-5 mb-4 hover:cursor-pointer   ' ><a href="#home">HOME</a> </li>
                  <li className='mt-5 mb-4 hover:cursor-pointer ' onClick={ShowAbout}><a href='#about'>ABOUT</a></li>
                  <li className='mt-5 mb-4 hover:cursor-pointer '><a href='#education'>EDUCATION & SKIILS</a></li>
                  {/* <li className='mt-5 mb-4 hover:cursor-pointer '><a href="#blog">BLOG</a> </li> */}
                  <li className='mt-5 mb-4 hover:cursor-pointer '><a href="#project">PROJECTS</a> </li>
                  <li className='mt-5 mb-4 hover:cursor-pointer ' onClick={downloadResume}>RESUME</li>
                  <li className='mt-5 mb-4 hover:cursor-pointer '><a href="#contact">CONTACT</a></li>

                </ul>
              </nav>
            </div>
            <div className='w-full ht-fit'>
            </div>

          </div>
          <div className='right-main-container'>
            <div id="right-sidecontainer" className='rightside-container   w-full overflow-y-scroll ' style={{ width: '', height: '800px', scrollBehavior: 'smooth' }} >
              <div className='rightcont w-96  shadow-sm ' style={{ width: '900px' }}>
                <div id="home" className='rightside-first-container bg-cyan -mt-9 w-full  ' style={{ height: '786px' }}>
                  <div id="home-image " alt="" className=' shadow-2xl'   style={{
                    width: '101%', height: '100%', opacity: '0.87', backgroundImage: `url(${backgroundImagesHome[homeIndex]})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',

                  }} ></div>
                   <div className='heading-name-container  animate-on-scroll  -mt-14 w-100 h-fit   ' >
                    <div className="navigator" onClick={showMenu}>

                    </div>
                    <div className='w-full h-24 '>
                      <h4 className='text-black text-lg w-fit h-fit px-2  justify-center text-center font-mono m-auto py-5   ' style={{ height: '', fontSize: '29px' }} >Hello ,I am Jay a Full Stack Web Developer</h4>
                    </div>
                    <div className=' symbol-container w-full h-20  '>
                      <div className=' w-full h-full flex'>
                        <a className=' m-auto' href="https://instagram.com/jay_bodade.243?igshid=ZDdkNTZiNTM=" target='_blank' l="noreferrer"><i className='sybmol fa fa-instagram m-auto hover:cursor-pointer' style={{ fontSize: '29px', color: 'black' }} >

                        </i></a>
                        <a href="https://www.linkedin.com/in/jay-bodade-b27083223/" className='m-auto' target='_blank' l="noreferrer">  <i className='sybmol fa fa-linkedin m-auto' style={{ fontSize: '29px', color: 'black' }}></i></a>
                        <a href="https://github.com/JayBodade" className='m-auto' target='_blank' l="noreferrer"> <i className='sybmol fa fa-github m-auto' style={{ fontSize: '29px', color: 'black' }}></i></a>
                      </div>

                    </div>
                    <div className='download-resume w-full h-24 '>
                      <button><div className='w-36 h-10 mt-6 m-auto border border-black  ' onClick={downloadResume}>
                        <h3 className='m-auto mt-1 text-black '>Download CV</h3>
                      </div></button>
                    </div>
                  </div>
                </div>
                <div className='right-side-second-container w-full h-fit  ' style={{ height: '780px' }}>
                  <section id='about'  className={`right-side-second-section fade-left-to-right ${animate ? 'animate' : ""}  mt-16 `}>
                    <div className='righit-side-second-text w-full h-fit mt-10  x py-24 border-black '>
                      <div className='text  ml-4 '>
                        <h5>About Us</h5>
                      </div>
                      <div className={`about-descrption mt-7 ml-8  text-left mb-10 fade-left-to-right ${animate ? 'animate' : ""}`}>
                        <p className={`fade-left-to-right ${animate ? 'animate' : ""}`}>Hello, my name is Jay and I am a computer science student with a passion for web development. As a skilled web developer, I have honed my skills in languages such as HTML, CSS, JavaScript, and Node, and I have experience working with various web development frameworks such as React, Tailwind CSS , ExpressJS.</p>
                        <br />
                        <p className={`fade-left-to-right ${animate ? 'animate' : ""}`}>I am dedicated to delivering high-quality, user-friendly websites that meet the needs and exceed the expectations of my clients. I am a quick learner and a problem solver, always looking for ways to improve my skills and tackle new challenges.</p>
                        <br />
                        <p className={`fade-left-to-right ${animate ? 'animate' : ""}`}>In addition to my technical skills, I am a strong communicator and a team player. I value collaboration and believe that open communication and constructive feedback are key to successful projects.

                        </p>
                        <br />
                        <p className={`fade-left-to-right ${animate ? 'animate' : ""}`}>Thank you for taking the time to read my about me description. I look forward to hearing from you and discussing how I can help bring your web development vision to life.</p>
                      </div>
                      {/* <div className='right-side-containers-about mb-20 flex mt-36'>
                      <div className='aboutblocks w-44 h-40 border m-auto shadow-2xl  border-b-blue-700'>
                        <div className='container-text' >
                          <div className=' ml-2 mt-3'>
                            <i className='text-lg' style={{ fontSize: '30px' }}>Icon</i>
                          </div>
                          <div className=' m-auto w-full h-fit  justify-start text-center mt-7 '  >
                            <h5 className='font-mono '>Web Developer</h5>

                          </div>


                        </div>
                     

                     
                      </div>
                     
                    </div> */}

                    </div>

                  </section>
                </div>

                <div className='rigth-side-third-container w-full h-fit mb-52 ' >
                  <section id='education' className={`rigth-side-education-section fade-left-to-right ${eduElement?'animate':''} w-full h-fit  `}>
                    <div className='education-heading w-full  px-4 py-3'>
                      <h3  >Education</h3>

                    </div>
                    <div className='education-rows mt-8 opacity-1 visible '>
                      <div className={`education-row-content w-150 h-16 border flex border-white  bg-gray-200 mt-1 mb-1 fade-left-to-right ${eduElement?'animate':''} ml-2`}>
                        <div className='education-row-text w-3/4 '>
                          <div className='text w-fit h-fit  px-4 py-5'>
                            <h1>BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE</h1>

                          </div>

                        </div>
                        <div className='education-dropdown-container  ml-4 w-52'>
                          <div className='m-auto  w-1/2 py-3 mt-1 justify-center text-center'>
                            <h3 className='font-mono'>2019 - 2023 </h3>
                          </div>
                        </div>

                      </div>
                      <div>
                       <div className={`education-row-content w-150 h-16 border flex border-white  bg-gray-200 mt-1 mb-1 fade-left-to-right ${eduElement?'animate':''} ml-2`}>
                        <div className='education-row-text w-3/4 '>
                            <div className='text w-fit h-fit  px-4 py-5'>
                              <h1>HIGHER SECONDARY SCHOOL (12th) </h1>
                            </div>
                          </div>
                          <div className='education-dropdown-container  ml-4 w-52'>
                            <div className='m-auto  w-1/2 py-3 mt-1 justify-center text-center'>
                              <h3 className='font-mono' >2018 - 2019</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`education-row-content w-150 h-16 border flex border-white  bg-gray-200 mt-1 mb-1 fade-left-to-right ${eduElement?'animate':''} ml-2`}>
                            <div className='education-row-text w-3/4 '>
                          <div className='text w-fit h-fit  px-4 py-5'>
                            <h1>SECONDARY SCHOOL CERTIFICATE (10th)</h1>
                          </div>
                        </div>
                        <div className='education-dropdown-container  ml-4 w-52'>
                          <div className='m-auto  w-1/2 py-3 mt-1 justify-center text-center'>
                            <h3 className="font-mono">2016 - 2017</h3>
                          </div>
                        </div>
                      </div>
                      {/* <div className='education-row-content w-150 h-16 border flex border-white  bg-gray-200 mt-1 mb-1 ml-2'>
                    <div className='education-row-text w-3/4 '>
                      <div className='text w-fit h-fit  px-4 py-5'>
                        <h1>BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE</h1>
                      </div>
                    </div>
                    <div className='education-dropdown-container  ml-4 w-52'>
                      <div className='m-auto  w-1/2 py-3 mt-1 justify-center text-center'>
                     <button > <h3 className='hover:cursor-pointer '  ><i className="	fa fa-angle-down"></i></h3></button>
                      </div>
                    </div>

                  </div> */}

                    </div>

                    <div id="skill" className={`skill-heading w-full  px-4 py-3 mt-12 fade-left-to-right ${skillElement?'animate':''}`}>
                      <h3>Skills</h3>


                    </div>

                    <div className='skill-rows mt-8'>
                      <div>


                        <div id="language" className={`skill-row-content w-150 h-16 border flex border-white  fade-left-to-right ${skillElement?'animate':''} bg-gray-200 mt-1 mb-1 ml-2`}>
                          <div className='skill-row-text w-3/4 '>
                            <div className='text w-fit h-fit  px-4 py-5'>
                              <h1>LANGUAGES</h1>
                            </div>
                          </div>
                          <div className='skill-dropdown-container  ml-4 w-52'>
                            <div className='m-auto  w-1/2 py-3 mt-1 justify-center text-center'>
                              <button className='button-drop-down'> <h3 className='hover:cursor-pointer '  ><i className={languageClick ? "fa fa-angle-down" : "fa fa-angle-up"} onClick={dropdownLanguage}></i></h3></button>
                            </div>
                          </div>
                        </div>
                        <div id='languagedropdown' className="dropdown-languages-container sizeContaine ml-2 border border-gray-300">
                          <div className='dropdown-skill-container-language flex w-full h-full flex-wrap '>
                            <div className='m-auto  langauge-row-conatiner  flex mt-4'><img src={javaImage} className='-mt-3' alt="" width={'30px'} height={'30px'} /><h1 className='m-auto mt-1'>Java</h1></div>
                            <div className='m-auto  langauge-row-conatiner flex  w-fit mt-4'><img src={cppImage} alt="" width={'30px'} height={'30px'} /><h1 className='m-auto'> Cpp</h1></div>
                                <div className='m-auto langauge-row-conatiner flex  w-fit mt-4'><img src={jsImage} alt="" width={'30px'} height={'30px'} /><h1 className='m-auto'> Javascript</h1></div>
                          </div>
                        </div>

                      </div>
                      <div>
                        <div id="framework" className={`skill-row-content w-150 h-16 border flex border-white  fade-left-to-right ${skillElement?'animate':''} bg-gray-200 mt-1 mb-1 ml-2`}>
                          <div className='skill-row-text w-3/4 '>
                            <div className='text w-fit h-fit  px-4 py-5'>
                              <h1>FRONTEND</h1>
                            </div>
                          </div>
                          <div className='skill-dropdown-container  ml-4 w-52'>
                            <div className='m-auto  w-1/2 py-3 mt-1 justify-center text-center'>
                              <button className='button-drop-down' > <h3 className='hover:cursor-pointer '  ><i className={frameworkClick ? "fa fa-angle-down" : "fa fa-angle-up"} onClick={dropdownFrameworks} ></i></h3></button>
                            </div>
                          </div>
                        </div>
                        <div id='frameworkdropdowm' className="dropdown-framework-container sizeContaine ml-2 border border-gray-300">
                          <div id="dropdown-framework-container" className=' dropdown-skill-container-framework flex w-full h-full '>
                            <div className='flex w-full ml-3 m-auto '> <img src={reactImage} alt="" width={'35px'} height={'35px'} /> <h1 className=''>React</h1></div>
                             <div className='flex w-full ml-3 m-auto'> <img src={tailwindImage} alt="" width={'35px'} height={'35px'} /> <h1 className='mt-1'>Tailwind</h1></div>
                             <div className='flex w-full ml-3 m-auto'><img src={htmlImage} alt="" width={'30px'} height={'30px'} /><h1 className=''> Html</h1></div>
                            <div className='flex w-full ml-3 m-auto'><img src={cssImage} alt="" width={'30px'} height={'30px'} /><h1 className=''> CSS</h1></div>
                       
                          </div>
                        </div>
                      </div>
                      <div>
                        <div id="backend" className={`skill-row-content w-150 h-16 border flex border-white  fade-left-to-right ${skillElement?'animate':''} bg-gray-200 mt-1 mb-1 ml-2`}>
                          <div className='skill-row-text w-3/4 '>
                            <div className='text w-fit h-fit  px-4 py-5'>
                              <h1>BACKEND</h1>
                            </div>
                          </div>
                          <div className='skill-dropdown-container  ml-4 w-52'>
                            <div className='m-auto  w-1/2 py-3 mt-1 justify-center text-center'>
                              <button className='button-drop-down' > <h3 className='hover:cursor-pointer '  ><i className={backendClick ? "fa fa-angle-down" : "fa fa-angle-up"} onClick={dropdownBackend} ></i></h3></button>
                            </div>
                          </div>
                        </div>
                        <div id='backenddropdown' className="dropdown-framework-container sizeContaine ml-2 border border-gray-300">
                          <div id="dropdown-framework-container" className=' dropdown-skill-container-framework flex w-full h-full '>
                                <div className='flex w-full ml-3 m-auto'> <img src={expressImage} alt="" width={'35px'} height={'35px'} /> <h1 className='mt-1'>Express JS</h1></div>
                            <div className='flex w-full ml-3 m-auto'> <img src={nodeImage} alt="" width={'35px'} height={'35px'} /> <h1 className='mt-1'>Node JS</h1></div>
                            <div className='flex w-full ml-3 m-auto'> <img src={servImage} alt="" width={'35px'} height={'35px'} /> <h1 className='mt-1'>Servlet</h1></div>
                            <div className='flex w-full ml-3 m-auto'> <img src={jspImage} alt="" width={'35px'} height={'35px'} /> <h1 className='mt-1'>JSP</h1></div>
                            <div className='flex w-full ml-3 m-auto'><img src={mongoImage} alt="" width={'30px'} height={'30px'} /><h1 className='mt-1'> MongoDb</h1></div>
                            <div className='flex w-full ml-3 m-auto'><img src={sqlImage} alt="" width={'30px'} height={'30px'} /><h1 className='mt-1'> MySql</h1></div>
                  
                          </div>
                        </div>
                      </div>
                      <div>
                        <div id='software' className={`skill-row-content w-150 h-16 border flex border-white  fade-left-to-right ${skillElement?'animate':''}  bg-gray-200 mt-1 mb-1 ml-2`}>
                          <div className='skill-row-text w-3/4 '>
                            <div className='text w-fit h-fit  px-4 py-5'>
                              <h1>IDE</h1>
                            </div>
                          </div>
                          <div className='skill-dropdown-container  ml-4 w-52'>
                            <div className='m-auto  w-1/2 py-3 mt-1 justify-center text-center'>
                              <button className='button-drop-down'> <h3 className='hover:cursor-pointer '  ><i className={softwareClick ? "fa fa-angle-down" : "fa fa-angle-up"} onClick={dropdown}></i></h3></button>
                            </div>
                          </div>
                        </div>
                        <div id='softwaredropdown' className="dropdown-software-container sizeContaine ml-2 border border-gray-300">
                          <div className='dropdown-skill-container-software flex  w-full h-full'>
                            <div className='m-auto w-full flex ml-2'><img src={vsImage} alt="" width={'30px'} height={'30px'} /><h1 className=''>Visual Studio Code</h1></div>
                            <div className='m-auto w-full flex ml-2'><img src={eclipseImage} alt="" width={'30px'} height={'30px'} /> <h1 className=''>Eclipse</h1></div>

                          </div>
                        </div>
                      </div>


                    </div>
                  </section>
                </div>
                {/* <div className='blog-container w-full h-fit mt-16 mb-16'>
                <section id='blog' className='right-side-blog-section w-full h-fit'>
                  <div className='project-heading-container w-full h-10 mt-3 py-20  px-4'>
                    <h1 >Blog</h1>
                  </div>
                  <div className='right-side-blog-row-container flex w-full h-fit  mt-16 mb-10 -ml-4 py-9'>

                    {blogData.map((blog,index)=>{

                      console.log(blog);
                      return <div key={index} className='blog-row w-64 px-4 py-4 h-80 border shadow-2xl   m-auto '>
                        <img src={builder.image(blog.BlogImage.asset._ref).width(30).height(30).url()} alt="" width={'100%'} height={"10%"}/>
                        <h1>{blog.Title}</h1> 
                       
                      </div>

                    })
                    }
                   
                  </div>
                  <div className='right-side-load-more-container w-full h-fit  mt-12 mb-60 -ml-3'>
                    <div className='load-more-button w-120 m-auto  h-14'>
                      <button className='bg-blue-500 w-full h-full rounded-lg'>Load More</button>
                    </div>
                  </div>
                </section>
              </div> */}
                <div className={`project-container fade-up ${projectElement ? 'animate':''}  w-full h-fit  mb-8`}>
                  <section id='project' className='right-side-blog-section w-full h-fit py-20 '>
                    <div className='project-heading-container w-full h-10 mt-1 py-12  px-4'>
                      <h1 >Project</h1>
                    </div>
                    <div className='right-side-project-row-container flex-wrap flex w-full h-fit  mt-1 mb-32  py-9'>

                      <div className={` smphover project-row w-66  fade-up ${projectElement ? 'animate':''}  h-fit mt-2 hadow-2xl mb-6  m-auto  `}>
                        <div className='ecommerce-project w-full h-fit  '>
                          <img src={smpImage} alt="" className=' w-full hover:cursor-pointer ' style={{ height: '200px' }} onClick={SmpDropDown} />
                        </div>
                      </div>
                      <div className={`  project-row w-66  fade-up ${projectElement ? 'animate':''}  h-fit mt-2 hadow-2xl mb-6  m-auto  `}>
                        <div className='ecommerce-project w-full h-fit  '>
                          <img src={ecommerceprojectImage} alt="" className=' w-full hover:cursor-pointer ' style={{ height: '200px' }} onClick={ecomDropDown} />
                        </div>
                      </div>
                      <div className={`project-row w-66  h-fit shadow-2xl  fade-up ${projectElement ? 'animate':''}  mt-2  mb-6   m-auto  `}>
                        <div className='ecommerce-project w-full h-fit   '>
                          <img src={chatImage} alt="" className='w-full hover:cursor-pointer ' style={{ height: '200px' }} onClick={cahtDropDown} />
                        </div>
                      </div>
                      <div className={`project-row w-66 shadow-2xl  fade-up ${projectElement ? 'animate':''}   h-fit mt-2 mb-6  m-auto  `}>
                        <div className='ecommerce-project w-full h-fit '>
                          <img src={inotebookImage} alt="" className='w-full hover:cursor-pointer' style={{ height: '200px' }} onClick={noteDropDown} />
                        </div>
                      </div>


                    </div>

                  </section>


                </div>
                <div className={`contact-container w-full h-fit fade-left-to-right  ${contactElement?'animate':''} py-2 mb-20`}>
                  <section id='contact' className='right-side-contact-section w-full h-fit  py-10 '>
                    <div className='heading-contact w-full h-16 mb-4 px-4 py-4 '>
                      <h1>Get In Touch</h1>

                    </div>

                    <div className='right-side-form-container mt-16 w-full h-fit'>
                      <div className='form-container w-2/3 h-fit m-auto '>
                        <form action="" className={`fade-left-to-right  ${contactElement?'animate':''}`}>
                          <div className={`form-name-container fade-left-to-right  ${contactElement?'animate':''} m-auto bg-gray-600 w-full h-14 mt-2 mb-4`}>
                            <input className='w-full h-full focus:border-none text-black bg-gray-300 px-5' onChange={(e) => { setSenderName(e.target.value) }} value={senderName} type="text" placeholder='Name' />
                          </div>

                          <div className={`form-name-container fade-left-to-right  ${contactElement?'animate':''} m-auto bg-gray-600 w-full h-14 mt-2 mb-4`}>
                            <input className='w-full h-full text-black bg-gray-300 px-5' type="email" onChange={(e) => { setSenderEmai(e.target.value) }} value={senderEmail} placeholder='Email' />
                          </div>
                          <div className={`form-name-container fade-left-to-right  ${contactElement?'animate':''} m-auto bg-gray-600 w-full h-14 mt-2 mb-4`}>
                            <input className='w-full h-full text-black bg-gray-300 px-5' type="text" onChange={(e) => { setSubject(e.target.value) }} value={subject} placeholder='Subject' />
                          </div>
                          <div className={`form-name-container fade-left-to-right  ${contactElement?'animate':''} m-auto w-full h-fit mt-2 mb-4`}>
                            <textarea className='w-full h-full py-6 text-black bg-gray-300 px-5' rows={'7'} type="text" value={Message} onChange={(e) => { setMessage(e.target.value) }} placeholder='Message' />
                          </div>
                          <div className={`form-submit-button flex w-full h-11 fade-left-to-right  ${contactElement?'animate':''}  `}>
                            <button className={`bg-blue-500 w-1/3 h-full m-auto rounded-md fade-left-to-right  ${contactElement?'animate':''}`} onClick={(e) => { e.preventDefault(); sendMail() }}>Submit</button>
                            <button className={`bg-blue-500 w-1/3 h-full m-auto rounded-md fade-left-to-right  ${contactElement?'animate':''} `} onClick={Reset}> Reset</button>
                          </div>


                        </form>

                      </div>

                    </div>

                  </section>

                </div>


              </div>

              <div>

              </div>
            </div>
          </div>
          <div id='project-extent-container-smp' className='pop-up-project-conatiner   ml-12 m-auto mt-4 left-72 absolute bg-white rounded-lg shadow-2xl h-fit w-150 '>
            <div className='nav-heading-container w-full h-fit flex flex-row px-2 py-4'>
              <div className="heaing m-auto w-3/4">SMART MAINTENANCE PORTAL</div>
              <div className="close-container m-auto"><i className='fa fa-close hover:cursor-pointer' onClick={closeProjectContainer}></i></div>
            </div>
            <div className='projectContainer w-full h-fit hover:cursor-pointer'>
              <div className='project-Images-container-smp m-auto shadow-lg w-full h-fit '>
                <div className='smp-project-images' alt="" style={{
                  backgroundImage: `url(${backgroundImagesSMP[smpIndex]})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%',

                }} ></div>
              </div>
              <div className='project-description-container w-full text-center justify-center h-fit px-4 py-4 '>
                <p> It is a full fledged website in which a user can send request/complaint to a particular department like water department , light department ... etc which are added by admin and after completing the request / complaint of the user it get its response through email from that particluar department which user have send a request.</p>

                <br />
                <p><b>Technology :</b> JAVA , Html , CSS , Servlet , JSP , MySql , XAMPP(Server for database) </p>
              </div>
            </div>
          </div>

          <div id='project-extent-container-ecom' className='pop-up-project-conatiner ml-12 m-auto mt-4 left-72 absolute bg-white rounded-lg shadow-2xl h-fit w-150 '>
            <div className='nav-heading-container w-full h-fit flex flex-row px-2 py-4'>
              <div className="heaing m-auto w-3/4">E-COMMERCE</div>
              <div className="close-container m-auto"><i className='fa fa-close hover:cursor-pointer' onClick={closeEcommerceContainer}></i></div>
            </div>
            <div className='projectContainer w-full h-fit'>
              <div className='project-Images-container-ecom m-auto  shadow-lg w-full h-fit '>
                <div className='ecom-project-images' alt="" style={{backgroundImage:`url(${backgroundImageEcom[ecomIndex]})`}} ></div>
                {/* <div className='w-full h-full'>
                  <video ref={ecomvideoRef} src={ecomvideo}  playsInline
          loop
          muted
          controls
          alt="All the devices"></video>
                </div> */}
              </div>
              <div className='project-description-container w-full text-center justify-center h-fit px-4 py-4'>
                <p> It is a web application  in which a user can check all the available products like laptop , moblies , watches ...etc . it can also view the information of the
                  product and can also add it to cart.</p>
                <br />
                <p><b>Technology :</b> Html , Css , JavaScript , NodeJS , ExpressJs , MongoDb  </p>
              </div>
            </div>
          </div>

          <div id='project-extent-container-chat' className='pop-up-project-conatiner ml-12  m-auto mt-4 left-72 absolute bg-white rounded-lg shadow-2xl h-fit w-150 '>
            <div className='nav-heading-container w-full h-fit flex flex-row px-2 py-4'>
              <div className="heaing m-auto w-3/4">CHAT APPLICATION</div>
              <div className="close-container m-auto"><i className='fa fa-close hover:cursor-pointer' onClick={closeChatContainer}></i></div>
            </div>
            <div className='projectContainer w-full h-fit'>
              <div className='project-Images-container-chat m-auto  shadow-lg w-full h-fit '>
                <div className='chat-project-images' alt=""style={{
                  backgroundImage: `url(${backgroundImageChat[chatIndex]})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%',

                }} ></div>
              </div>
              <div className='project-description-container w-full text-center justify-center h-fit px-4 py-4 '>
                <p> This chat application is designed with a user interface similar to WhatsApp web and uses socket connections for real-time communication. Users can create accounts, log in, and start conversations with their contacts. User can send friend request to other available user and can also accept / reject request coming from others.</p>
                <br />
                <p><b>Technology :</b> Html , Css , Tailwind Css , NodeJS , ReactJS , ExpressJS , MongoDb </p>
              </div>
            </div>
          </div>

          <div id='project-extent-container-note' className='pop-up-project-conatiner ml-12  m-auto mt-4 left-72 absolute bg-white rounded-lg shadow-2xl h-fit w-150 '>
            <div className='nav-heading-container w-full h-fit flex flex-row px-2 py-4'>
              <div className="heaing m-auto w-3/4">I - NOTEBOOK</div>
              <div className="close-container m-auto"><i className='fa fa-close hover:cursor-pointer' onClick={closeNoteContainer}></i></div>
            </div>
            <div className='projectContainer w-full h-fit'>
              <div className='project-Images-container-notes shadow-lg  m-auto w-full h-fit '>
                <div className='note-project-Images' alt=""style={{
                  backgroundImage: `url(${backgroundImageNote[noteIndex]})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%',

                }}></div>
              </div>
              <div className='project-description-container w-full text-center justify-center h-fit px-4 py-4'>
                <p>A simple web application in which user can view add, update or delete notes. </p>
                <br />
                <p><b>Technology :</b> Html , Css , NodeJS , ReactJS , ExpressJS , MongoDb </p>
              </div>
            </div>
          </div>
          <div id='mail-pop-up' ref={mailRef} className='mail-sent-pop-up absolute hidden h-10 w-1/2 left-96 ml-6 mt-3  bg-gray-200 shadow-2xl rounded-md' style={{ boxShadow: '1px 1px 2px ' }} >
            <div className="textcontainer flex">
              <div className='mail-status-text m-auto w-4/5  mt-2 -ml-5'><h3>{mailStatus}</h3></div>
              <div className=' m-auto mt-2'>
                <i className='fa fa-close hover:cursor-pointer' fontSize={'28px'} onClick={closeMailPopup}></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}


export default App;
