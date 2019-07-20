
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {content: 'I agree. it reeked of ASSS!', thread_id: 1},
        {content: 'hitoha a shit', thread_id: 2},
        {content: 'back to your blog', thread_id: 3},
        {content: 'no', thread_id: 4},
        {content: 'orange man bad', thread_id: 5},
      ]);
    });
};
