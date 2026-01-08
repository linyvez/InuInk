interface Props {
  strokes: string[];
}

const CharacterHint = ({ strokes }: Props) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {strokes.map((strokePath, index) => (
        <path key={index} d={strokePath} fill="lightgray" />
      ))}
    </svg>
  );
};

export default CharacterHint;
