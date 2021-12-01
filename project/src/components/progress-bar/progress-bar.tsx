type ProgressBarProps = {
  progress: number,
}

function ProgressBar({ progress }: ProgressBarProps): JSX.Element {
  return (
    <div>{progress}</div>
  );
}

export default ProgressBar;
