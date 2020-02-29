import fetch from 'isomorphic-unfetch'

class Trials extends React.Component {
    static async getInitialProps(context) {

        const API_URL = 'https://api.github.com'
        async function fetcher(path) {
          const res = await fetch(API_URL + path)
          const json = await res.json()
          return json
        }
        return useSWR('/repos/zeit/next.js', fetcher)
        
    }

 
    render() {
       
        return (
            <>
            <div>Next stars: {this.data.stargazers_count}</div>
                <h1>Trials Page</h1>
                <p>{this.props.errorMessage}</p>

                <form action="/trials" method="GET">
                  <table>
                      <thead>
                          <tr>
                            <th>Worker ID</th>
                            <th>Experiment ID</th>
                            <th>Trial ID</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <td id = "worker_id" name = "worker_id">A123:</td>
                            <td id = "experiment_id" name = "experiment_id">123:</td>
                            <td id = "trial_id" name = "trial_id">0:</td>
                          </tr>
                      </tbody>
                      
                  </table>
                </form>
            </>
        );
    }
}

export default Trials;
