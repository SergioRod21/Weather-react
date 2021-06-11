import React from 'react';
// import './App.css';

const api = {
  key: "0b8c2694ed487c7efc914e2f21cf82e7",
  base: "https://api.openwheatermap.org/data/2.5/"

}


function App() {

  const dateBuilder = (d) => {
    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    let days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className='search-bar' placeholder="Search..."
          />
        </div>
        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="wheater-box"></div>
        <div className="wheater-box">
          <div className="temperature">
            15°C
          </div>
          <div className="wheater">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
