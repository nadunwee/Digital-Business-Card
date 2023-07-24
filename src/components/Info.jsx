export default function Info() {
  return (
    <dev className="info-container">
      <div className="img-container">
        <img
          src="src\assets\profile-img.jpg"
          alt="profile-photo"
          className="profile-img"
        />
      </div>
      <h1>Nadun Weerakkody</h1>
      <p>Intern DevOps Engineer</p>
      <div className="button-container">
        <a
          href="mailto:weerakkody.kn@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <button className="email-button">E-mail</button>
        </a>
        <a
          href="https://www.linkedin.com/in/nadunweerakkody/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="linedin-button">LinkedIn</button>
        </a>
      </div>
    </dev>
  );
}
