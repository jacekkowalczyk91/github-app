import React from 'react'

class GithubView extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/jacekkowalczyk91/repos`)
            .then(response => response.json())
            .then(data =>
                this.setState({data})
            )
    }


    render() {

        const maxDate = this.state.data.map(function (e) {
            return e.updated_at;
        }).sort().reverse()[0]

        return (
            <div>
                {
                    maxDate
                }
            </div>
        )
    }
}

export default GithubView