import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamCards: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardsList()
  }

  getTeamCardsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamsArray = data.teams
    const updateData = teamsArray.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamCards: updateData, isLoading: false})
  }

  renderTeamCardsList = () => {
    const {teamCards} = this.state

    return (
      <ul className="team-cards">
        {teamCards.map(eachCard => (
          <TeamCard key={eachCard.id} team={eachCard} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#00bfff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container" data-testid="loader">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
            className="logo-image"
          />
          <h1 className="dashboard">IPL Dashboard</h1>
        </div>
        <div>
          {isLoading ? this.renderLoader() : this.renderTeamCardsList()}
        </div>
      </div>
    )
  }
}

export default Home
