import ProductCard from '@/components/common/ProductCard';
import { dummyProducts } from '@/utils/constants';

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Welcome to Polyger</h1>
        <p>Discover amazing products at unbeatable prices</p>
      </section>
      
      <section className="featured-products">
        <h2 className="section-heading">Featured Products</h2>
        <div className="product-grid">
          {dummyProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}