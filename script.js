function generateFixtures(teams) {
    // Initialize an empty array to store the fixtures
    let fixtures = [];
    // Calculate the number of teams, rounds, and matches per round
    let numTeams = teams.length; //10
    let numRounds = numTeams - 1; //9
    let numMatchesPerRound = numTeams / 2; //5

    // Generate the fixtures for each round
    for (let round = 0; round < numRounds; round++) {
        // Generate the fixtures for each match in the round
        for (let match = 0; match < numMatchesPerRound; match++) {
            // Determine the home and away teams for the match
            let home = teams[match];
            let away = teams[numTeams - 1 - match];
            if (match === 0) {
                away = teams[numRounds];
            }
            // Add the first leg of the fixture to the fixtures array
            fixtures.push({
                homeTeam: home.name,
                homeCity: home.city,
                awayTeam: away.name,
                awayCity: away.city,
                stadium: home.stadium,
                leg: 1
            });
            // Add the second leg of the fixture to the fixtures array
            fixtures.push({
                homeTeam: away.name,
                homeCity: away.city,
                awayTeam: home.name,
                awayCity: home.city,
                stadium: away.stadium,
                leg: 2
            });
        }
        // Rotate the teams for the next round
        let team = teams.pop();
        teams.splice(1, 0, team);
    }
    // Return the generated fixtures
    return fixtures;
}
let teams = [
    { name: 'Cklein Stars', city: 'Nairobi', stadium: 'Cklein Arena' },
    { name: 'Wolves FC', city: 'Nairobi', stadium: 'Wolves' },
    { name: 'Dolphins FC', city: 'Mombasa', stadium: 'Dolphins' },
    { name: 'Sea Horses FC', city: 'Mombasa', stadium: 'Shorses Arena' },
    { name: 'Sharks United', city: 'Kisumu', stadium: 'Sharks Field' },
    { name: 'Lake Basin FC', city: 'Kisumu', stadium: 'Lbasin' },
    { name: 'Thika United', city: 'Thika', stadium: 'Thika Field' },
    { name: 'Mavuno Comrades FC', city: 'Thika', stadium: 'Vuno Grounds' },
    { name: 'Nakuru FC', city: 'Nakuru', stadium: 'Nakuru Field' },
    { name: 'Ostrich Associates', city: 'Nakuru', stadium: 'Oassociates' }
];

let fixtures = generateFixtures(teams);

console.table(fixtures);
