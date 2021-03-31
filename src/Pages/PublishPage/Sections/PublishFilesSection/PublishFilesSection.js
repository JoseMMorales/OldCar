import { Input, Button } from '../../../../Components/Generic';
import { MdAddAPhoto } from 'react-icons/md';

const PublishFilesSection = ({
  handleFiles,
  CarNotPublished,
  user,
  userInput,
  deleteImage,
  updateInput
  }) => {

  return (
    <>
      <Input
        containerClassName='file-container'
        lableClassName= 'custom-file-upload'
        labelName= {
          <>
            {'Click aqui'}
            <MdAddAPhoto className='upload-icon' />
          </>
        }
        htmlFor='uploadImage'
        Inputid='uploadImage'
        onChange={handleFiles}
        inputName='files'
        labelClassName='grey-color'
        type='file'
        disabled={
          ((CarNotPublished || !user) && userInput.files.length === 5 && true) ||
          ((user && !CarNotPublished) && updateInput.files.length === 5 && true) ||
          ((user && CarNotPublished) && userInput.files.length === 5 && true)
        }
      />
      <div className='files-uploaded'>
        {
          (CarNotPublished || !user) &&
          userInput.files.map((file, key) => {
            return (
              <div className='file' key={key}>
                  <img
                  src={URL.createObjectURL(file)}
                  alt="image"
                  className='file-image-toUpload'
                />
                <Button
                  name='X'
                  className='btn-publish remove-images'
                  type='button'
                  onClick={() => deleteImage(file.name, file.carId)}
                />
              </div>
            )
          })
        }
        {
          (user && !CarNotPublished) &&
          updateInput.files.map((car, key) => {
            return (
              <div className='file' key={key}>
                <img
                  src={car.name ? URL.createObjectURL(car) : car}
                  alt="image"
                  className='file-image-toUpload'
                />
                <Button
                  name='X'
                  className='btn-publish remove-images'
                  type='button'
                  onClick={() => deleteImage(car, updateInput['idCar'], key)}
                />
              </div>
            )
          })
        }
      </div>
    </>
  )
};

export default PublishFilesSection;
