import { useContext } from "react";
import MyUserContext from "./MyUserContext";
const UserProfile = () => {
    const { state, dispatch } = useContext(MyUserContext);
    const updateField = (e) => {
        // field ist "name", "email" oder "age"
        // value ist das was wir ins input feld tippen
        dispatch({type: 'UPDATE_FIELD', field: e.target.name, value: e.target.value})
    }

    const resetFields = () => {
        dispatch({type: 'RESET_FIELDS'})
    }

    const preloadData = () => {
        const data = {
            name: "John Doe",
            email: "john.doe@gmail.com",
            age: 34
        };
         //dispatch(action Objekt)
        dispatch({ type: 'PRELOAD_DATA', data: data});
    }

    return (
        <>
            <input name="name" placeholder="Name" value={state.name} onChange={updateField}/>
            <input name="email" placeholder="Email" value={state.email} onChange={updateField}/>
            <input name="age" placeholder="Age" value={state.age} onChange={updateField}/>

            <button onClick={preloadData}>preload data</button>
            <button onClick={resetFields}>reset</button>

            <table border="1">
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{state.name}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{state.email}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{state.age}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default UserProfile; 