# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
  {username: "Bobby Brown"},
  {username: "Scobius Mckenzie"},
  {username: "Toki"},
  {username: "Suntory Macintosh"},
  {username: "Serafina Brown"},
  {username: "SixAndThreeQuarters"},
  {username: "Lynette Wilson"},
  {username: "Scoby Brown"},
  {username: "EnvelopeBoy"},
  {username: "Hell no"},
  {username: "Hell yeah"},
  {username: "Sarah Strong"},
  {username: "c00lchik91"},
  {username: "usernamezzzz2"},
  {username: "dali_museum"},
  {username: "JIF"}
])

Artwork.create([
  {title: 'painting 1', image_url: 'jd.com', artist_id: 1 },
  {title: "painting 2", image_url: 'ds.com', artist_id: 1},
  {title: "painting 3", image_url: 'sa.com', artist_id: 1},
  {title: "the scream", image_url: 'ls.com', artist_id: 2},
  {title: "the boogaloo", image_url: 'sw.com', artist_id: 2},
  {title: "the rising sun", image_url: 'wd.com', artist_id: 2},
  {title: "mountainside", image_url: 'ew.com', artist_id: 3},
  {title: "frescoes al fresco", image_url: '29.com', artist_id: 3},
  {title: "Where Am I Today?", image_url: '34.com', artist_id: 3},
  {title: "Revolutionary Pain Releif", image_url: 'stressinmeout.com', artist_id: 4},
  {title: "20th century drama", image_url: 'seriously.com', artist_id: 5},
  {title: "ERGOTRON", image_url:'4real.com', artist_id: 6},
  {title: "extra crunchy peanut butter", image_url:'urlsr4bosses.io', artist_id: 16}  
])

ArtworkShare.create([
  {artwork_id: 1, viewer_id: 4},
  {artwork_id: 2, viewer_id: 6},
  {artwork_id: 3, viewer_id: 9},
  {artwork_id: 4, viewer_id: 8},
  {artwork_id: 5, viewer_id: 2},
  {artwork_id: 5, viewer_id: 1},
  {artwork_id: 6, viewer_id: 7},
  {artwork_id: 3, viewer_id: 6},
  {artwork_id: 4, viewer_id: 5},
  {artwork_id: 4, viewer_id: 4},
  {artwork_id: 4, viewer_id: 2},
  {artwork_id: 5, viewer_id: 3},
  {artwork_id: 6, viewer_id: 9},
  {artwork_id: 7, viewer_id: 7},
  {artwork_id: 8, viewer_id: 6},
  {artwork_id: 9, viewer_id: 4},
  {artwork_id: 9, viewer_id: 3},
  {artwork_id: 10, viewer_id: 8},
  {artwork_id: 10, viewer_id: 7},
  {artwork_id: 11, viewer_id: 6},
  {artwork_id: 11, viewer_id: 4},
  {artwork_id: 11, viewer_id: 2},
  {artwork_id: 12, viewer_id: 6},
  {artwork_id: 12, viewer_id: 5},
  {artwork_id: 12, viewer_id: 4},
  {artwork_id: 13, viewer_id: 1},
  {artwork_id: 13, viewer_id: 2},
  {artwork_id: 13, viewer_id: 3},
])