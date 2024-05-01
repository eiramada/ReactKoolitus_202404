function Avaleht({ joogid }) {
  return (
    <div>
      <p>Joogid:</p>

      {Array.isArray(joogid) && joogid.map((jook) => <p key={jook}>{jook}</p>)}
    </div>
  );
}

export default Avaleht;
