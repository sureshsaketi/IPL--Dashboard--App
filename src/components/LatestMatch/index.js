import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  console.log(matchDetails)
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = matchDetails

  return (
    <>
      <div className="match-details-container">
        <div className="date-venue-container">
          <div className="match-info">
            <p>{competingTeam}</p>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>

          <div className="com-team-logo-cont">
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="competing-team-logo"
            />
          </div>
        </div>

        <hr />

        <div className="innings-details-container">
          <h1 className="text">First Innings</h1>
          <p className="text">{firstInnings}</p>
          <h3 className="text">Second Innings</h3>
          <p className="text">{secondInnings}</p>
          <h3 className="text">Man Of The Match</h3>
          <p className="text">{manOfTheMatch}</p>
          <h3 className="text">Umpires</h3>
          <p className="text">{umpires}</p>
        </div>
      </div>
    </>
  )
}
export default LatestMatch
