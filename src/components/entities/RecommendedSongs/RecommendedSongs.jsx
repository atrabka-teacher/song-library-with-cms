import React from "react";
import "./RecommendedSongs.scss";
import Block from "../../shared/Block/Block";
import { connect } from "react-redux";
import { getRecommendedSongs } from "../../../store/user/user.selectors";

const mapStateToProps = (state) => ({
  recommendedSongs: getRecommendedSongs(state),
});

const mapDispatchToProps = (dispatch) => ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

class RecommendedSongs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { recommendedSongs } = this.props;
    return (
      <Block className="RecommendedSongs">
        <h2>Recommended songs</h2>
        <div className="songs">
          {recommendedSongs?.map((song) => (
            <div key={song} className="song">
              <img src={song.cover.path} className="cover" alt="cover" />
              <div className="info">
                <span>{song.author}</span> - {song.title}
              </div>
            </div>
          ))}
        </div>
      </Block>
    );
  }
}

export default connector(RecommendedSongs);
