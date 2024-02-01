import cls from "./styles.module.scss";
import { useMainProps } from "./useMainProps";

export const UsersList = () => {

  const { mainText, users } = useMainProps();

  return <>
    <h1 className={cls.title}>Users MAIN: {mainText}</h1>
    <ul className={cls.list}>
      {
        users?.map(user => <li key={user.id}>{user.name}</li>)
      }
    </ul>
  </>;
};
