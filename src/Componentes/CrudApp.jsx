import { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret", 
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",        
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",        
      }
]
const CrudApp = () => {
    const [db, setDb] = useState(initialDb);    
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now();	
		setDb([...db, data])	

    }
    const updateData = (data) => {
        let newData = db.map((el) => el.id === data.id ? data : el)
        setDb(newData);
    }

    const deleteData = (id) => {
        let isDelete = window.confirm(`Estas seguro de eliminar el registro id '${id}'?`);
        if(isDelete){
            let newData = db.filter(el => el.id !== id);
            setDb(newData)
        }
    }

	return(
		<div>
			<h2>CRUD App</h2>
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
			<CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />

		</div>
)
}

export default CrudApp;

