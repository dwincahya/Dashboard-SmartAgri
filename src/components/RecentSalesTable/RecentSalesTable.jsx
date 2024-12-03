import React from 'react'

function RecentSalesTable({items}) {
  const handleStatus = status => {
    switch (status) {
      case "Approved":
        return 'success';
        break;
      case "Pending":
        return 'warning';
        break;
      case "Rejected":
        return 'danger';
        break;
      default:
        return 'success';
    }
  };

  return (
    <table className="table table-borderless datatable">
      <thead className="table-light">
        <tr>
          <th scope=''>#</th>
          <th scope='col'>Kustomer</th>
          <th scope='col'>Komoditas</th>
          <th scope='col'>{'Harga (Kiloan)'}</th>
          <th scope='col'>Jumlah</th>
          <th scope='col'>Total</th>
          <th scope='col'>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          items &&
          items.length > 0 &&
          items.map(item => (
            <tr key={item._id}>
              <th scope='row'>
                <a href="#">{item.kode}</a>
              </th>
              <td>{item.kustomer}</td>
              <td>
                <a href="#" className='text-primary'>
                  {item.komoditas}
                </a>
              </td>
              <td>Rp{item.harga.toFixed()}</td>
              <td>{item.jumlah.toFixed()} Kg</td>
              <td>Rp{item.harga.toFixed()*item.jumlah.toFixed()}</td>
              <td>
                <span className={`badge bg-${handleStatus(item.status)}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default RecentSalesTable;