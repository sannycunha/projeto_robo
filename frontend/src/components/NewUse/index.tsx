function NewUse() {
  return (
    <div className="conteiner">
      <form className="form-cadastro" action="">
        <div>
          <label className="">nome:</label>
          <input type="Nome" placeholder="Digite seu Nome" required />
        </div>
        <div>
          <label className="">e-mail:</label>
          <input type="email" placeholder="Digite seu e-mail" required />
        </div>
        <div>
          <label className="">telefone:</label>
          <input type="telefone" placeholder="Digite seu Telefone" required />
        </div>
        <div>
          <label className="">senha:</label>
          <input type="password" placeholder="Digite uma senha" required />
        </div>
        <div>
          <label className="">senha:</label>
          <input type="password" placeholder="Repita a senha" required />
        </div>
        <button className="button-env" type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default NewUse;