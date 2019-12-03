import React from 'react'

// prettier-ignore
const CryptoCoin = props => {
  
  const myFormat = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <section className="tile">
      <section className="imgCont">
        <img
          src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${props.id}.png`}
        />
      </section>
      <section className="coinNameCont">
        <span className="coinName">{props.name}</span>
      </section>
      <section className="priceCont">
        <span className="priceLabel prices label">Price:</span>
        <span className="price prices">${props.price}</span>
      </section>
      <section className="marketCapCont">
        <span className="marketCapLabel label">Cap:</span>
        <span className="marketCap prices">${props.market_cap.toLocaleString()}</span>
      </section>
      <section className="market">
        <span className="marketLabel">Market:</span>
        <section className="marketCont">
          <section className="pcChangeCont"><span className="pcChangeLabel">1h:</span><span className="pcChangeValue">{props.percent_change_1h}%{props.percent_change_1h < 0 ? <i class="fas fa-long-arrow-alt-down"></i> : <i class="fas fa-long-arrow-alt-up"></i>}</span></section>
          <section className="pcChangeCont"><span className="pcChangeLabel">24h:</span><span className="pcChangeValue">{props.percent_change_24h}%{props.percent_change_24h < 0 ? <i class="fas fa-long-arrow-alt-down"></i> : <i class="fas fa-long-arrow-alt-up"></i>}</span></section>
          <section className="pcChangeCont"><span className="pcChangeLabel">7d:</span><span className="pcChangeValue">{props.percent_change_7d}%{props.percent_change_7d < 0 ? <i class="fas fa-long-arrow-alt-down"></i> : <i class="fas fa-long-arrow-alt-up"></i>}</span></section>
        </section>
      </section>
    </section>
  )
}

export default CryptoCoin
