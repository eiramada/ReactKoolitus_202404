import { useRef } from "react";

function LisaJook({ joogid, setJoogid }) {
  const lisaJookRef = useRef(null);

  const handleLisaJook = () => {
    const lisaJook = lisaJookRef?.current?.value;
    joogid?.splice(joogid?.length, 1, lisaJook);
    setJoogid(joogid?.slice());

    lisaJookRef.current.value = null;
  };
  return (
    <>
      <div className="joogid__row">
        <p className="joogid__name">Lisa uus jook</p>
        <input ref={lisaJookRef} className="joogid__name" />
        <button onClick={handleLisaJook}>Sisesta</button>
      </div>
    </>
  );
}

export default LisaJook;
