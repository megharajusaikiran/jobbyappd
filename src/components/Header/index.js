import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const {history} = props

  const logoutClicked = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="wholediv">
      <div>
        <Link to="/">
          <img
            alt="website logo"
            className="jobbyimage"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
          />
        </Link>
      </div>
      <div>
        <Link className="homepara" to="/">
          Home
        </Link>
        <Link className="homepara" to="/jobs">
          Jobs
        </Link>
      </div>
      <div>
        <button type="button" className="buttonstyle" onClick={logoutClicked}>
          Logout
        </button>
      </div>
    </div>
  )
}
export default withRouter(Header)
