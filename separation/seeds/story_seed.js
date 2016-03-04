
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('stories').del(),

    // Inserts seed entries
    knex('stories').insert({
      id: 1,
      author: 'Scott',
      story: 'Bacon ipsum dolor amet frankfurter drumstick tri-tip ball tip cow. Leberkas turkey short ribs, turducken shank fatback beef alcatra salami pancetta pork loin pork chop jerky corned beef. Pork chop doner landjaeger, flank capicola turducken fatback beef strip steak. Shoulder filet mignon meatloaf cupim picanha, biltong jowl landjaeger strip steak salami. Shank short ribs brisket venison, tail beef ribs landjaeger ham short loin turducken flank picanha shoulder pork pancetta.',
      rating: 3}),
    knex('stories').insert({
      id: 2,
      author: 'Patty D',
      story: "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?",
      rating: 5}),
    knex('stories').insert({
      id: 3,
      author: 'John Mulaney',
      story: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.",
      rating: 4}),
    knex('stories').insert({
      id: 4,
      author: 'April',
      story: "Pommy ipsum Union Jack a right royal knees up come hither meat and two veg air one's dirty linen, utter shambles Doctor Who ever so pants teacakes beefeater copper, it's spitting River Song proper fancy a cuppa cockney. Well fit hard cheese old boy see a man about a dog by 'eck love a right corker bobby, we'll be 'avin less of that stew and dumps a total jessie real ale sweet fanny adams, bread and butter pudding warts and all scones ey up. Eton mess jolly good it's spitting the fuzz gobsmacked, Big Ben pompous wibbly-wobbly timey-wimey stuff. Flabbergasted ever so chips it's spitting have a kip jellied eels bloke porky-pies fancied a flutter, because there was nothing on the gogglebox bargain Betty sod's law pezzy little god save the queen meat and two veg big light munta down South, absolute twoddle daft cow what a load of cobblers getting on my wick got his end away bog off curry sauce. - See more at: http://www.pommyipsum.com/#sthash.E2CbrsDj.dpuf",
      rating: 2})

  );
};
