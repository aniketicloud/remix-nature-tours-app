export default function MainHeader() {
  return (
    <header className="header">
      <div className="logo-box">
        <img src="img/logo-white.webp" alt="logo" className="logo" />
      </div>

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happens</span>
        </h1>

        <a href="#discover" className="btn btn-white">
          discover more
        </a>
      </div>
    </header>
  );
}
