import Image from "next/image";
import styles from "../styles/Home.module.css";
import DarkStatus from "./DarkStatus";
import { useDispatch, useSelector } from "react-redux";
import { switchDarkMode } from "@/reducers/dark";

function Home() {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.dark.value);

  return (
    <div className={dark ? styles.container : styles.container_black}>
      <Image
        src={dark ? "/light.png" : "/dark.png"}
        alt="Light"
        width={128}
        height={128}
        className={styles.switch}
        onClick={() => dispatch(switchDarkMode())}
      />
      <DarkStatus />
    </div>
  );
}

export default Home;