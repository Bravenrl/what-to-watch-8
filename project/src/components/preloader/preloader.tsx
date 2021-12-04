function Preloader(): JSX.Element | null {
  // const isPosting = useSelector(getIsPosting);
  // const isLoading = useSelector(getIsLoading);
  // if (!isPosting && !isLoading) {
  //   return null;
  // }
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <img src='img/Preloader.svg' alt='Loading' />
    </div>
  );
}
export default Preloader;
