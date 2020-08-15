import React from 'react'

function Direccion() {
    return (
        <div>
           <form>
  <div class="form-row">
    
  </div>
  <div className="form-group">
    <label for="inputAddress">Dirección</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  </div>
    <div className="form-group col-md-4">
      <label for="inputState">Nombre</label>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Teléfono</label>
      <input type="text" className="form-control" id="inputZip">
    </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">Colonia</label>
      <input type="text" className="form-control" id="inputCity">
    </div>
  <div className="form-group">
  </div>
  <button type="submit" class="btn btn-primary">Mandar Pedido</button>
</form> 
        </div>
    )
}

export default Direccion
