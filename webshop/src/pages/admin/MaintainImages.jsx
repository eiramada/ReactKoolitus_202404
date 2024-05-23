import React, { useEffect, useRef, useState } from "react";

function MaintainImages() {
  const [images, setImages] = useState([]);

  const urlRef = useRef();
  const altRef = useRef();
  const headerRef = useRef();
  const textRef = useRef();

  const url = process.env.REACT_APP_PICTURES_DB_URL;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setImages(json || []));
  }, [url]);

  function add() {
    const newPicture = {
      url: urlRef.current.value,
      alt: altRef.current.value,
      header: headerRef.current.value,
      text: textRef.current.value,
    };
    images.push(newPicture);
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(images),
    });

    setImages(images.slice());
    urlRef.current.value = "";
    altRef.current.value = "";
    headerRef.current.value = "";
    textRef.current.value = "";
  }

  function remove(index) {
    images.splice(index, 1);
    setImages(images.slice());

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(images),
    });
  }

  return (
    <div>
      <label>Image URL</label> <br />
      <input ref={urlRef} type="text" /> <br />
      <label>Alt Text</label> <br />
      <input ref={altRef} type="text" /> <br />
      <label>Header</label> <br />
      <input ref={headerRef} type="text" /> <br />
      <label>Text</label> <br />
      <input ref={textRef} type="text" /> <br />
      <button onClick={add}>Add</button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Image URL</th>
            <th>Alt Text</th>
            <th>Header</th>
            <th>Text</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {images?.map((image, index) => (
            <tr key={image.url}>
              <td>{image.url}</td>
              <td>{image.alt}</td>
              <td>{image.header}</td>
              <td>{image.text}</td>
              <td>
                <button onClick={() => remove(index)}>x</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MaintainImages;
