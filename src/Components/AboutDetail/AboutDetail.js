
const AboutDetail = ({
  className,
  aboutIcon,
  aboutDetailHeader,
  aboutDetailParagraph
 }) => {

  console.log(aboutIcon);
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
