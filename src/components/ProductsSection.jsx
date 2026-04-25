import { products } from '../data/products'
import ProductCard from './ProductCard'
import SectionHeading from './SectionHeading'

export default function ProductsSection() {
  return (
    <section id="produtos" className="bg-bella-cloud py-20 sm:py-24">
      <div className="section-shell space-y-10">
        <SectionHeading
          eyebrow="Produtos"
          title="Escolha o produto ideal e compre direto no WhatsApp"
          description="Cards limpos, informacoes objetivas e botao de compra pronto para voce pedir com rapidez."
          centered
        />

        <div className="grid items-stretch gap-6 md:auto-rows-fr md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
