function NavBar() {
  return (
    <>
      <div className="conteiner navBar" >
        <header><h1 className="text-robo-1 space">Robô 4N69</h1>
          <ul className="nav justify-content-end ">
            <li className="nav-item ">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/quemSomos">Quem somos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/controle">Robô</a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default NavBar;