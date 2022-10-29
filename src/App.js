import "./App.css";
import Footer from "./Footer";
import Icons from "./Icons";
import Links from "./Links";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <Profile />

      <Links id="twitter" link="https://twitter.com" linkText="Twitter Link" />

      <Links
        id="btn__zuri"
        link="https://training.zuri.team/"
        linkText="Zuri Team"
      />

      <Links id="books" link="https://books.zuri.team" linkText="Zuri Books" />

      <Links
        id="book__python"
        link="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
        linkText="Python Books"
      />

      <Links
        id="pitch"
        link="https://background.zuri.team"
        linkText="Background Check for Coders"
      />

      <Links
        id="book__design"
        link="https://books.zuri.team/design-rules"
        linkText="Design Books"
      />

      <Icons />

      <Footer />
    </div>
  );
}

export default App;
