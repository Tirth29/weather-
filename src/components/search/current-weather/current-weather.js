const CurrentWeather = () => {
  return (
    <div className="weather w-72 border-spacing-2 text-white bg-slate-600 mr-20 mt-5 mb-auto ml-0">
      <div className="top flex justify-between items-center">
        <div>
          <p className="city font-semibold text-lg m-0 "></p>
          <p className="we-des font-normal text-sm m-0 "></p>
        </div>
      </div>
      <div className="bottom flex justify-between items-center">
        <p className="temp font-semibold text-6xl w-auto mr-2">18°C</p>
        <div className="details w-[100%] pl-5">

        <div className="parameter-row flex justify-between">
            <span className="par-l text-left font-normal text-xs">Details</span>
        </div>
        <div className="parameter-row flex justify-between">
            <span className="par-l text-left font-normal text-xs">Feels like</span>
            <span className="par-v text-right font-semibold text-xs">22°C</span>
        </div>
        <div className="parameter-row flex justify-between">
            <span className="par-l text-left font-normal text-xs">Wind</span>
            <span className="par-v text-right font-semibold text-xs">2 m/s</span>
        </div>
        <div className="parameter-row flex justify-between">
            <span className="par-l text-left font-normal text-xs">Humidity</span>
            <span className="par-v text-right font-semibold text-xs">15%</span>
        </div>
        <div className="parameter-row flex justify-between">
            <span className="par-l text-left font-normal text-xs">Pressure</span>
            <span className="par-v text-right font-semibold text-xs">15 hPa </span>
        </div>

        </div>
      </div>
      <img className="We-icon w-24 " alt="Weather" />
    </div>
  );
};
export default CurrentWeather;
