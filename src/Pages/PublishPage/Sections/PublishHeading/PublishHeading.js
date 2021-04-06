const PublishHeading = ({
  CarNotPublished,
  user
 }) => {

  return (
    <>
       {
        (CarNotPublished || !user)  &&
        <div className='heading-publish'>
          <h1 className='main-heading grey-color'>
            Publica tu anuncio en Old
            <span className='main-color'>Car</span>
          </h1>
          <p>
            UNA PUBLICACIÓN GRATIS. MÁXIMA DIFUSION: Al publicar en
            Old
            <span className='main-color'>Car</span>, su coche aparecerá también en una extensa red de
            portales asociados a nosotros...
          </p>
          <p>
            <b>*Campos obligarorios</b>
          </p>
        </div>
      }
      {
        (user && !CarNotPublished) &&
        <div className='heading-publish'>
          <h1 className='main-heading grey-color'>
            Edita tu anuncio en Old
            <span className='main-color'>Car</span>
          </h1>
          <p>
            En Old
            <span className='main-color'>Car</span> podrás editar tus anuncios con todos los detalles
            que quieras cambiar y luego verlos en página de usuario.
          </p>
          <p>
            <b>*Campos obligarorios</b>
          </p>
        </div>
      }
    </>
  )
};

export default PublishHeading;
