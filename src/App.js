import "./App.css";
import AvatarView from "./Components/AvatarView";
import ButtonView from "./Components/ButtonView";
import Login from "./Components/Features/Login";
import InputTextView from "./Components/InputTextView";
import LogoView from "./Components/LogoView";
//import { Button } from "reactstrap";
import TextView from "./Components/TextView";

function App() {
  return (
    <div className="App">
      {/* <InputTextView
      inputbcolor="grey"
      onChange={handleChange}
      placeholder="Enter Data"
      /> */}

      <Login />

      {/* <LogoView title="Insta Logo" text="XYZ" /> */}

      {/* <AvatarView
        title="Profile Picture"
        alt="avatar"
        src="https://www.w3schools.com/howto/img_avatar2.png"
      /> */}
      {/* <TextView
        size="lg"
        text="Insta"
        align="center"
        color="black"
        weight="italic"
        title="Instagram Logo"
      /> */}
      {/* <ButtonView
      onClick={handleClick}
      color="blue"
      size="md"
      textcolor="white"
      /> */}
    </div>
  );
}

export default App;
