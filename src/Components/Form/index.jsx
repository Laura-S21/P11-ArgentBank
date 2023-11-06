import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import Button from "../Button"

function Form() {
    return (
        <>
        <FontAwesomeIcon icon={faCircleUser} className='user-icon sign-in-icon'/>
        <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me </label>
                </div>
                <Button
                buttonClass="sign-in-button"
                text="Sign In"
                />
            </form>
        </>
    )
}

export default Form