function Product() {
  return (
    <div className="product bg-[#f9f9f9]">
      <div className="wrapper flex w-4/5 m-auto">
        <div className="carousel flex-1"></div>
        <div className="product_form w-2/6">
          <div className="title flex justify-between py-6 items-start">
            <div className="heading font-serif text-[22px] w-3/4">
              Bless Up Breathable Stretch Shirt
            </div>
            <div className="price text-xl font-bold">$89</div>
          </div>
          <div className="info">
            <div className="category">Shirt</div>
            <div className="rating"></div>
          </div>
          <div className="variants"></div>
          <div className="sizes"></div>
          <div className="action_btn"></div>
        </div>
      </div>
    </div>
  );
}

export default Product;
