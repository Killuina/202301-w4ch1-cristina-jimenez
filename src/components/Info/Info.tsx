interface InfoProps {
  numberOfPointingGentlemen: number;
}

const Info = ({
  numberOfPointingGentlemen: number,
}: InfoProps): JSX.Element => {
  return <p className="info">{number} gentlemen pointing at you</p>;
};

export default Info;
