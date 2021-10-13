import React from 'react';
class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td >1</td>
                    <td>Juan</td>
                    <td>juan@gmail.com</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="">
                        <button type="button" className="btn btn-warning">Edit</button>
                        <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
                
            </tbody>
        </table>);
    }
}
 
export default Listar;