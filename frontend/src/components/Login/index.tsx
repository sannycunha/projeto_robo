function Login() {
  return (
    <div className="conteiner">
      <form className="form-login" action="">
        <div>
          <label className="">e-mail:</label>
          <input type="email" placeholder="Digite seu e-mail" required />
        </div>
        <div>
          <label className="">senha:</label>
          <input type="password" placeholder="Digite sua senha" required />
        </div>
        <button className="button-env" type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Login;