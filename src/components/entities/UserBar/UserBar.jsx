import React from "react";
import "./UserBar.scss";
import Block from "../../shared/Block/Block";
import genres from "../../../assets/genres.json";
import {
  addFavouriteGenreAction,
  removeFavouriteGenreAction,
} from "../../../store/user/user.actions";
import { connect } from "react-redux";
import { getFavouriteGenres } from "../../../store/user/user.selectors";

const mapStateToProps = (state) => ({
  favouriteGenres: getFavouriteGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavouriteGenreSelect: (genre) => {
    dispatch(addFavouriteGenreAction({ genre }));
  },
  onFavouriteGenreUnselect: (genre) => {
    dispatch(removeFavouriteGenreAction({ genre }));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
class UserBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getIsFavouriteGenre = (genre) => {
    const { favouriteGenres } = this.props;
    return favouriteGenres?.includes(genre);
  };

  handleFavouriteGenreButtonClick = (genre) => {
    const { onFavouriteGenreSelect, onFavouriteGenreUnselect } = this.props;
    const isFavouriteGenre = this.getIsFavouriteGenre(genre);
    isFavouriteGenre
      ? onFavouriteGenreUnselect(genre)
      : onFavouriteGenreSelect(genre);
  };

  render() {
    const {} = this.props;
    return (
      <Block className="UserBar">
        <div>
          <h1>Hello!</h1>
        </div>
        <div>
          <span>Select your favourite genres:</span>
          <div className="genres">
            {genres.map((genre) => (
              <button
                key={genre}
                type="button"
                className={`genre ${
                  this.getIsFavouriteGenre(genre) ? "selected" : ""
                }`}
                onClick={() => this.handleFavouriteGenreButtonClick(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </Block>
    );
  }
}

export default connector(UserBar);
