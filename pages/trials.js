import fetch from 'isomorphic-unfetch'

class Trials extends React.Component {
    static async getInitialProps(context) {

      const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
      const data = await res.json();
    
      console.log(`Show data fetched. Count: ${data.length}`);
    
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
