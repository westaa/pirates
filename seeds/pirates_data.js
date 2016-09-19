exports.seed = function(knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('pirates').del(),

        // Inserts seed entries
        knex('pirates').insert({
            name: 'Blackbeard',
            accessory: 'sword',
            poison: 'rum',
            image_url: 'http://www.denofgeek.us/sites/denofgeekus/files/0/72/black-sails-blackbeard.jpg',
        }),
        knex('pirates').insert({
            name: 'Captain Bloodbeard',
            accessory: 'dagger',
            poison: 'arsenic',
            image_url: 'http://vignette2.wikia.nocookie.net/lionking/images/c/c2/Captain_Bloodbeard.png/revision/latest?cb=20140220023728',
        }),
        knex('pirates').insert({
            name: 'Mary Reed',
            accessory: 'parrot',
            poison: 'scurvy',
            image_url: 'http://c300221.r21.cf1.rackcdn.com/anne-bonny-and-mary-reed-1361918115_b.gif',
        })
    );
};
