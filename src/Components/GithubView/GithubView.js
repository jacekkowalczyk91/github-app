import React from 'react'

class GithubView extends React.Component {

    state = {
        data: [],
        lastDate: []
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/jacekkowalczyk91/repos`)
            .then(response => response.json())
            .then(data => {

                this.setState({
                    lastDate: new Date(Math.max(...data.map(data => new Date(data.updated_at)))),
                    data: data
                })
            })
    }

    compareBy = key => {
        return function (a, b) {
            if (b[key] < a[key]) return -1;
            if (b[key] > a[key]) return 1;
            return 0;
        };
    }

    sortBy = key => {
        let arrayCopy = [...this.state.data];
        arrayCopy.sort(this.compareBy(key));
        this.setState({data: arrayCopy});
    }



    render() {


        const {data} = this.state
        return (
            <div>
                <button
                    onClick={this.sortBy('updated_at')}
                >Latest repo name
                </button>
                {
                    data.map(
                        data =>
                            <p>{data.name}</p>
                    )
                }
            </div>
        )
    }
}

export default GithubView