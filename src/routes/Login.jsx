import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const { setUser } = useContext(UserContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    localStorage.setItem('user', JSON.stringify(data))
    setUser(data)
    navigate('/trivia')
  }

  return (

    <div className="login-container">
      <h2>Inicia sesion para comenzar a Jugar</h2>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-form"
          type="text"
          placeholder="Nombre de usuario"
          {...register("username", {
            required: "Ingrese su nombre de usuario"
          }
          )
          } />
        <p>{errors.username?.message}</p>
        <input
          className="input-form"
          type="password"
          placeholder="Contraseña"
          {...register(
            "password",
            {
              required: "Ingrese su contraseña"
            })
          }
        />
        <p>{errors.password?.message}</p>
        <button className="btn-login" type="submit">Sign in</button>
      </form>
    </div>
  );


}

export default Login;