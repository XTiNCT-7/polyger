import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { dummyProducts } from '@/utils/constants';
import './product.module.css'; // Assuming you have a CSS file for styling

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = dummyProducts.find(p => p.id === params.id);
  
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
  const product = dummyProducts.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="product-detail container">
      <div className="product-detail-grid">
        <div className="product-image-container">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="product-image"
          />
        </div>
        
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          
          <div className="product-meta">
            <div className="product-rating">
              {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
              <span className="rating-count">(42 reviews)</span>
            </div>
            
            <div className="product-price">${product.price.toFixed(2)}</div>
            
            <div className="product-stock">
              {product.stock > 0 ? (
                <span className="in-stock">In Stock ({product.stock} available)</span>
              ) : (
                <span className="out-of-stock">Out of Stock</span>
              )}
            </div>
          </div>
          
          <p className="product-description">{product.description}</p>
          
          <div className="product-actions">
            <div className="quantity-selector">
              <label htmlFor="quantity">Quantity:</label>
              <select id="quantity" className="quantity-select">
                {[...Array(10).keys()].map(i => (
                  <option key={i+1} value={i+1}>{i+1}</option>
                ))}
              </select>
            </div>
            
            <button className="add-to-cart-btn">Add to Cart</button>
            <button className="buy-now-btn">Buy Now</button>
          </div>
          
          <div className="product-details">
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