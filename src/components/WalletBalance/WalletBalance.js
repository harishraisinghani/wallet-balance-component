import React, { useState, useEffect } from 'react';
import './WalletBalance.css';

export default function WalletBalance() {
  const [data, getData] = useState([])
  const [address, setAddress] = useState("demo.eth")

  useEffect(() => {
    fetchData()
  }, [])

  const searchAddress = (e) => {
    setAddress(e.target.value)
  }

  const handleImgError = (e) => {
    e.target.src = "/logo192.png"
  }

  const fetchData = () => {
    const URL = `https://api.covalenthq.com/v1/1/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=${process.env.REACT_APP_COVALENT_API_KEY}`;
    fetch(URL)
      .then((res) =>
        res.json())

      .then((response) => {
        console.log(response)
        getData(response.data.items)
      })
  }

  return (
    <>
      <div className="wrapper">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Enter Address"
              value={address}
              onChange={searchAddress}
            />
          </label>
          <button onClick={fetchData}>
            Search Address
          </button>
        </div>
        <h1>Wallet Balances</h1>
        <h3>Address: {address} </h3>
        <tbody>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Balance</th>
            <th>Type</th>
            <th>Contract Address</th>
          </tr>
          {data.map((item, i) => (
            <tr key={i}>
              <td><img src={item.logo_url} onError={handleImgError} /></td>
              <td>{item.contract_name}</td>
              <td>{item.contract_ticker_symbol}</td>
              <td>{Math.floor(item.balance/10**item.contract_decimals)}</td>
              <td>{item.type}</td>
              <td>{item.contract_address}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </>
  );
}
  