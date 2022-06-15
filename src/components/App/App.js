import React from 'react';

import WalletBalance from '../WalletBalance/WalletBalance'

function App() {
  return(
    <div className="WalletBalance">
      <WalletBalance apikey={process.env.REACT_APP_COVALENT_API_KEY} />
    </div>
  )
}

export default App;