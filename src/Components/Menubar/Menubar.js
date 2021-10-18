import "./Menubar.css";
import logo from "../../Assets/odds_logo.svg";

function Menubar() {
  return (
    <div class="p-10 flex flex-col h-screen text-left text-gray-200 bg-gray-800">
      <div className="flow-root logo">
        <img className="odds-logo" src={logo} alt="odds-logo"></img>
      </div>

      <ul className="my-2">
        <li className="my-3">
          <a href="/">
            <div className="flex flex-grow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              <span className="text-gray-200">Individual</span>
            </div>
          </a>
        </li>
        <li className="my-3">
          <a href="/">
            <div className="flex flex-grow">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-200">Profile</span>
            </div>
          </a>
        </li>
        <li className="my-3">
          <a href="/">
            <div className="flex flex-grow">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span className="text-gray-200">History</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    // <div className="flex flex-col h-screen px-20 text-center text-white bg-gray-800">
    //   <p className="text-left"> Individual</p>
    //   <p className="text-left">History</p>
    //   <p className="text-left">Profile</p>
    // </div>
  );
}
export default Menubar;
