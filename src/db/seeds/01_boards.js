
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('boards').del()
    .then(function () {
      // Inserts seed entries
      return knex('boards').insert([
        {name: 'Anime/Manga', code: 'a', tagline: 'yeah it\'s anime'},
        {name: 'Anime/Random', code: 'b', tagline: 'LMFAO XDDD'},
        {name: 'Politically Incorrect', code: 'pol', tagline: 'fucking nazis'}
      ]);
    });
};
