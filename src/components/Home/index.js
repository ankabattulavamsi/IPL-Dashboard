import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplTeamsData()
  }

  getIplTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamData: formattedData, isLoading: false})
  }

  renderMatchCards = () => {
    const {teamData} = this.state

    return (
      <ul className="team-card-container">
        {teamData.map(eachItem => (
          <TeamCard key={eachItem.id} teamDetails={eachItem} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div className="loader" testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="ipl-bg-container">
        <div className="ipl-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo"
            alt="ipl logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <div className="team-card-container">
          {isLoading ? this.renderLoader() : this.renderMatchCards()}
        </div>
      </div>
    )
  }
}

export default Home
