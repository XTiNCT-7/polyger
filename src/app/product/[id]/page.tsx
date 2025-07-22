import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { dummyProducts } from '@/utils/constants';
import styles from'./product.module.css'; // Assuming you have a CSS file for styling

type Props = {
  params: Promise<{ id: string }> 
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = dummyProducts.find(async p => p.id === (await params).id);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | Polyger`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = dummyProducts.find(async p => p.id === (await params).id);

  if (!product) {
    notFound();
  }

  return (
    <div className={`${styles.productDetail} ${styles.container}`}>
      <div className={styles.productDetailGrid}>
        <div className={styles.productImageContainer}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className={styles.productImage}
            
          />
        </div>
        
        <div className={styles.productInfo}>
          <h1 className={styles.productName}>{product.name}</h1>
          
          <div className={styles.productMeta}>
            <div className={styles.productRating}>
              {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
              <span className={styles.ratingCount}>(42 reviews)</span>
            </div>
            
            <div className={styles.productPrice}>${product.price.toFixed(2)}</div>
            
            <div className={styles.productStock}>
              {product.stock > 0 ? (
                <span className={styles.inStock}>In Stock ({product.stock} available)</span>
              ) : (
                <span className={styles.outOfStock}>Out of Stock</span>
              )}
            </div>
          </div>
          
          <p className={styles.productDescription}>{product.description}</p>
          
          <div className={styles.productActions}>
            <div className={styles.quantitySelector}>
              <label htmlFor="quantity">Quantity:</label>
              <select id="quantity" className={styles.quantitySelect}>
                {[...Array(10).keys()].map(i => (
                  <option key={i+1} value={i+1}>{i+1}</option>
                ))}
              </select>
            </div>
            
            <button className={styles.addtoCartBtn}>Add to Cart</button>
            <button className={styles.buyNowBtn}>Buy Now</button>
          </div>
          
          <div className={styles.productDetails}>
            <h3>Product Details</h3>
            <ul>
              <li><strong>Category:</strong> {product.category}</li>
              <li><strong>SKU:</strong> POLY-{product.id}</li>
              <li><strong>Shipping:</strong> Free shipping on orders over $50</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}