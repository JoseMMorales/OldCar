import { Button } from '../../Components/Generic';

const AdminTable = ({
  adminTitle,
  tHeadLoop,
  tBodyLoop,
  onClickName
  }) => {

  const newtBodyLoop = Object.values(tBodyLoop).map(obj =>
    obj.active === true ? { ...obj, active: 'Activo' } : { ...obj, active: 'No Activo' }
  );

  return (
    <div className='admin-container'>
      <h2 className='admin-title'>{adminTitle} Old<span className='main-color'>Car</span></h2>
      <div className='table-container'>
        <table className='admin-table'>
          <thead>
            <tr>
              {
                tHeadLoop.map((header, key) => {
                  return  <th key={header}>{header}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              Object.values(newtBodyLoop).map((user, key) => {
                let keyRound = key + 1;
                return (
                  <tr key={`tr-${key}`}>
                    {
                      Object.values(user).map((value, key) => {
                        return <td key={`td-${keyRound}-${key}`}>{value}</td>
                      })
                    }
                    <td>
                      <Button
                        className='btn-reset total-width'
                        name='Borrar'
                        onClick={() =>onClickName(user.id)}
                      />
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default AdminTable;
