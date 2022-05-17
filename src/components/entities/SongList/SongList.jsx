import React from "react";
import "./SongList.scss";
import Block from "../../shared/Block/Block";
import { connect } from "react-redux";
import { getSongs } from "../../../store/songs/songs.selectors";
import { listSongsOperation } from "../../../store/songs/songs.operations";

const mapStateToProps = (state) => ({
  songs: getSongs(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSongsList: () => {
    dispatch(listSongsOperation({}));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.listSongs();
  };

  listSongs = () => {
    const { onSongsList } = this.props;
    onSongsList();
  };

  render() {
    const { songs } = this.props;
    const {} = this.state;

    return (
      <Block className="SongList">
        <h2>Song list</h2>
        <div className="list">
          <div className="row header">
            <div className="col">
              <span></span>
            </div>
            <div className="col">
              <span>Author</span>
            </div>
            <div className="col">
              <span>Title</span>
            </div>
            <div className="col">
              <span>BPM</span>
            </div>
            <div className="col">
              <span>Genre</span>
            </div>
          </div>
          {songs.map((song) => (
            <div key={song} className="row song">
              <div className="col">
                <img className="cover" src={song.cover.path} alt={"cover"} />
              </div>
              <div className="col">
                <span>{song.author}</span>
              </div>
              <div className="col">
                <span>{song.title}</span>
              </div>
              <div className="col">
                <span>{song.bpm}</span>
              </div>
              <div className="col">
                <span>{song.genre}</span>
              </div>
            </div>
          ))}
        </div>
      </Block>
    );
  }
}

export default connector(SongList);
