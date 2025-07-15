import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductCard.module.css'; // Import the CSS module

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  stock: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className={styles.productCard}>
      <Link href={`/product/${product.id}`} className={styles.productLink}>
        <div className={styles.productImageContainer}>
          <Image 
            src={product.image}
            alt={product.name}
            width={50}
            height={50}
            className={styles.productImage}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.productInfo}>
          <h3 className={styles.productName}>{product.name}</h3>
          <div className={styles.productRating}>
            {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
          </div>
          <div className={styles.productPrice}>${product.price.toFixed(2)}</div>
        </div>
      </Link>
      <button className={styles.addToCartBtn}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;