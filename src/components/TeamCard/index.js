import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, teamImageUrl, name} = teamDetails

  return (
    <li className="card-container">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={`${name}`} className="team-logo" />
        <p className="team-head">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
