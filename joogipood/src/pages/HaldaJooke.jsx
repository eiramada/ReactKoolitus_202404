function HaldaJooke({ joogid, setJoogid }) {
  const handleEemaldaJook = (index) => {
    joogid?.splice(index, 1);
    setJoogid(joogid?.slice());
  };

  return (
    <div>
      <p>Joogid:</p>

      <div>
        {joogid &&
          joogid.length > 0 &&
          joogid.map((jook, i) => (
            <div key={i} className="joogid__row">
              <p className="joogid__name">{jook}</p>
              <button onClick={() => handleEemaldaJook(i)}>X</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default HaldaJooke;
