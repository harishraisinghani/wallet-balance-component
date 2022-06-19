import React, { useState, useEffect } from 'react';
import './WalletBalance.css';
import defaultLogo from '../assets/default-logo.png'

function WalletBalance(props) {
  const [data, getData] = useState([])
  const [address, setAddress] = useState("demo.eth")

  useEffect(() => {
    fetchData()
  }, [])

  const searchAddress = (e) => {
    setAddress(e.target.value)
  }

  const handleImgError = (e) => {
    e.target.src = defaultLogo
  }

  const fetchData = () => {
    let headers = new Headers()
    let authString = `${props.apikey}:`
    headers.set('Authorization', 'Basic ' + btoa(authString))
    const URL = `https://api.covalenthq.com/v1/1/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false`;
    fetch(URL, {method: 'GET', headers: headers})
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
        <div className="search-field">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Enter Wallet Address"
            value={address}
            onChange={searchAddress}
          />
          <button onClick={fetchData}>
            Search Address
          </button>
        </div>
        <div className="balances">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Balance</th>
                <th>Type</th>
                <th>Contract Address</th>
              </tr>
            </thead>
            <tbody>
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
          </table>
        </div>
      </div>
    </>
  );
}

export default WalletBalance;
  