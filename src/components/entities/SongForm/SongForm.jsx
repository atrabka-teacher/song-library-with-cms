import React from "react";
import Block from "../../shared/Block/Block";
import "./SongForm.scss";
import genres from "../../../assets/genres.json";
import { connect } from "react-redux";
import { addSongAction } from "../../../store/songs/songs.actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onSongAdd: (song) => {
    dispatch(addSongAction({ song }));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

class SongForm extends React.Component {
  initialState = {
    author: "",
    title: "",
    cover: "",
    bpm: 0,
    genre: "",
  };

  constructor(props) {
    super(props);
    this.state = { ...this.initialState };
  }

  handleAuthorInputChange = (event) => {
    this.setState({ author: event.target.value });
  };

  handleTitleInputChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleCoverInputChange = (event) => {
    this.setState({ cover: event.target.value });
  };

  handleBPMInputChange = (event) => {
    this.setState({ bpm: event.target.value });
  };

  handleGenreSelectChange = (event) => {
    this.setState({ genre: event.target.value });
  };

  handleAddButtonClick = () => {
    const song = {
      author: this.state.author,
      title: this.state.title,
      cover: this.state.cover,
      bpm: this.state.bpm,
      genre: this.state.genre,
    };
    this.props.onSongAdd(song);
    this.setState({ ...this.initialState });
  };

  render() {
    const {} = this.props;
    const { author, title, cover, bpm, genre } = this.state;

    return (
      <Block className="SongForm">
        <h2>Add new song...</h2>
        <form>
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={this.handleAuthorInputChange}
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={this.handleTitleInputChange}
          />
          <input
            type="text"
            placeholder="Cover"
            value={cover}
            onChange={this.handleCoverInputChange}
          />
          <input
            type="number"
            placeholder="BPM"
            value={bpm}
            onChange={this.handleBPMInputChange}
          />
          <select value={genre} onChange={this.handleGenreSelectChange}>
            <option value="">Select genre...</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <button type="button" onClick={this.handleAddButtonClick}>
            Add
          </button>
        </form>
      </Block>
    );
  }
}

export default connector(SongForm);
