import Button from "../../Components/Button"
import Accounts from "../../Components/Accounts"
import accountsList from "../../datas/userAccount.json"

function User() {
    return (
        <>
        <div className="main-user">
        <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <Button
        buttonClass="edit-button"
        text="Edit Name"/>
      </div>
      {accountsList.map((account) => (
        <Accounts 
            key={account.id}
            title={account.title}
            amount={account.amount}
            balance={account.balance}
        />
      ))}
    </main>
    </div>
    </>
    )
}

export default User