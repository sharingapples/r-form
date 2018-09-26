import React from 'react';

const Output = ({ value }) => (
  <div className="form-container">
    <div className="form-title">
      Output Data
    </div>

    <div className="data-collection">
      {value.name && (
      <div className="data-row">
        <div className="data-label">
          Name :
        </div>
        <div className="data-contents">
          {value.name.firstName} {value.name.middleName} {value.name.lastName}
        </div>
      </div>)}
      {value.age && (
      <div className="data-row">
        <div className="data-label">
          Age :
        </div>
        <div className="data-contents">
          {value.age}
        </div>
      </div>)}

      {value.gender && (
      <div className="data-row">
        <div className="data-label">
          Gender :
        </div>
        <div className="data-contents">
          {value.gender}
        </div>
      </div>)}

      {value.married && (
      <div className="data-row">
        <div className="data-label">
          Maritail Status :
        </div>
        <div className="data-contents">
          {value.married}
        </div>
      </div>)}

      {value.spouse && (
        <div>
          <div className="data-row">
            <div className="data-label">
              Spouse Name :
            </div>
            <div className="data-contents">
              {value.spouse.name}
            </div>
          </div>
          <div className="data-row">
            <div className="data-label">
              Spouse Age :
            </div>
            <div className="data-contents">
              {value.spouse.age}
            </div>
          </div>
        </div>
      )}

      {value.address1 && (
      <div className="data-row">
        <div className="data-label">
         Permanent Address :
        </div>
        <div className="data-contents">
          {value.address1}
        </div>
      </div>)}

      {value.address2 && (
        <div className="data-row">
          <div className="data-label">
          Temporary Address :
          </div>
          <div className="data-contents">
            {value.address2}
          </div>
        </div>)}

      {value.city && (
      <div className="data-row">
        <div className="data-label">
         City :
        </div>
        <div className="data-contents">
          {value.city}
        </div>
      </div>)}

      {value.state && (
      <div className="data-row">
        <div className="data-label">
        State :
        </div>
        <div className="data-contents">
          {value.state}
        </div>
      </div>)}

      {value.zip && (
      <div className="data-row">
        <div className="data-label">
        Zip :
        </div>
        <div className="data-contents">
          {value.zip}
        </div>
      </div>)}

      {value.email && (
      <div className="data-row">
        <div className="data-label">
        E-mail :
        </div>
        <div className="data-contents">
          {value.email.toString()}
        </div>
      </div>)}
      {value.phoneNumber && (
      <div className="data-row">
        <div className="data-label">
        Phone No :
        </div>
        <div className="data-contents">
          {value.phoneNumber.toString()}
        </div>
      </div>)}
    </div>

    <div className="almaMater-container">
      <div className="almaMater-title"> Education </div>
      <table className="almaMater-Table">
        <tbody>
          <tr>
            <th> Level </th>
            <th> Institute </th>
            <th> University </th>
            <th> Year </th>
            <th> Grade </th>
          </tr>
          {
            value.school && value.school.map((s, idx) => (
              <tr key={idx}>
                {idx === 0 ? <td className="table-label" rowSpan={value.school.length}> School</td> : null }
                <td> {s.institute} </td>
                <td> {s.university} </td>
                <td> {s.year} </td>
                <td> {s.grade} </td>
              </tr>
            ))
          }

          {
            value.hss && value.hss.map((s, idx) => (
              <tr key={idx}>
                {idx === 0 ? <td className="table-label" rowSpan={value.hss.length}> H.S.S</td> : null }
                <td> {s.institute} </td>
                <td> {s.university} </td>
                <td> {s.year} </td>
                <td> {s.grade} </td>
              </tr>
            ))
          }


          {
            value.bachelors && value.bachelors.map((s, idx) => (
              <tr key={idx}>
                {idx === 0 ? <td className="table-label" rowSpan={value.bachelors.length}> Bachelors</td> : null }
                <td> {s.institute} </td>
                <td> {s.university} </td>
                <td> {s.year} </td>
                <td> {s.grade} </td>
              </tr>
            ))
          }


          {
            value.masters && value.masters.map((s, idx) => (
              <tr key={idx}>
                {idx === 0 ? <td className="table-label" rowSpan={value.masters.length}> Masters</td> : null }
                <td> {s.institute} </td>
                <td> {s.university} </td>
                <td> {s.year} </td>
                <td> {s.grade} </td>
              </tr>
            ))
          }


          {
            value.doctor && value.doctor.map((s, idx) => (
              <tr key={idx}>
                {idx === 0 ? <td className="table-label" rowSpan={value.doctor.length}> Doctor</td> : null }
                <td> {s.institute} </td>
                <td> {s.university} </td>
                <td> {s.year} </td>
                <td> {s.grade} </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  </div>
);

export default Output;
