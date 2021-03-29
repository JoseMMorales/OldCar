import AdminTable from '../../../Components/AdminTable/AdminTable';

const CarsTable = ({ getAdminCars, cars }) => {
  const carHeader =  [ 'ID', 'ESTADO', 'MARCA', 'MODELO', 'AÑO', 'PRECIO', 'KM', 'USUARIO', 'ELIMINAR'];

  const adminRemoveCar = (id) => {
    if (confirm('Está seguro de que quieres borrar el coche?')) {
      const token = localStorage.getItem('UserToken');
      const config = {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}`}
    };
    fetch(`http://localhost:8000/admin/delete/car/${id}`, config)
      .then(response => {
        if (!response.ok)
          throw new Error(response.statusText);
        return response.json();
      })
      .then(res => {
        res.code === 200 ?
        getAdminCars() :
        alert('Ha habido un fallo, por favor inténtalo otra vez');
      })
      .catch(e => console.log(e));
    }
  };

  return (
    <>
      <AdminTable
        adminTitle='Publicaciones'
        tHeadLoop={carHeader}
        tBodyLoop={cars}
        onClickName={adminRemoveCar}
      />
    </>
  )
};

export default CarsTable;
