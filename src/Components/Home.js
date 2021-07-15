import HomeCard from './Home-Card';
import '../Styles/Home.css'
import "../Styles/home-responsive.css"
import GirlWithDog from '../images/Rectangle.jpg'
import Arrow from '../images/Vector (1).svg'
import Phone from "../images/Rectangle (1).jpg"
import Phone2 from "../images/Rectangle (2).jpg"
import NewYorkTimes from "../images/Rectangle (3).jpg"
import Fortune from "../images/Rectangle (4).jpg"
import Forbes from "../images/Rectangle (5).jpg"
import Wired from "../images/Rectangle (6).jpg"
import FirstPerson from "../images/Rectangle (7).jpg"
import SecondPerson from "../images/Rectangle (8).jpg"
import ThirdPerson from "../images/Rectangle (9).jpg"
import FourthPerson from "../images/Rectangle (10).jpg"
import CoupleWithDog from "../images/Rectangle (11).jpg"
import {Link} from "react-router-dom";


function Home() {
  return (
    <div className="Header">
      <header className="row header-row">
     <div className="left">
         <h1>Real search results only. No ads ever.</h1>
         <p>Created by ex-Google execs, Neeva gives you a private, ad-free search experience with only real results.</p>
         <form className="header-form">
             <input type="text" placeholder="Enter email to sign up" className="header-input"/>
              <button type="button">Get Started</button>
         </form>
         <small className="input-comment">No credit card required to sign up. Get 3 months free, then just $4.95 per month.</small>
     </div>
     <div className="right"><img src={GirlWithDog} alt="A girl with a dog "/></div></header>
     <section className="did-you-know">
       
       <div className="did-you-know-row">
         <div className="did-you-know-column">
           <h2 className="did-you-know-title">Did you know?</h2>
           <p className="did-you-know-text">40% of your search results are actually ads?</p>
           <img src={Phone}/>
         </div>
         <div className="did-you-know-column">
         <h2 className="hidden did-you-know-title">Did you know?</h2>
         <p className="did-you-know-text">100% real results with Neeva</p>
         <img src={Phone2}/>
         </div>
       </div>
     </section>
     <div className="partner-companies">
       <h3>Featured by</h3>
     <div className="row partner-companies-row">
<Link><img src={NewYorkTimes}/></Link>
<Link><img src={Fortune}/></Link>
<Link><img src={Forbes}/></Link>
<Link><img src={Wired}/></Link>
     </div></div>
<section className="trackers">
  <div className="row trackers-row">
    <div className="column">

    </div>
    <div className="column">
      <h2 className="did-you-know-title">Did you know?</h2>
      <h2 className="trackers-title">1000s of trackers follow you every week?</h2>
      <h3 className="trackers-second-title">We block all trackers to keep your data safe.</h3>
      <Link className="yellow-btn" >See our bill of rights</Link>
    </div>
  </div>
  
  <div className="row generic-results">
    <div className="column">
<h2 className="did-you-know-title">Did you know?</h2>
      <h2 className="trackers-title">You get generic results when you search?</h2>
      <h3 className="trackers-second-title">We let you pick the news sources you trust and retailers you love.</h3>
      <Link className="yellow-btn" >See All Features</Link>
    </div>
    <div className="column">
      
    </div>
  </div>
  
</section>

<section className="join">
<h1 className="join-title">Join search designed for you, not advertisers.</h1>
<form className="header-form">
             <input type="text" placeholder="Enter email to sign up" className="header-input"/>
              <button type="button">Get Started</button>
         </form>
         <small className="input-comment">No credit card required to sign up. Get 3 months free, then just $4.95 per month.</small>
</section>
<section className="experts">
  <div className="row experts-row">
    <div className="column">
      <h2 className="trackers-title">Created and backed by former Google executives</h2>
      <h3 className="trackers-second-title">From the experts who know search best.</h3>
      <Link className="yellow-btn" >Our story</Link>
      </div>
    <div className="column">
    <div className="row cards-row">
      <HomeCard name="Sridhar Ramaswamy" job="CEO & Cofounder at Neeva, ex-SVP at Google" image={FirstPerson}/>
      <HomeCard name="Vivek Raghunathan" job="Cofounder at Neeva, ex-VP at Google, Youtube" image={SecondPerson}/>
      <HomeCard name="Margo Georgiadis" job="Ex-President of Google Americas" image={ThirdPerson}/>
      <HomeCard name="Bill Coughran" job="Ex-SVP of Search at Google" image={FourthPerson}/>
    </div>

    </div>
  </div>
</section>
<article className="why-people-love"> 
<h4>Why people love Neeva</h4>
<div className="row why-people-love-row">
 
  <div className="card">
    <blockquote>“Neeva makes it so much easier to focus on what I want to read now that I don't have to dodge all the ads.”</blockquote>
    <span className="author">Jeanie S.</span>
    <small className="job-status">retired</small>
  </div>
  <div className="card">
    <blockquote>“Neeva makes it so much easier to focus on what I want to read now that I don't have to dodge all the ads.”</blockquote>
    <span className="author">Jeanie S.</span>
    <small className="job-status">retired</small>
  </div>
  <div className="card">
    <blockquote>“Neeva makes it so much easier to focus on what I want to read now that I don't have to dodge all the ads.”</blockquote>
    <span className="author">Jeanie S.</span>
    <small className="job-status">retired</small>
  </div>
  <div className="card">
    <blockquote>“Neeva makes it so much easier to focus on what I want to read now that I don't have to dodge all the ads.”</blockquote>
    <span className="author">Jeanie S.</span>
    <small className="job-status">retired</small>
  </div>

</div>
</article>
<section className="row advertiser-row">
     <div className="left">
         <h1>Because you pay for Neeva, we're accountable to you (never advertisers).</h1>
         <form className="header-form">
             <input type="text" placeholder="Enter email to sign up" className="header-input"/>
              <button type="button">Get Started</button>
         </form>
         <small className="input-comment">No credit card required to sign up. Get 3 months free, then just $4.95 per month.</small>
     </div>
     <div className="right"><img src={CoupleWithDog} alt="A girl with a dog "/></div>
     </section>
<hr/>
   
   
    </div>
  );
}

export default Home;