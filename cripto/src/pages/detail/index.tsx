import { useState, useEffect } from 'react';
import styles from './detail.module.css';
import { useParams, useNavigate } from 'react-router-dom';

interface CoinProp {
  symbol: string;
  name: string;
  price: string;
  market_cap: string;
  total_volume_24h: string;
  low_24h: string;
  high_24h: string;
  delta_24h: string;
  formatedPrice: string;
  formatedMarket: string;
  formatedLowprice: string;
  formatedHighprice: string;
  numberDelta: number;
  error?: string;
}

export function Detail() {
  const { cripto } = useParams();
  const [detail, setDetail] = useState<CoinProp | null>(null); // Initialize as null
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`https://sujeitoprogramador.com/api-cripto/coin/?key=3812c34d750430ad&symbol=${cripto}`);
        const data = await response.json();

        if (data.error) {
          navigate('/');
          return;
        }

        const price = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        const resultData: CoinProp = {
          ...data,
          formatedPrice: price.format(Number(data.price)),
          formatedMarket: price.format(Number(data.market_cap)),
          formatedLowprice: price.format(Number(data.low_24h)),
          formatedHighprice: price.format(Number(data.high_24h)),
          numberDelta: parseFloat(data.delta_24h.replace(',', '.')),
        };

        setDetail(resultData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    getData();
  }, [cripto, navigate]);

  if (loading) {
    return (
      <div className={styles.container}>
        <h4 className={styles.center}>Carregando informações...</h4>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.center}>{detail?.name}</h1>
      <p className={styles.center}>{detail?.symbol}</p>

      <section className={styles.content}>
        <p><strong>Preço:</strong> {detail?.formatedPrice}</p>
        <p><strong>Maior preço 24h:</strong> {detail?.formatedHighprice}</p>
        <p><strong>Menor preço 24h:</strong> {detail?.formatedLowprice}</p>
        <p>
          <strong>Delta 24h:</strong>
          <span className={detail?.numberDelta && detail?.numberDelta >= 0 ? styles.profit : styles.loss}>
            {detail?.delta_24h}
          </span>
        </p>
        <p><strong>Valor mercado:</strong> {detail?.formatedMarket}</p>

      </section>
    </div>
  )
}
