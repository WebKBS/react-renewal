import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/products');
  }
  return (
    <>
      <h1>HomePage</h1>
      <p>
        Go to <Link to="/Products">Products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}
