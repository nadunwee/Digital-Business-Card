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
        <button className="email-button">E-mail</button>
        <button className="linedin-button">LinkedIn</button>
      </div>
    </dev>
  );
}
