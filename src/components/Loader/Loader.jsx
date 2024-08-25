import { Audio } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => (
  <div className={s.loaderWrapper}>
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="audio-loading"
    />
  </div>
);

export default Loader;
