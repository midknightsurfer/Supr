"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        imageUrl:
          "https://cdn.britannica.com/38/182838-050-F71E4278/image-Fantastic-Four.jpg",
        tags: "fantastic four, thing, mister fantastic, human torch, invisible woman",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://static.wikia.nocookie.net/bigbangtheory/images/f/ff/Gl.jpg/revision/latest/scale-to-width-down/600?cb=20121223023424",
        tags: "green lantern",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://www.twincities.com/wp-content/uploads/2016/04/from-captain-america-civil-war-to-finding-dory-10-movies-to-look-forward-to-in-2016-734527.jpg",
        tags: "captain america",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://image.api.playstation.com/vulcan/img/rnd/202011/0714/Cu9fyu6DM41JPekXLf1neF9r.png?w=440",
        tags: "spiderman",
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://cdn.vox-cdn.com/thumbor/jYpThE--0G49nlv3vs7fHXZOkhQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23110155/PUNISHER2022001_Cov.jpg",
        tags: "punisher",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://imgix.bustle.com/uploads/image/2020/6/3/49ba04c2-3c4f-487e-9d2c-2bbd73cf2c2b-thor-endgame.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
        tags: "thor",
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMWQ0ODdkOGMtZjYxZC00NjE2LTg3ZWUtNjY3YmQ5ZWI1ZDM2XkEyXkFqcGdeQWFsZWxvZw@@._V1_.jpg",
        tags: "justice league, batman, superman, wonder woman, cyborg, flash",
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/b7PTi9DGtXtRHVpwrREQdP.jpg",
        tags: "fantastic four, thing, mister fantastic, human torch, invisible woman",
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://image.api.playstation.com/vulcan/img/rnd/202011/0714/Cu9fyu6DM41JPekXLf1neF9r.png?w=440",
        tags: "",
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl: "https://i.ytimg.com/vi/rYVVwlQs_V8/maxresdefault.jpg",
        tags: "green lantern",
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://media.wired.com/photos/60ec59a48a1e88a03ed5ce6f/4:3/w_2128,h_1596,c_limit/Science_BlackWidow_BBU-07966_R-(1).jpg",
        tags: "black widow",
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl: "https://ychef.files.bbci.co.uk/976x549/p02z0ptr.jpg",
        tags: "fantastic four, thing, mister fantastic, human torch, invisible woman",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/tg7JDZGiWxSpmA8Gce2eAF.jpg",
        tags: "superman",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BODhlNmU3YWItMzIyZS00YTM1LTlmM2UtOWI4ZTcxYjg3NTIyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg",
        tags: "punisher",
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://i.pinimg.com/474x/8d/83/69/8d8369514ff51872ab0205763a30326b.jpg",
        tags: "captain america",
        userId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://www.cnet.com/a/img/resize/73345289e24c83e885e2e37367b535275651f09b/2021/12/24/aa266356-f4e0-4498-a799-f827efe36ed5/spider-man-no-way-home-new-poster-1200.jpg?auto=webp&fit=crop&height=675&width=1200",
        tags: "spiderman",
        userId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/VxWe7v2GSuQjZtYQX78GHqcXtda95d.jpg?q=50&fit=contain&w=1500&h=791&dpr=1.5",
        tags: "fantastic four, thing, mister fantastic, human torch, invisible woman",
        userId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/91x3+AALEGL.jpg",
        tags: "green lantern",
        userId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://static.standard.co.uk/2021/02/08/14/1463043093-thor-chris-hemsworth-dark-world.jpg?width=1200",
        tags: "thor",
        userId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/SES58wwPNsaY4h3DSvLoA3-1200-80.jpg",
        tags: "flash",
        userId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://cdn.vox-cdn.com/thumbor/U81Tbe4iQDyH4kCs9QN031LkHX4=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18320062/ply_black_widow_avengers.jpg",
        tags: "black widow",
        userId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://static2.srcdn.com/wordpress/wp-content/uploads/2022/02/was-Avengers-endgame-the-final-avengers-movie.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",
        tags: "",
        userId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/04/Fantastic-Four-Movies-Marvel.jpg",
        tags: "fantastic four, thing, mister fantastic, human torch, invisible woman",
        userId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://lrmonline.com/wp-content/uploads/2019/07/FFH.jpg?mrf-size=m",
        tags: "spiderman",
        userId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://fyre.cdn.sewest.net/trm/5f3426de350b910017928a78/websitekeyart-009HdeY-m.jpg?width=600",
        tags: "",
        userId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://cdn2.unrealengine.com/13br-candyapple-newsheader-1920x1080-369027753.jpg",
        tags: "captain america",
        userId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://heroichollywood.com/wp-content/uploads/2020/04/Justice-League-Green-Lantern-Phil-LaMarr-1280x720.jpg",
        tags: "green lantern",
        userId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://ntvb.tmsimg.com/assets/p14716055_b_h8_ac.jpg?w=960&h=540",
        tags: "punisher",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://images.immediate.co.uk/production/volatile/sites/3/2021/12/Screenshot-2021-12-22-at-13.55.11-2c2edb1.png?quality=90&crop=5px,4px,1230px,819px&resize=980,654",
        tags: "hawkeye",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/04/anthony-mackie-captain-america-4.jpg",
        tags: "captain america",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://cdn.vox-cdn.com/thumbor/L16siTPqc86M9e58bZs6SxZo93Q=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23163913/SML115a_0337r1.jpg",
        tags: "superman",
        userId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTI5ODY5NTUzMF5BMl5BanBnXkFtZTcwOTAzNTIzMw@@._V1_.jpg",
        tags: "iron man",
        userId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://www.looper.com/img/gallery/the-dark-history-of-the-flash/l-intro-1623261395.jpg",
        tags: "flash",
        userId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://www.nme.com/wp-content/uploads/2021/09/Marvels-Spider-Man-2.jpg",
        tags: "spiderman",
        userId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://static.wikia.nocookie.net/marvelmovies/images/f/fa/Avengers_%28The_Whole_Team%29.png/revision/latest/top-crop/width/360/height/360?cb=20190526222205",
        tags: "the avengers, hulk, black widow, captain marvel, iron man, captain america, thor",
        userId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://cdn.onebauer.media/one/empire-images/features/56a0275b239eb8472a4fa871/punisher-lundgren-jane-stevenson.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill",
        tags: "punisher",
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://cwseattle.cbslocal.com/wp-content/uploads/sites/31326170/2018/07/The-Flash-featimage-3.jpg?w=1024&h=576&crop=1",
        tags: "flash",
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://api.time.com/wp-content/uploads/2016/02/melissa-benoist-supergirl.jpg",
        tags: "supergirl",
        userId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://images.thedirect.com/media/article_full/avengers-5-mcu.jpg",
        tags: "the avengers, hulk, black widow, captain marvel, iron man, captain america, thor",
        userId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://cdn.britannica.com/61/177761-050-F38C22B1/Christopher-Reeve-Superman-Richard-Donner.jpg",
        tags: "superman",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://playcontestofchampions.com/wp-content/uploads/2021/11/champion-iron-man-infinity-war-720x720.jpg",
        tags: "iron man",
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://www.denofgeek.com/wp-content/uploads/2019/03/thor_the_dark_world-main.jpg?fit=1200%2C675",
        tags: "thor",
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://cdn.onebauer.media/one/empire-tmdb/films/127585/images/ai9UKd8KownQKGIh1m5p3DuEeMm.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill",
        tags: "xmen, wolverine, mystique, beast, magneto, professor x, speed",
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://cdn.cnn.com/cnnnext/dam/assets/160203194237-melissa-benoist-cbs-supergirl-super-tease.jpg",
        tags: "supergirl",
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://www.denofgeek.com/wp-content/uploads/2020/12/wonder-woman-1984-poster-gal-gadot-warner.jpg?fit=1200%2C680",
        tags: "wonder woman, justice league",
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://cdn.vox-cdn.com/thumbor/tjSziP15KU-9CUVNoJYsmAspEEQ=/0x0:2732x2048/1200x0/filters:focal(0x0:2732x2048):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22802887/IMG_DE272BF718E8_1.jpeg",
        tags: "superman",
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjA0NTkzNTcxNTUx/fgfctk-2.jpg",
        tags: "justice league, wonder woman",
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://nerdist.com/wp-content/uploads/2021/11/hawkeye-battle-of-new-york.jpeg",
        tags: "hawkeye",
        userId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://cdn.vox-cdn.com/thumbor/Ia_Cyth1PDyN8nLltrMSFv85rwY=/0x0:1280x640/1200x800/filters:focal(467x58:671x262)/cdn.vox-cdn.com/uploads/chorus_image/image/55115281/wonderwoman2.0.jpg",
        tags: "justice league, wonder woman",
        userId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://images.tntdrama.com/tnt/$dyna_params/https%3A%2F%2Fi.cdn.tntdrama.com%2Fassets%2Fimages%2F2019%2F01%2FIncredible-Hulk-The-1920x1080_1.jpg",
        tags: "the avengers, hulk",
        userId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://imgix.bustle.com/uploads/image/2021/10/21/c3df609c-b9e7-4a01-9c3c-7eb17d25c733-mv5bnte4nzq1nziynf5bml5banbnxkftztgwnjixmjgwndi_v1_sx1777_cr001777744_al_.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
        tags: "the avengers, hulk",
        userId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://www.koimoi.com/wp-content/new-galleries/2020/06/avengers-endgame-real-reason-behind-iron-man-robert-downey-jrs-death-after-wearing-thanos-gauntlet-will-leave-you-teary-eyed-yet-again-0001.jpg",
        tags: "iron man",
        userId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://www.looper.com/img/gallery/the-untold-truth-of-wolverine/intro.jpg",
        tags: "xmen, wolverine",
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://static.wikia.nocookie.net/marvel_dc/images/a/a5/Superman_Vol_5_1_Textless.jpg/revision/latest?cb=20180711061148",
        tags: "superman",
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://www.syfy.com/sites/syfy/files/styles/scale--1200/public/2020/02/stl149580.jpg",
        tags: "xmen, wolverine",
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://www.syfy.com/sites/syfy/files/styles/blog_post_featured_media_mobile/public/2021/01/punisherheroimage.jpg?h=16a6ccf5",
        tags: "punisher",
        userId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/81bd1AdDV4L.jpg",
        tags: "xmen, cyclops, beast, wolverine, storm, gambit, rogue",
        userId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://assets-prd.ignimgs.com/2022/04/26/36190303thebatman-historyofcorruptionblogroll-1645650108225-1651000429762.jpg",
        tags: "batman",
        userId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://media.wired.com/photos/5926cac2af95806129f50a53/191:100/w_1280,c_limit/INVIM2016001_Teaser.jpg",
        tags: "iron man",
        userId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://www.fortressofsolitude.co.za/wp-content/uploads/2022/01/Man-of-Steel-2-Henry-Cavill-Superman-DC-scaled-e1642526588213.jpeg",
        tags: "superman",
        userId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
