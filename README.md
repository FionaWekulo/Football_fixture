# Football Fixture Generator
This repository contains a JavaScript function that generates fixtures for a round-robin football tournament given an array of teams. Each team plays against every other team twice, once at home and once away. The generated fixtures are returned as an array of objects, each representing a match between two teams.

## How it works
The function generateFixtures takes an array of teams as input. Each team is represented as an object with the properties name, city, and stadium. The function initializes an empty array to store the fixtures and calculates the number of teams, rounds, and matches per round.

For each round, the function generates the fixtures for each match in the round by determining the home and away teams for the match. The first leg of the fixture is added to the fixtures array with the home team playing at their stadium. The second leg of the fixture is also added to the fixtures array with the away team playing at their stadium.

After all matches in a round have been generated, the teams are rotated for the next round. This process is repeated until all rounds have been completed. The generated fixtures are then returned as an array of objects.

## Example
Here’s an example of how to use the generateFixtures function:
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

### This will generate an array of fixtures for a round-robin tournament between the given teams. Each fixture is represented as an object with properties homeTeam, homeCity, awayTeam, awayCity, stadium, and leg.
