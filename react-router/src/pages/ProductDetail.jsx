import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const params = useParams();
  console.log(params.productId);

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
    </>
  );
}
