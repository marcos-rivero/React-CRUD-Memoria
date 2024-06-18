const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
    let {name, username, id} = el
	return(
		<tr>
			<td>{name}</td>
            <td>{username}</td>
            <td>
                <button onClick={() => {setDataToEdit(el)}}>Editar</button>
                <button onClick={() => {deleteData(id)}}>Eliminar</button>
            </td>
		</tr>
    )
}

export default CrudTableRow;
