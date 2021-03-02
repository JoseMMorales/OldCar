const DetailParagraph = ( { text, detail } ) => {
  return (
    <p className="feature-detail grey-color">
        {text}<span className="dark-color">{detail}</span>
    </p>
  )
}

export default DetailParagraph;
