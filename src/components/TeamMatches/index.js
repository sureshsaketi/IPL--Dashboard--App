import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamsData: {}, isLoading: true, team: ''}

  componentDidMount() {
    this.getTeamMatchData()
  }

  getTeamMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    // console.log(data)

    const updateTeamsMatchData = item => ({
      umpires: item.umpires,
      result: item.result,
      manOfTheMatch: item.man_of_the_match,
      id: item.id,
      date: item.date,
      venue: item.venue,
      competingTeam: item.competing_team,
      competingTeamLogo: item.competing_team_logo,
      firstInnings: item.first_innings,
      secondInnings: item.second_innings,
      matchStatus: item.match_status,
    })

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: updateTeamsMatchData(data.latest_match_details),
      recentMatches: data.recent_matches.map(item =>
        updateTeamsMatchData(item),
      ),
    }
    // console.log(updatedData)
    this.setState({teamsData: updatedData, isLoading: false, team: id})
  }

  renderTeamMatchData = () => {
    const {teamsData} = this.state
    console.log(teamsData)
    const {recentMatches, teamBannerUrl, latestMatchDetails} = teamsData

    return (
      <>
        <img
          src={teamBannerUrl}
          alt="team banner url"
          className="team-banner"
        />

        <h1 className="latest-matches-text">Latest Matches</h1>

        <LatestMatch matchDetails={latestMatchDetails} />

        <ul className="recent-matches-container">
          {recentMatches.map(eachMatch => (
            <MatchCard match={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading, team} = this.state
    console.log(team)
    return (
      <div className={`team-matches-bg ${team}`} data-testid="loader">
        {isLoading ? (
          <Loader
            type="TailSpin"
            color="#ffffff"
            height={80}
            width={80}
            className="loader"
          />
        ) : (
          this.renderTeamMatchData()
        )}
      </div>
    )
  }
}
export default TeamMatches
