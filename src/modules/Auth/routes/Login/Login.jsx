import { Box, Button, Flex, FormControl, FormLabel, Heading, InputGroup, InputRightElement } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import AuthImg from "assets/img/auth-img.png"
import EmailOutline from "assets/img/icon/mail_outline.svg";
import LockOpen from "assets/img/icon/lock_open.svg";
import { Link } from "react-router-dom";
import { useLoginProps } from "./useLoginProps";
import { Input } from "components/Input";

export const Login = () => {

  const { show, handleClick, onSubmit, handleSubmit, register } = useLoginProps();

  return (
    <Box className={cls.wrapper}>

      <Box className={cls.wrapperLeft}>
        <Heading className={cls.subtitle}>Learning Management system</Heading>
        <img src={AuthImg} alt="Learning Management system" width={672} height={448}/>
      </Box>

      <Box className={cls.wrapperRight}>
        <h1 className={cls.title}>Вход в платформу</h1>
        <FormControl onSubmit={handleSubmit(onSubmit)} maxWidth="592px" as="form">
          <Box className={cls.inputWrapper}>
            <FormLabel className={cls.label} htmlFor="email">
              Email или номер телефона 
              <span className={cls.required}>*</span>
            </FormLabel>
            <Box display={"flex"}>
              <img src={EmailOutline} alt="email_outline" width={24} height={24}/>
              <Input
                type='email'
                id="email" 
                placeholder="Введите e-mail" 
                {...register("login_name")} 
                required />
            </Box>
          </Box>

          <Box className={cls.inputWrapper}>
            <FormLabel className={cls.label} htmlFor="password">
              Пароль
              <span className={cls.required}>*</span> 
            </FormLabel>
            <InputGroup size='md'>
              <img src={LockOpen} alt="lock_open" />
              <Input
                id="password"
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                {...register("password")}
                placeholder='Введите пароль'
                required
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>

          <Box display="flex" justifyContent="flex-end">
            <Link className={cls.ForgotPassword} to="/auth/forgotPassword">Забыли пароль?</Link>
          </Box>

          <Box display="flex" flexDirection="column">
            <Button type="submit" className={cls.btnSubmit} onClick={handleSubmit(onSubmit)}>Войти</Button>
            <Link className={cls.registerLink} to="/auth/register">Зарегистрироваться</Link>  
          </Box>

          <span className={cls.text}>Copyright © URecruit. Все права защищены</span>
        </FormControl>
      </Box>
    </Box>
  )
};

{/* <Box  className={cls.inputWrapper}>
            <FormLabel className={cls.label} htmlFor="email">Пароль <span className={cls.required}>*</span></FormLabel>
            <Box display={"flex"}>
              <img src={LockOpen} alt="lock_open" width={24} height={24}/>
              <Input type='password' id="password" placeholder="Введите пароль" {...register("login_password")} required />
            </Box>
          </Box> */}

// return <Box>
//   <FormControl onSubmit={handleSubmit(onSubmit)} as="form">
//     <Heading textAlign="center" mb={2}>Login</Heading>
//     <Box display="flex" flexDirection="column" gap={3} maxWidth="400px" margin="0 auto">
//       <Input type='text' placeholder="Enter email" {...register("login_name")} />
//       <InputGroup size='md'>
//         <Input
//           {...register("password")}
//           pr='4.5rem'
//           type={show ? "text" : "password"}
//           placeholder='Enter password'
//         />
//         <InputRightElement width='4.5rem'>
//           <Button h='1.75rem' size='sm' onClick={handleClick}>
//             {show ? "Hide" : "Show"}
//           </Button>
//         </InputRightElement>
//       </InputGroup>
//       <Button type="submit">Submit</Button>
//     </Box>
//   </FormControl>
//   <Box display="flex" justifyContent="center" color="dodgerblue"><Link to="/auth/register">register</Link></Box>
// </Box>;