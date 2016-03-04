
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stories', function(t){
    t.increments();
    t.string('author');
    t.text('story');
    t.integer('rating');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stories')
};
