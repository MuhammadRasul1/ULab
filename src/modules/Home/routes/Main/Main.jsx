import { authStore } from "store/auth.store";
import cls from "./styles.module.scss";
import { useMainProps } from "./useMainProps";

export const Main = () => {

  const { mainText } = useMainProps();

  return <h1 className={cls.title}>MAIN: {mainText} {authStore.userData.user_type}</h1>;
};
