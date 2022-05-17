import "./App.scss";
import { Provider } from "react-redux";
import { store } from "./store/index";
import UserBar from "./components/entities/UserBar/UserBar";
import RecommendedSongs from "./components/entities/RecommendedSongs/RecommendedSongs";
import SongForm from "./components/entities/SongForm/SongForm";
import SongList from "./components/entities/SongList/SongList";
import Music from "./assets/music.svg";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="presentation">
          <h1>
            <span>Song</span>
            <span>library</span>
          </h1>
          <img
            className="main-illustration"
            src={Music}
            alt="main-illustration"
          />
        </div>
        <div className="content">
          <div className="row">
            <UserBar />
            <RecommendedSongs />
          </div>
          <div className="row">
            <SongList />
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
