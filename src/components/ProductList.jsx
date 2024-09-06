import { data } from '../data'; 

export const ProductList = () => {
	return (
		<div className='container-items'>
			{data.map(product => (
				<div className='item' key={product.id}>
					<figure className='product-image'>
						<img src={product.img} alt={product.nameProduct} />
					</figure>
					<div className='info-product'>
						<label className='product-name'>{product.nameProduct}</label>
					</div>
				</div>
			))}
		</div>
	);
};
