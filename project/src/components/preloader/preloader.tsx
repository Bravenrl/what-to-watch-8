function Preloader(): JSX.Element | null {
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
