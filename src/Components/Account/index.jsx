import Button from "../Button"

function Account() {
    return (
        <>
            <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Button
          buttonClass="transaction-button"
          text="View transactions"/>
        </div>
      </section>
        </>
    )
}

export default Account