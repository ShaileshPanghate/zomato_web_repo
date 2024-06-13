import React from 'react';
import Nav from '../Component/Nav';
import Fot from '../Component/footer'
const AddRestro = () => {
  return (
    <div>
      <div><Nav /></div>
      <div>
        <form action="">
          <label htmlFor="">Name of Restaurant :</label>
          <input type="text" />
          <label htmlFor="">Address :</label>
          <input type="text" />
          <label htmlFor="">Locality NearBy :</label>
          <input type="text" />
        </form>
      </div>
      <div>
        <Fot />
      </div>
    </div>
  );
}

export default AddRestro;


