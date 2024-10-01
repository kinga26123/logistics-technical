import logo from "../assets/logo.png";

export const Banner: React.FC = () => {
  return (
    <div className="banner-container">
      <img src={logo} className="banner" alt="logo" />
    </div>
  );
};
