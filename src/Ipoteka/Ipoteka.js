import React, { useState } from "react";
import IpotekaCode from "./IpotekaCode";
export default function Ipoteka(){
    const [creditValue, setCreditValue] = useState(12000000)
    const [vznosValue, setVznosValue] = useState(2500000)
    const [srokValue, setSrokValue] = useState(10)
    const [stavkaValue, setStavkaValue] = useState(3)
    function creditInput(creditInput) {
        setCreditValue(creditInput.target.value)
        if (vznosValue > creditInput.target.value) {
            setVznosValue(creditInput.target.value);
        }
    }

    function vznosInput(vznosInput) {
        setVznosValue(vznosInput.target.value)
    }

    function srokInput(srokInput) {
        setSrokValue(srokInput.target.value)
    }

    function stavkaInput(stavkaInput) {
        setStavkaValue(stavkaInput.target.value)
    }

    let StavkaIpotekaMonth = Math.round((creditValue - vznosValue) / stavkaValue / 12 / 100);
    let IpotekaMonth = Math.round((creditValue - vznosValue) * StavkaIpotekaMonth * stavkaValue / ( stavkaValue - 1 ))
    let Overprice = (IpotekaMonth * srokValue - (creditValue - vznosValue))
    let AllSum = (Overprice + (creditValue - vznosValue) )
    return(
        <>
            <div className="mainown bg-sky-500 font-sans">
            <div className="awesome">
                <label htmlFor="name">Введите своё имя: </label>
                <input type="text" id="name" />
            </div>
            </div>
            <div className="container my-container font-sans">
                <div className="card_ipoteka">
                <div className="card-header my-card-header">
                    <h5 className="card-title">Калькулятор ипотечного кредитования</h5>
                </div>
                <div className="card-body">
                    <label htmlFor="creditText">Стоимость недвижимости:</label>
                    <input
                        type="text"
                        id="creditText"
                        className="form-control"
                        aria-describedby="creditNumberHolder"
                        value={creditValue + " ₽"}
                    />
                    <input
                        type="range"
                        className="form-control-range"
                        id="creditRange"
                        min={0}
                        max={15000000}
                        value={creditValue}
                        onInput={creditInput}
                    />
                    <small id="creditNumberHolder" className="form-text text-muted">
                    Сумма, которую за вас заплатит банк.
                    </small>
                </div>
                <div className="card-body">
                    <label htmlFor="firstContributionText">Первоначальный взнос:</label>
                    <input
                    type="text"
                    id="firstContributionText"
                    className="form-control"
                    aria-describedby="firstContributionNumberHolder"
                    value={vznosValue + " ₽"}
                    />
                    <input
                    type="range"
                    className="form-control-range"
                    id="firstContributionRange"
                    min={0}
                    max={creditValue}
                    value={vznosValue}
                    onInput={vznosInput}
                    />
                    <small
                    id="firstContributionNumberHolder"
                    className="form-text text-muted"
                    >
                    Ваш первичный взнос в качестве погашения кредита (обычно сразу после
                    сделки)
                    </small>
                </div>
                <div className="card-body">
                    <label htmlFor="returnPeriodText">Срок кредита:</label>
                    <input
                    type="text"
                    id="returnPeriodText"
                    className="form-control"
                    aria-describedby="returnPeriodNumberHolder"
                    value={srokValue + "  лет"}
                    />
                    <input
                    type="range"
                    className="form-control-range"
                    id="returnPeriodRange"
                    min={10}
                    max={30}
                    value={srokValue}
                    onInput={srokInput}
                    />
                    <small id="returnPeriodNumberHolder" className="form-text text-muted">
                    Как долго в годах планируете возвращать долг.
                    </small>
                </div>
                <div className="card-body">
                    <label htmlFor="percentNumber">Годовая процентная ставка:</label>
                    <input
                    type="text"
                    id="percentNumber"
                    className="form-control"
                    aria-describedby="percentNumberHolder"
                    value={stavkaValue + " 5 %"}
                    />
                    <input
                    type="range"
                    className="form-control-range"
                    min={5}
                    max={20}
                    value={stavkaValue}
                    onInput={stavkaInput}
                    step="0.01"
                    />
                    <small id="percentNumberHolder" className="form-text text-muted">
                    Столько процентов начисляется на ваш долг в год.
                    </small>
                </div>
                <hr />
                <div className="card-footer">
                    <p className="my-result">
                    <strong>Ежемесячная ставка:</strong> <span id="payment">
                        {StavkaIpotekaMonth}  %
                        </span> 
                    </p>
                    <p className="my-result">
                    <strong>Итого:</strong> <span id="payment">
                        {IpotekaMonth}
                        </span> ₽ в месяц
                    </p>
                    <small className="form-text text-muted">
                    Общая выплата: <span id="common">
                        {AllSum} ₽
                    </span>
                    </small>
                    <small className="form-text text-muted">
                    Переплата: <span id="subpayment">
                        {Overprice} ₽</span>
                    </small>
                </div>
                </div>
                <canvas id="graph" width={400} height={250} />
            </div>
        </>

    )
}