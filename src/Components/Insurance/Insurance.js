import { useState, useEffect } from 'react';
import { Button } from '../../Components/Generic';

const mutua = 'https://www.mutua.es/seguros-coche/calcular/?sem=sem:sem:sitelink:mejorprecio:coche:google:google:sitelink-precio:marca:sitelink:sem:sitelink:pc:sem&gclid=EAIaIQobChMIxJy746Ld7gIVjpftCh1d-ADGEAAYASABEgKWQ_D_BwE&gclsrc=aw.ds#/codigoPostal';
const genesis = 'https://www.genesis.es/seguros-coche?sbr=0010-0002&mkwid=bXoCLoQH_dc&pcrid=428020828996&pkw=calcular%20seguro%20genesis&pmt=e&slid=&pgrid=16042114686&ptaid=kwd-72016711951&gclid=EAIaIQobChMIkPiroKLd7gIVgp7tCh3xvQ-SEAAYASAAEgL98_D_BwE';

const Insurance = () => {
  const [linkURL, setLinkURL] = useState('')

  useEffect(() => {
      linkURL && window.open(linkURL, '_blank');
      setLinkURL('');
  }, [linkURL]);

  return (
    <div className="insurance-car">
      <div className="insurance-calculator">
        <img
          className="image-insurance"
          src="/img/mutuaImg.jpg"
          alt="insurance-company"
        />
        <h3>Calcula tu seguro de coche</h3>
        <p>Vente a la Mutua y sea cual sea el precio de tu seguro de coche, TE LO BAJAMOS!</p>
        <Button
          className="btn-search"
          name="Calcula tu seguro"
          onClick={() => setLinkURL(mutua)}
        />
      </div>
      <div className="insurance-calculator">
        <img
          className="image-insurance"
          src="/img/genesisImg.jpg"
          alt="insurance-company"
        />
        <h3>Calcula tu seguro de coche</h3>
        <p>El mejor precio en todas las modalidades. Seguro a Terceros Ampliado desde 134€.</p>
        <Button
          className="btn-search"
          name="Calcula tu seguro"
          onClick={() => setLinkURL(genesis)}
        />
      </div>
    </div>
  )
}

export default Insurance;
