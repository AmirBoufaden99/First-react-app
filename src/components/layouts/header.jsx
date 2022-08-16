import myLogo from "../../assets/imgs/logo.png";
import "../../Styles/Header.css";

export default function Header() {
  
  
    return (
    <div>
        <div className="containerNav">
            <nav className="navBar">
                <div className="myLogo">
                    <img src={myLogo} alt="logo"/>
                </div>
                <div className="links">
                    <ul>
                        <li>Métiers</li>
                        <li>Technologies</li>
                        <li>Entreprise</li>
                        <li>Notre Academy</li>
                        <li>Villes</li>
                    </ul>
                </div>
                <div className="btn">
                    <button>CVthéque</button>
                </div>
            </nav>
        </div>
    </div>
  );
}
