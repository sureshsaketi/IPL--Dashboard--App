import './index.css'

const MatchCard = props => {
  const {match} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = match
  const textColor = matchStatus === 'Lost' ? 'lost' : 'won'

  return (
    <>
      <li className="match-card-container">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="team-logo"
        />
        <p>{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={textColor}>{matchStatus}</p>
      </li>
    </>
  )
}
export default MatchCard
