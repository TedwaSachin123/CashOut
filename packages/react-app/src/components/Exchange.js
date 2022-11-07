import React, { useState } from "react";

import { parseUnits } from "ethers/lib/utils";


import AmountIn from "./AmountIn";
import AmountOut from "./AmountOut";
import Balance from "./Balance";
import PhoneNo from "./PhoneNo";
import styles from "../styles";

const Exchange = () => {
  const api = "https://api.exchangerate-api.com/v4/latest/USD";
  function getResults() {
    fetch(`${api}`)
        .then(toToken => {
            return toToken.json();
        }).then(displayResults);
}
function displayResults(Currency) {
  // let fromRate = currency.rates["USD"];
  let toRate = Currency.rates[currency];
  const finalValue = (toRate * cashOutValue * intousd);
  setintocurrency(finalValue);
}

  const [cashOutValue, setcashOutValue] = useState("0");
  const [cashOutToken, setcashOutToken] = useState("");
  const [networkHandler, setNetworkHandler] = useState(parseInt((window.ethereum.chainId),16)); // initialFromToken
  const [phoneNumber, setphoneNumber] = useState("");
  const [currency, setcurrency] = useState("");
  const [intocurrency, setintocurrency] = useState("");
  // const [resetState, setResetState] = useState(false)
  const [intousd, setintousd] = useState("");

  const onCashOutValueChange = (value) => {
    const trimmedValue = value.trim();

    try {
      trimmedValue && parseUnits(value);
      setcashOutValue(value);
    } catch (e) {}
  };

  const onNetworkHandler = (value) => {
    setNetworkHandler(value);
  };

  const intoUsdhandler = (value) => {
    setintousd(value);
  };
  //console.log(fromValue,fromToken,intousd,toToken)
  const onCurrencyChange = (value) => {
    setcurrency(value);
  };
  
  const oncashOutToken = (value) => {
    setcashOutToken(value);
  };
  const phoneNumberChange = (value) => {
    setphoneNumber(value);
  };
  console.log(phoneNumber)
getResults();
  return (
    <div className="flex flex-col w-full items-center">
      <div className="mb-8 w-[100%]">
        
        <AmountIn
          value={cashOutValue}
          onChange={onCashOutValueChange}
          onChain={onNetworkHandler}
          onToken={oncashOutToken}
          inUsd={intoUsdhandler}
        />
        <Balance  />
      </div>

      <div className="mb-8 w-[100%]">
        <AmountOut
           value={intocurrency}
           onSelect={onCurrencyChange}
        />
        {/* <Balance  /> */}
      </div>

      <div className="mb-8 w-[100%]">
      <PhoneNo
       value={phoneNumber}
       onChange={phoneNumberChange}/>
      </div>

{ "" ? (
        <button
          disabled={""}
          onClick={""}
          className={`${
             "bg-site-pink text-white"
             
          } ${styles.actionButton}`}
        >
          {"Approve"}
        </button>):

        <button
          disabled={""}
          onClick={""}
          className={`${
             "bg-site-pink text-white" 
          } ${styles.actionButton}`}
        >
          {"Transaction"
           }
        </button>

          }
      
    </div>
  );
};

export default Exchange;
