import React from 'react'

function TopSellingItem({item}) {
  return (
    <tr>
        <th scope='row'>
            <a href="#">
                <img src={item.gambar} alt="" />
            </a>
        </th>
        <td>
            <a href="#" className='text-primary fw-bold'>
                {item.komoditas}
            </a>
        </td>
        <td>{item.terjual.toFixed()} Kg</td>
        {/* <td className="fw-bold">{item.sold}</td>
        <td>${(item.price * item.sold).toLocaleString('en-US')}</td> */}
    </tr>
  );
}

export default TopSellingItem;