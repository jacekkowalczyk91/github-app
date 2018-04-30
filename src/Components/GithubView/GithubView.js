import React from 'react'
import './GithubView.css'

class GithubView extends React.Component {

    state = {
        lastOne: {},
        style: 'hide'
    }

    fetchData = (event) => {
        event.preventDefault()
        fetch(`https://api.github.com/users/allegro/repos`)
            .then(response => response.json())
            .then(data => {

                const milisecondDates = data.map((record) => new Date(record.updated_at).getTime());
                const theLastest = data.filter((record) => new Date(record.updated_at).getTime() === Math.max(...milisecondDates))[0];
                this.setState({
                    lastOne: theLastest,
                })
            })
    }

    handleClick = () => {
        this.setState({style: 'show'})
    }


    render() {
        const {lastOne} = this.state
        return (
            <form
                className='form'
                onSubmit={this.fetchData}
            >
                <button
                    onClick={this.handleClick}
                    type='submit'
                >Get Latest Modified Allegro Repository
                </button>
                <div
                    className={this.state.style}
                >Repository name: {lastOne.name}</div>
            </form>


        )
    }
}

export default GithubView


