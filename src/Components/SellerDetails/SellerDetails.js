import { DetailParagraph } from '../../Components/Generic';

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
    </div>
  )
}

export default SellerDetails;
