import React from 'react'

class GithubView extends React.Component {

    state = {
        lastOne: {}
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/allegro/repos`)
            .then(response => response.json())
            .then(data => {

                const milisecondDates = data.map((record) => new Date(record.updated_at).getTime());
                const theLastest = data.filter((record ) => new Date(record.updated_at).getTime() === Math.max(...milisecondDates))[0];
                this.setState({
                    lastOne: theLastest,
                })
            })
    }


    render() {
        const {lastOne} = this.state
        return (
            <p>{lastOne.name}</p>
        )
    }
}

export default GithubView


