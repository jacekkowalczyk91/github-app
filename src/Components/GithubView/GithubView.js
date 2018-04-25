import React from 'react'

class GithubView extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/allegro/repos`)
            .then(response => response.json())
            .then(data => this.setState({data}))
    }

    render() {

        const {data} = this.state
        return (
            <div>
                {
                    data && data.map(
                        (dat, index) => (
                            <div key={index}>
                                <h1>{dat.name}</h1>
                            </div>
                        )
                    )
                }
            </div>
        )
    }
}

export default GithubView