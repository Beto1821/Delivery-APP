import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSale } from '../service/saleRequests';

function SellerOrderDetails() {
  const { id } = useParams();
  const [sale, setSale] = useState();

  useEffect(() => {
    const fetchOrder = async () => {
      const response = await getSale(id);
      setSale(response.data);
      console.log(response.data);
    };
    fetchOrder();
  }, [id]);

  return <div>foo</div>;
}

export default SellerOrderDetails;
