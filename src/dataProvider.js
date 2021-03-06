function graphQlRequest(query, variables, options) {
    var debug = false;
    var host = debug ? "//backend.ksl.localhost:3300/api.php" : "http://new.ksl.sk/api.php";
    return fetch(host, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        mode: "cors",
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: options && options.cookies ? "include" : "omit",
        body: JSON.stringify({
            query,
            variables: variables,
        })
    })
        .then(r => r.json())
        .then(response => {
            console.log('data returned:', response);
            return response.data;
        });
}

const providers = {
    getUser: function() {
        return graphQlRequest('{ user { name, roles } }', null, { cookies: true });
    },

    getTeamsStandings: function() {
        return graphQlRequest('{ teams { standing, name, score, games_played, games_won, games_lost, points, success_rate } }');
    },
  
    getNewsList: function() {
        return graphQlRequest('{ news { id, title, text, date {date} } }');
    },

    getMenuTeamsList: function() {
        return graphQlRequest('{ teams { id, short, name } }');
    },

    getPlaygroundsList: function() {
        return graphQlRequest('{ playgrounds { id, name, address, district } }');
    },

    get2ptShooters: function() {
        return graphQlRequest(`{
            shooters_2pt { 
              standing
              player { display_name },
              team { name },
              games,
              points,
              average
            }
          }`);
    },

    get3ptShooters: function() {
        return graphQlRequest(`{
            shooters_3pt { 
              standing
              player { display_name },
              team { name },
              games,
              points,
              average
            }
          }`);
    },

    getListOfPlayingDates: function() {
        return graphQlRequest(`{matchDays {
            timestamp,
            date
          }}`)
    },

    getListOfScheduledMatches: function() {
        return graphQlRequest(`{ matches {
            home_team {
              id,
              short,
              games_won,
              games_lost
            },
            away_team {
              id,
              short,
              games_won,
              games_lost
            },
            date {
              timestamp
              date,
              datetime_human
            }
            home_score,
            away_score
          }}`)
    }
};

export default providers;
export { graphQlRequest };