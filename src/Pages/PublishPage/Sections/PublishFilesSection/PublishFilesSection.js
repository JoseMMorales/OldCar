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
      />
      <div className='files-uploaded'>
        {
          (CarNotPublished || !user) &&
          userInput.files.map((file, key) => {
            const photoNumber = key + 1;
            return (
              <div className='file' key={key}>
                  <b>Foto {photoNumber}:</b> {file.name}
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
                  style={{'width' : '250px'}}
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
