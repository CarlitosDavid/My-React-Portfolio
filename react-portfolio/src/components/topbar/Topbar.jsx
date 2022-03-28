import "./topbar.scss"
import {BatteryCharging20, GitHub} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">@Carl.DC</a>
          <div className="itemContainer">
            <BatteryCharging20 className="icon" />
            <span></span>
            </div>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <span>
               <a href="https://github.com/CarlitosDavid"> CarlitosDavid</a>
               </span>
            </div>
      
          <div className="right">
            <div className="nav">
              <span className="line1"><a href="#aboutme">About Me</a></span>
              <br></br>
              <span className="line2"><a href="#works">My Work</a></span>
              <br></br>
              <span className="line3"><a href="#contact">Contacts</a></span>

              </div>
            </div>
        </div>
      
    </div>
  )
}
