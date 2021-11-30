import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails
  const getMatchStatusClassName = status =>
    status === 'Won' ? 'match-won' : 'match-lost'
  const matchStatusClassName = `match-status ${getMatchStatusClassName(
    matchStatus,
  )}`

  return (
    <li className="list-card-items">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="matches"
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
