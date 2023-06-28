const games = [
    {recommend: 'Valorant', fun: true},
    {recommend: 'Animal Crossing', fun: true},
    {recommend: 'League of Legends', fun: false},
    {recommend: 'It Takes Two', fun: true},
    {recommend: 'Overwatch 2', fun: false}
]

module.exports = {
    getAll: function() {
        return games;
    }
}