import "./App.css";

function App() {
  return (
    <div className="App">
      <button className="Nupp">Nupp</button>

      <p className="Tekst1">Tekst</p>
      <p className="Tekst2">Text</p>

      <img
        className="Pilt"
        src="https://media.istockphoto.com/id/1195728178/vector/vector-cartoon-character-basenji-dogs-running-step.jpg?s=170667a&w=0&k=20&c=1_WyTSxDx86urDsGlU82074T0tgnpVbe-dNG4C-epdo="
        alt=""
      />

      <h2>HTML Table</h2>

      <table className="Tabel">
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/D0MxmDWk4t0?si=Cr83tR6ovZO-2dGa"
        title="YouTube video player"
      ></iframe>
    </div>
  );
}

export default App;
