import './Components.css';

const Login = () => {

    let label = document.querySelector('.loguinLabel');

    function inputFocus() {
        label.classList.toggle('loginInputFocus');
    }

    return (
        <div>
            <h1 className='loginTitle'>Iniciar Sesión</h1>
            <form className='loginForm'>
                <div className="loginContainer">
                    <label className='loginLabel' name="userName">Usuario</label>
                    <input className='loginInput' type="text" name="userName"></input>
                </div>
                <div className="loginContainer">
                    <label className='loginLabel' name="password">Contraseña</label>
                    <input className='loginInput' type="password" name="password"></input>
                </div>
            </form>
        </div>
    );
};

export default Login;