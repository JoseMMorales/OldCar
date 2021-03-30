import DetailParagraph from '../../../../Components/DetailParagraph/DetailParagraph';

const SellerDetails = ({ car }) => {

  return (
    <div className='seller-description'>
      <h1 className='title grey-color'>Detalles del vendedor</h1>
      <DetailParagraph
        text='Nombre:'
        detail= {car.sellerName}
      />
      <DetailParagraph
        text='Dirección:'
        detail= {car.sellerAddress}
      />
      <DetailParagraph
        text='Teléfono:'
        detail= {car.sellerPhone}
      />
      <DetailParagraph
        text='Email:'
        detail= {car.sellerEmail}
      />
    </div>
  )
}

export default SellerDetails;
