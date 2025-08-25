interface HeaderProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  github?: string;
}

const Header: React.FC<HeaderProps> = ({ name, title, email, phone, github }) => {
  return (
    <header className="resume-header">
      <h1 className="name">{name}</h1>
      <p className="job-title">{title}</p>
      <div className="contact-info">
        <span className="contact-item">{email}</span>
        <span className="contact-item">{phone}</span>
        {github && <span className="contact-item">{github}</span>}
      </div>
    </header>
  );
};

export default Header;
