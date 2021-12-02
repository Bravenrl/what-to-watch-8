type ShowMoreButtonProps = {
  onButtonClick: () => void;
}
function ShowMoreButton ({onButtonClick}: ShowMoreButtonProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button onClick= {onButtonClick} className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMoreButton;
