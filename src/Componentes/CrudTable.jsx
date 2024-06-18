import CrudTableRow from "./CrudTableRow";
const CrudTable = ({data, setDataToEdit, deleteData}) => {
	return(
		<div>
			<h3>Tabla de datos</h3>
			<table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Nombre de Usuario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                   {data.length === 0 ? <tr><td colspan="3">Sin Datos</td></tr> 
                   : data.map(el => <CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}  />)}
                </tbody>
            </table>
		</div>
    )
}
export default CrudTable;
