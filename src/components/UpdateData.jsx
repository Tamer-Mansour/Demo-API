import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const UpdateData = ({ catData }) => {
  const location = useLocation()
  const object = location.state
  // const { id } = useParams();
  // console.log({ catData });
  return (
    <div className="contaner">
      <h1 style={{ textAlign: 'center' }}>
        This is The <strong>{object.breed}</strong> breed Update nformation
      </h1>
      <form>
        <table
          class="table container table-striped"
          style={{ textAlign: 'center' }}
        >
          <thead>
            <tr>
              <th scope="col">breed</th>
              <th scope="col">coat</th>
              <th scope="col">country</th>
              <th scope="col">origin</th>
              <th scope="col">pattern</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <input
                  type="text"
                  value={object.breed}
                  className="form-control"
                />
              </th>
              <th>
                <input
                  type="text"
                  value={object.coat}
                  className="form-control"
                />
              </th>
              <th>
                <input
                  type="text"
                  value={object.country}
                  className="form-control"
                />
              </th>
              <th>
                <input
                  type="text"
                  value={object.origin}
                  className="form-control"
                />
              </th>
              <th>
                <input
                  type="text"
                  value={object.pattern}
                  className="form-control"
                />
              </th>
              <th>
                <input
                  type="submit"
                  value="UPDATE"
                  className="btn btn-success"
                />
              </th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default UpdateData
