import { useNavigate } from 'react-router';

const Menu = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <nav>
      <ul>
        <li onClick={() => handleNavigate('/')}>
          <a href="/">Home</a>
        </li>
        <li onClick={() => handleNavigate('/conta')}>
          <a href="/conta">Conta</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
