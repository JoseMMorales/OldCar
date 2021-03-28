const AboutDetail = ({
  className,
  aboutIcon,
  aboutDetailHeader,
  aboutDetailParagraph
 }) => {

  return (
    <div className={className}>
      {aboutIcon}
      <h6 className='dark-color'>
        {aboutDetailHeader}
      </h6>
      <p>
        {aboutDetailParagraph}
      </p>
    </div>
  )
};

export default AboutDetail;
