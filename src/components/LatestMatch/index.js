import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="team-banner-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card-container">
        <div className="team-banner-card-image-container">
          <div className="team-place-date-container">
            <p className="competing-team-heading">{competingTeam}</p>
            <p className="latest-match-date">{date}</p>
            <p className="latest-match">{venue}</p>
            <p className="latest-match">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
        </div>
        <hr className="separator" />
        <div className="latest-match-container-card">
          <p className="latest-match-heading">First Innings</p>
          <p className="latest-match-value">{firstInnings}</p>
          <p className="latest-match-heading">Second Innings</p>
          <p className="latest-match-value">{secondInnings}</p>
          <p className="latest-match-heading">Man Of The Match</p>
          <p className="latest-match-value">{manOfTheMatch}</p>
          <p className="latest-match-heading">Umpire</p>
          <p className="latest-match-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
