import Button from "../Button"

function Account({title, amount, balance, id}) {
    return (
        <>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">{title}</h3>
                    <p className="account-amount">{amount}</p>
                    <p className="account-amount-description">{balance}</p>
                </div>
                <div className="account-content-wrapper cta">
                    <Button
                    buttonClass="transaction-button"
                    text="View transactions"
                    />
                </div>
            </section>
        </>
    )
}

export default Account