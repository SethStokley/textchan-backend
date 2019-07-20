
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('threads').del()
    .then(function () {
      // Inserts seed entries
      return knex('threads').insert([
        {title: 'That anime was so fucking shit oh my fucking GOD', board_id: 1},
        {title: 'i love hitoha <3', board_id: 1},
        {title: 'hey guys cracky-chan here XD', board_id: 2},
        {title: 'itt: racism', board_id: 3},
        {title: 'le dondald trump', board_id: 3},
      ]);
    });
};
