exports.up = function(knex, Promise) {
    return knex.schema.createTable('boards', function(table){
        table.increments();
        table.string('name').notNullable();
        table.string('code').notNullable();
        table.string('tagline').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    }).
    createTable('threads', function(table){
        table.increments();
        table.string('title').notNullable();
        table.boolean('is_pinned').notNullable().defaultTo(false);
        table.integer('score').notNullable().defaultTo(0);
        table.integer('board_id').references('id').inTable('boards').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        
    }).
    createTable('posts', function(table){
        table.increments();
        table.string('username').defaultTo(null);
        table.string('tripcode').defaultTo(null);
        table.text('content').notNullable();
        table.boolean('is_banned_for').notNullable().defaultTo(false);
        table.integer('thread_id').references('id').inTable('threads').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    }).
    createTable('bans', function(table){
        table.increments();
        table.string('ip_address').notNullable();
        table.integer('ban_length');
    }).
    createTable('news', function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('creator');
        table.text('content').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts').dropTable('threads').dropTable('boards').dropTable('bans');
};