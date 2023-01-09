const CurrentWeather = ({data}) => {
  return (
    <div className="weather w-72 border-spacing-2 text-white bg-slate-600 mr-20 mt-5 mb-auto ml-0">
      <div className="top flex justify-between items-center">
        <div>
          <p className="city font-semibold text-lg m-0 ">{data.city}</p>
          <p className="we-des font-normal text-sm m-0 ">{data.weather[0].description}</p>
        </div>
      <img className="We-icon w-24 " alt="Weather" src={`icons/${data.weather[0].icon}.png`} />

      </div>
      <div className="bottom flex justify-between items-center">
        <p className="temp font-semibold text-6xl w-auto mr-2">{Math.round(data.main.temp)}°C</p>
        <div className="details w-[100%] pl-5">
        <div className="parameter-row flex justify-between">
            <span className="par-l text-left font-normal text-xs">Details</span>
        </div>
        <div className="parameter-row flex justify-between">
            <span className="par-l text-left font-normal text-xs">Feels like</span>
            <span className="par-v text-right font-semibold text-xs">{Math.round(data.main.feels_like)}°C</span>
        </div>
        <div className="parameter-row flex justify-between">
            <span className="par-l text-left font-normal text-xs">Wind</span>
            <span className="par-v text-right font-semibold text-xs">{data.wind.speed} m/s</span>
        </div>
        <div className="parameter-row flex justify-between">
            <span className="par-l text-left font-normal text-xs">Humidity</span>
            <span className="par-v text-right font-semibold text-xs">{data.main.humidity}%</span>
        </div>
        <div className="parameter-row flex justify-between">
            <span className="par-l text-left font-normal text-xs">Pressure</span>
            <span className="par-v text-right font-semibold text-xs">{data.main.pressure} hPa </span>
        </div>

        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
