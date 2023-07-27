import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {id, teamImageUrl, name} = team
  return (
    <>
      <li className="card">
        <Link to={`/team-matches/${id}`} className="nav-item-link">
          <img src={teamImageUrl} alt={name} className="team-image" />
          <p className="team-name">{name}</p>
        </Link>
      </li>
    </>
  )
}
export default TeamCard
