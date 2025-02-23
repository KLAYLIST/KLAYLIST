console.log("script.js has loaded!");

// Array of featured albums
const albums = [
    {
      image: "../KLAYLIST/covers/MacMiller/Balloonerism.jpg",
      title: "Balloonerism",
      description: "Mac Miller",
      link: "reviews-albums/Balloonerism.html"
    },
    {
      image: "../KLAYLIST/covers/PND/SSSFU.jpg",
      title: "$ome $exy $ongs 4 U",
      description: "PARTYNEXTDOOR & Drake",
      link: "reviews-albums/$ome $exy $ongs 4 U.html"
    },
    {
      image: "../KLAYLIST/covers/TheWeeknd/Hurry Up Tomorrow.jpg",
      title: "Hurry Up Tomorrow",
      description: "The Weeknd",
      link: "reviews-albums/Hurry Up Tomorrow.html"
    },
    {
        image: "../KLAYLIST/covers/FKATwigs/Eusexua.jpg",
        title: "EUSEXUA",
        description: "FKA Twigs",
        link: "#album4"
    },
    {
        image: "../KLAYLIST/covers/Dark Times.png",
        title: "Dark Times",
        description: "Vince Staples",
        link: "#album5"
    },
  ];
  
  // Display a random album
  function displayRandomAlbum() {
    const randomIndex = Math.floor(Math.random() * albums.length);
    const selectedAlbum = albums[randomIndex];
  
    // Update the DOM
    document.getElementById("featured-image").src = selectedAlbum.image;
    document.getElementById("featured-image").alt = selectedAlbum.title;
    document.getElementById("featured-title").textContent = selectedAlbum.title;
    document.getElementById("featured-description").textContent = selectedAlbum.description;
    document.getElementById("featured-link").href = selectedAlbum.link;
  }
  
  // Page load stuff
  document.addEventListener("DOMContentLoaded", displayRandomAlbum);

// Theme selector
const themeToggle = document.getElementById("theme-toggle");

// Saved???
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.add(savedTheme);
  themeToggle.textContent = savedTheme === "dark-mode" ? "Light Mode" : "Dark Mode";
}

// The listener for the theme toggle stuff
themeToggle.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  themeToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

  // SAVE!!!
  localStorage.setItem("theme", isDarkMode ? "dark-mode" : "");
});

// This is specifically for the 🍔

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navItems = document.getElementById("nav-items");

  // Turn the menu on/off :P
  hamburger.addEventListener("click", () => {
    navItems.classList.toggle("show");
  });
});

// THIS IS FOR FILTERING PLEASE!!! DON'T!!!! TOUCH!!!! THIS!!!

        const genreSelect = document.getElementById('genre-select');
        const cards = document.querySelectorAll('.card');

        genreSelect.addEventListener('change', () => {
            const selectedGenre = genreSelect.value;

            cards.forEach(card => {
                if (selectedGenre === 'all' || card.classList.contains(selectedGenre)) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });
        });

        // Show all cards by default
        genreSelect.dispatchEvent(new Event('change'));


// // Rating Section 

// const stars = document.querySelectorAll('.star-rating span');
// const result = document.getElementById('rating-result');

// document.addEventListener('DOMContentLoaded', () => {
//   const savedRating = localStorage.getItem('userRating');
//   if (savedRating) {
//     updateStars(savedRating);
//     result.textContent = `Rating: ${savedRating}`;
//   }
// });

// stars.forEach(star => {
//   star.addEventListener('click', () => {
//     const rating = star.getAttribute('data-value');
//     updateStars(rating);
//     result.textContent = `Rating: ${rating}`;

//     // Save the rating in localStorage
//     localStorage.setItem('userRating', rating);
//   });

//   star.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter' || e.key === ' ') { // Space or Enter to select
//       const rating = star.getAttribute('data-value');
//       updateStars(rating);
//       result.textContent = `Rating: ${rating}`;

//       localStorage.setItem('userRating', rating);
//     }
//   });
// });

// function updateStars(rating) {
//   stars.forEach(star => {
//     const value = star.getAttribute('data-value');
//     if (value <= rating) {
//       star.classList.add('active');
//       star.setAttribute('aria-checked', 'true');
//     } else {
//       star.classList.remove('active');
//       star.setAttribute('aria-checked', 'false');
//     }
//   });
// }


// Dropdown

document.querySelectorAll('.dropdown-toggle').forEach((toggle) => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const dropdownMenu = toggle.nextElementSibling;
    dropdownMenu.classList.toggle('show');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach((menu) => {
      menu.classList.remove('show');
    });
  }
});

// Quote Generator

function randomText() {
    // Array of text options
    const texts = [
        "I hope you're having a great day today!",
        "Doesn't the desktop version of this look nice?",
        "The day is beautiful, enjoy this day!",
        "Did you meditate today? I strongly recommend it. \nEven if just for a moment.",
        "Thank you for visiting!",
        "2@85 697 +@; 43@$ 5(8#?",
        "What's on the menu today?",
        "Hello there, and how've you been?",
        "Are you the chum with dry skin?",
    ];
    
    const randomIndex = Math.floor(Math.random() * texts.length);
    
    document.getElementById("randomText").innerText = texts[randomIndex];
}

window.onload = randomText;

// // Dynamic Age 

// function calculateAge(birthDate) {
//   const today = new Date();
//   let age = today.getFullYear() - birthDate.getFullYear();
//   const hasBirthdayPassed = 
//       today.getMonth() > birthDate.getMonth() || 
//       (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  
//   if (!hasBirthdayPassed) {
//       age--; 
//   }
//   return age;
// }

// function updateAge() {
//   const birthDate = new Date("2000-05-15"); // Replace with your birth date
//   const ageElement = document.getElementById("age");
//   ageElement.textContent = calculateAge(birthDate);
// }

// updateAge();

// Album Sorter

document.getElementById("sortButton").addEventListener("click", function () {
  let container = document.getElementById("albumContainer");
  let albums = Array.from(container.getElementsByClassName("grid-review-card")); 

  albums.sort((a, b) => {
      let titleA = a.querySelector("h3").textContent.trim().toLowerCase();
      let titleB = b.querySelector("h3").textContent.trim().toLowerCase();
      return titleA.localeCompare(titleB);
  });

  albums.forEach(album => container.appendChild(album)); 

  console.log("Sorting complete");
});

// Music Box JS

window.onload = randomText;

function randomAlbum() {
    // ALLLL THESE ALBUMS
    const albums = [
        "Nas – Illmatic (1994)",
        "The Notorious B.I.G. – Ready to Die (1994)",
        "Tupac Shakur – All Eyez on Me (1996)",
        "Jay-Z – The Blueprint (2001)",
        "Kanye West – The College Dropout (2004)",
        "OutKast – Stankonia (2000)",
        "Kendrick Lamar – good kid, m.A.A.d city (2012)",
        "Dr. Dre – The Chronic (1992)",
        "A Tribe Called Quest – The Low End Theory (1991)",
        "Wu-Tang Clan – Enter the Wu-Tang (36 Chambers) (1993)",
        "Eminem – The Marshall Mathers LP (2000)",
        "Public Enemy – It Takes a Nation of Millions to Hold Us Back (1988)",
        "MF DOOM – Madvillainy (2004)",
        "J. Cole – 2014 Forest Hills Drive (2014)",
        "Lil Wayne – Tha Carter III (2008)",
        "N.W.A – Straight Outta Compton (1988)",
        "Run-D.M.C. – Raising Hell (1986)",
        "Tyler, the Creator – IGOR (2019)",
        "Kanye West – My Beautiful Dark Twisted Fantasy (2010)",
        "Snoop Dogg – Doggystyle (1993)",
        "Lauryn Hill – The Miseducation of Lauryn Hill (1998)",
        "Travis Scott – Astroworld (2018)",
        "Cardi B – Invasion of Privacy (2018)",
        "Drake – Take Care (2011)",
        "50 Cent – Get Rich or Die Tryin' (2003)",
        "Future – DS2 (2015)",
        "Chief Keef – Finally Rich (2012)",
        "OutKast – Aquemini (1998)",
        "Raekwon – Only Built 4 Cuban Linx... (1995)",
        "Ice Cube – AmeriKKKa's Most Wanted (1990)",
        "Lil Nas X – Montero (2021)",
        "Kid Cudi – Man on the Moon: The End of Day (2009)",
        "Jay-Z – Reasonable Doubt (1996)",
        "A$AP Rocky – LONG.LIVE.A$AP (2013)",
        "JAY-Z – 4:44 (2017)",
        "Missy Elliott – Supa Dupa Fly (1997)",
        "Megan Thee Stallion – Good News (2020)",
        "Lupe Fiasco – Food & Liquor (2006)",
        "Young Thug – So Much Fun (2019)",
        "Chance the Rapper – Acid Rap (2013)",
        "Rapsody – Eve (2019)",
        "Logic – Under Pressure (2014)",
        "Earl Sweatshirt – Some Rap Songs (2018)",
        "Pusha T – Daytona (2018)",
        "Denzel Curry – TA13OO (2018)",
        "2 Chainz – Based on a T.R.U. Story (2012)",
        "Mac Miller – Swimming (2018)",
        "Vince Staples – Summertime '06 (2015)",
        "Skepta – Konnichiwa (2016)",
        "Run the Jewels – Run the Jewels 2 (2014)",
        "Michael Jackson – Thriller (1982)",
        "Madonna – Like a Prayer (1989)",
        "Taylor Swift – 1989 (2014)",
        "The Beatles – Abbey Road (1969)",
        "Prince – Purple Rain (1984)",
        "Adele – 21 (2011)",
        "Beyoncé – Lemonade (2016)",
        "Lady Gaga – The Fame Monster (2009)",
        "Britney Spears – ...Baby One More Time (1999)",
        "Dua Lipa – Future Nostalgia (2020)",
        "Katy Perry – Teenage Dream (2010)",
        "Billie Eilish – When We All Fall Asleep, Where Do We Go? (2019)",
        "Ariana Grande – Thank U, Next (2019)",
        "Rihanna – ANTI (2016)",
        "Justin Timberlake – FutureSex/LoveSounds (2006)",
        "Whitney Houston – Whitney (1987)",
        "Harry Styles – Fine Line (2019)",
        "Bruno Mars – 24K Magic (2016)",
        "George Michael – Faith (1987)",
        "Sia – 1000 Forms of Fear (2014)",
        "Lorde – Melodrama (2017)",
        "The Weeknd – After Hours (2020)",
        "Carly Rae Jepsen – Emotion (2015)",
        "Kylie Minogue – Fever (2001)",
        "Justin Bieber – Purpose (2015)",
        "Selena Gomez – Rare (2020)",
        "Shawn Mendes – Illuminate (2016)",
        "ABBA – Arrival (1976)",
        "Shakira – Laundry Service (2001)",
        "Celine Dion – Let's Talk About Love (1997)",
        "Miley Cyrus – Bangerz (2013)",
        "P!nk – Funhouse (2008)",
        "Maroon 5 – Songs About Jane (2002)",
        "Christina Aguilera – Stripped (2002)",
        "Kacey Musgraves – Golden Hour (2018)",
        "Lana Del Rey – Norman F***ing Rockwell! (2019)",
        "Coldplay – A Rush of Blood to the Head (2002)",
        "Backstreet Boys – Millennium (1999)",
        "N*Sync – No Strings Attached (2000)",
        "Spice Girls – Spice (1996)",
        "Robyn – Body Talk (2010)",
        "Madonna – Confessions on a Dance Floor (2005)",
        "Tove Lo – Queen of the Clouds (2014)",
        "Charli XCX – Pop 2 (2017)",
        "Ellie Goulding – Halcyon (2012)",
        "Halsey – Badlands (2015)",
        "Sam Smith – In the Lonely Hour (2014)",
        "Ed Sheeran – ÷ (Divide) (2017)",
        "One Direction – Midnight Memories (2013)",
        "Kesha – Animal (2010)",
        "Marvin Gaye – What's Going On (1971)",
        "Lauryn Hill – The Miseducation of Lauryn Hill (1998)",
        "Stevie Wonder – Songs in the Key of Life (1976)",
        "Beyoncé – Beyoncé (2013)",
        "D'Angelo – Voodoo (2000)",
        "Prince – 1999 (1982)",
        "Sade – Diamond Life (1984)",
        "Alicia Keys – Songs in A Minor (2001)",
        "Frank Ocean – Channel Orange (2012)",
        "TLC – CrazySexyCool (1994)",
        "Erykah Badu – Baduizm (1997)",
        "Usher – Confessions (2004)",
        "Solange – A Seat at the Table (2016)",
        "Toni Braxton – Toni Braxton (1993)",
        "Rihanna – Unapologetic (2012)",
        "The Weeknd – House of Balloons (2011)",
        "Mary J. Blige – My Life (1994)",
        "Miguel – Kaleidoscope Dream (2012)",
        "Janelle Monáe – The ArchAndroid (2010)",
        "Destiny's Child – The Writing's on the Wall (1999)",
        "John Legend – Get Lifted (2004)",
        "Whitney Houston – Whitney Houston (1985)",
        "Janet Jackson – Control (1986)",
        "Brandy – Never Say Never (1998)",
        "Michael Jackson – Off the Wall (1979)",
        "Aaliyah – One in a Million (1996)",
        "Maxwell – BLACKsummers'night (2009)",
        "Chris Brown – Exclusive (2007)",
        "SZA – Ctrl (2017)",
        "Amy Winehouse – Back to Black (2006)",
        "Anita Baker – Rapture (1986)",
        "Jodeci – Diary of a Mad Band (1993)",
        "Ginuwine – The Bachelor (1996)",
        "Trey Songz – Ready (2009)",
        "Ella Mai – Ella Mai (2018)",
        "Khalid – American Teen (2017)",
        "FKA twigs – LP1 (2014)",
        "Daniel Caesar – Freudian (2017)",
        "Summer Walker – Over It (2019)",
        "Luther Vandross – Never Too Much (1981)",
        "Miguel – War & Leisure (2017)",
        "H.E.R. – H.E.R. (2017)",
        "Teyana Taylor – K.T.S.E. (2018)",
        "Mario – Turning Point (2004)",
        "Kehlani – It Was Good Until It Wasn't (2020)",
        "Ne-Yo – In My Own Words (2006)",
        "Beyoncé – 4 (2011)",
        "Dru Hill – Enter the Dru (1998)",
        "Ari Lennox – Shea Butter Baby (2019)",
        "Parliament – Mothership Connection (1975)",
        "James Brown – The Payback (1973)",
        "Sly and the Family Stone – Stand! (1969)",
        "Funkadelic – Maggot Brain (1971)",
        "Prince – Dirty Mind (1980)",
        "Curtis Mayfield – Super Fly (1972)",
        "Stevie Wonder – Innervisions (1973)",
        "George Clinton – Computer Games (1982)",
        "Earth, Wind & Fire – That's the Way of the World (1975)",
        "Rick James – Street Songs (1981)",
        "The Isley Brothers – 3 + 3 (1973)",
        "Bootsy Collins – Stretchin' Out in Bootsy's Rubber Band (1976)",
        "The Meters – Look-Ka Py Py (1969)",
        "Tower of Power – Tower of Power (1973)",
        "Ohio Players – Fire (1974)",
        "Prince – 1999 (1982)",
        "Chic – C'est Chic (1978)",
        "The Gap Band – The Gap Band III (1980)",
        "Cameo – Word Up! (1986)",
        "Kool & The Gang – Wild and Peaceful (1973)",
        "Zapp – Zapp (1980)",
        "Commodores – Machine Gun (1974)",
        "Brass Construction – Brass Construction (1975)",
        "Slave – Stone Jam (1980)",
        "Average White Band – AWB (1974)",
        "The Bar-Kays – Soul Finger (1967)",
        "Con Funk Shun – Secrets (1977)",
        "The Brothers Johnson – Look Out for #1 (1976)",
        "The Temptations – Cloud Nine (1969)",
        "War – The World Is a Ghetto (1972)",
        "Pleasure – Future Now (1979)",
        "James Brown – Sex Machine (1970)",
        "Prince – Sign o' the Times (1987)",
        "Minnie Riperton – Adventures in Paradise (1975)",
        "Bruno Mars – 24K Magic (2016)",
        "Evelyn 'Champagne' King – Get Loose (1982)",
        "Betty Davis – They Say I'm Different (1974)",
        "Rufus feat. Chaka Khan – Ask Rufus (1977)",
        "Parliament – Funkentelechy vs. the Placebo Syndrome (1977)",
        "Funkadelic – One Nation Under a Groove (1978)",
        "Graham Central Station – Release Yourself (1974)",
        "The Time – What Time Is It? (1982)",
        "Maze feat. Frankie Beverly – Maze (1977)",
        "The Crusaders – Street Life (1979)",
        "Lakeside – Fantastic Voyage (1980)",
        "The Blackbyrds – City Life (1975)",
        "Mandrill – Composite Truth (1973)",
        "Dazz Band – Keep It Live (1982)",
        "Brass Construction – Movin' (1975)",
        "The J.B.'s – Doing It to Death (1973)",
        "Arcade Fire – Funeral (2004)",
        "The Strokes – Is This It (2001)",
        "Bon Iver – For Emma, Forever Ago (2007)",
        "Vampire Weekend – Vampire Weekend (2008)",
        "Modest Mouse – The Moon & Antarctica (2000)",
        "Neutral Milk Hotel – In the Aeroplane Over the Sea (1998)",
        "Tame Impala – Currents (2015)",
        "Arctic Monkeys – Whatever People Say I Am, That's What I'm Not (2006)",
        "Sufjan Stevens – Illinois (2005)",
        "The National – High Violet (2010)",
        "Phoebe Bridgers – Punisher (2020)",
        "Yeah Yeah Yeahs – Fever to Tell (2003)",
        "LCD Soundsystem – Sound of Silver (2007)",
        "Fleet Foxes – Fleet Foxes (2008)",
        "Beach House – Bloom (2012)",
        "The Shins – Oh, Inverted World (2001)",
        "Death Cab for Cutie – Transatlanticism (2003)",
        "Mitski – Be the Cowboy (2018)",
        "Mac DeMarco – Salad Days (2014)",
        "Car Seat Headrest – Teens of Denial (2016)",
        "Courtney Barnett – Sometimes I Sit and Think, and Sometimes I Just Sit (2015)",
        "MGMT – Oracular Spectacular (2007)",
        "Grizzly Bear – Veckatimest (2009)",
        "Father John Misty – I Love You, Honeybear (2015)",
        "St. Vincent – St. Vincent (2014)",
        "Fiona Apple – Fetch the Bolt Cutters (2020)",
        "The xx – xx (2009)",
        "Bright Eyes – I'm Wide Awake, It's Morning (2005)",
        "The Smiths – The Queen Is Dead (1986)",
        "Belle and Sebastian – If You're Feeling Sinister (1996)",
        "Foals – Total Life Forever (2010)",
        "Broken Social Scene – You Forgot It in People (2002)",
        "The War on Drugs – Lost in the Dream (2014)",
        "Angel Olsen – Burn Your Fire for No Witness (2014)",
        "Wilco – Yankee Hotel Foxtrot (2002)",
        "Animal Collective – Merriweather Post Pavilion (2009)",
        "The Decemberists – The Crane Wife (2006)",
        "Parquet Courts – Wide Awake! (2018)",
        "Sharon Van Etten – Remind Me Tomorrow (2019)",
        "Iron & Wine – The Shepherd's Dog (2007)",
        "Tyler, the Creator – Flower Boy (2017)",
        "Tegan and Sara – The Con (2007)",
        "The 1975 – A Brief Inquiry into Online Relationships (2018)",
        "PJ Harvey – Let England Shake (2011)",
        "Interpol – Turn on the Bright Lights (2002)",
        "Real Estate – Atlas (2014)",
        "Cat Power – You Are Free (2003)",
        "alt-J – An Awesome Wave (2012)",
        "Band of Horses – Everything All the Time (2006)",
        "The Antlers – Hospice (2009)",
        "Bee Gees – Saturday Night Fever Soundtrack (1977)",
        "Chic – C'est Chic (1978)",
        "Donna Summer – Bad Girls (1979)",
        "Gloria Gaynor – Never Can Say Goodbye (1975)",
        "Earth, Wind & Fire – I Am (1979)",
        "ABBA – Voulez-Vous (1979)",
        "Sister Sledge – We Are Family (1979)",
        "Kool & The Gang – Ladies' Night (1979)",
        "Village People – Cruisin' (1978)",
        "Boney M. – Nightflight to Venus (1978)",
        "Diana Ross – Diana (1980)",
        "Sylvester – Step II (1978)",
        "Grace Jones – Portfolio (1977)",
        "Barry White – Can't Get Enough (1974)",
        "The Jacksons – Destiny (1978)",
        "Giorgio Moroder – From Here to Eternity (1977)",
        "Cerrone – Supernature (1977)",
        "The Trammps – Disco Inferno (1976)",
        "The Whispers – The Whispers (1979)",
        "A Taste of Honey – A Taste of Honey (1978)",
        "Tavares – Sky High! (1976)",
        "Hot Chocolate – Every 1's a Winner (1978)",
        "Blondie – Parallel Lines (1978)",
        "Thelma Houston – Any Way You Like It (1976)",
        "MFSB – Love Is the Message (1973)",
        "Amii Stewart – Knock on Wood (1979)",
        "Vicki Sue Robinson – Never Gonna Let You Go (1976)",
        "Cher – Take Me Home (1979)",
        "The Ritchie Family – Arabian Nights (1976)",
        "Leo Sayer – Endless Flight (1976)",
        "Loleatta Holloway – Loleatta (1977)",
        "Harold Melvin & the Blue Notes – Wake Up Everybody (1975)",
        "Patrick Hernandez – Born to Be Alive (1978)",
        "Tina Charles – Dance Little Lady (1976)",
        "Yvonne Elliman – Night Flight (1978)",
        "The Bee Gees – Spirits Having Flown (1979)",
        "Heatwave – Too Hot to Handle (1976)",
        "The Miracles – City of Angels (1975)",
        "The O'Jays – Travelin' at the Speed of Thought (1977)",
        "George McCrae – Rock Your Baby (1974)",
        "Peaches & Herb – 2 Hot! (1978)",
        "Boz Scaggs – Silk Degrees (1976)",
        "First Choice – Delusions (1977)",
        "The Pointer Sisters – Energy (1978)",
        "Odyssey – Native New Yorker (1977)",
        "Van McCoy – Disco Baby (1975)",
        "T-Connection – Magic (1977)",
        "Chaka Khan – Chaka (1978)",
        "The Three Degrees – The Three Degrees (1973)",
        "France Joli – France Joli (1979)",
        "The Beatles – Abbey Road (1969)",
        "Led Zeppelin – IV (1971)",
        "Pink Floyd – The Dark Side of the Moon (1973)",
        "The Rolling Stones – Exile on Main St. (1972)",
        "Queen – A Night at the Opera (1975)",
        "Nirvana – Nevermind (1991)",
        "David Bowie – The Rise and Fall of Ziggy Stardust and the Spiders from Mars (1972)",
        "The Who – Who's Next (1971)",
        "AC/DC – Back in Black (1980)",
        "Fleetwood Mac – Rumours (1977)",
        "U2 – The Joshua Tree (1987)",
        "Bruce Springsteen – Born to Run (1975)",
        "The Doors – The Doors (1967)",
        "Guns N' Roses – Appetite for Destruction (1987)",
        "Radiohead – OK Computer (1997)",
        "The Eagles – Hotel California (1976)",
        "Pearl Jam – Ten (1991)",
        "The Clash – London Calling (1979)",
        "Red Hot Chili Peppers – Blood Sugar Sex Magik (1991)",
        "Oasis – (What's the Story) Morning Glory? (1995)",
        "The Kinks – The Village Green Preservation Society (1968)",
        "R.E.M. – Automatic for the People (1992)",
        "Metallica – Metallica (The Black Album) (1991)",
        "Joy Division – Unknown Pleasures (1979)",
        "Led Zeppelin – Physical Graffiti (1975)",
        "The Smashing Pumpkins – Siamese Dream (1993)",
        "Bruce Springsteen – Darkness on the Edge of Town (1978)",
        "The Allman Brothers Band – At Fillmore East (1971)",
        "Simon & Garfunkel – Bridge Over Troubled Water (1970)",
        "The Cure – Disintegration (1989)",
        "Blink-182 – Enema of the State (1999)",
        "Green Day – Dookie (1994)",
        "The White Stripes – White Blood Cells (2001)",
        "Jefferson Airplane – Surrealistic Pillow (1967)",
        "Alice in Chains – Dirt (1992)",
        "Mötley Crüe – Dr. Feelgood (1989)",
        "Van Halen – 1984 (1984)",
        "The Pixies – Doolittle (1989)",
        "Kings of Leon – Only by the Night (2008)",
        "Coldplay – A Rush of Blood to the Head (2002)",
        "Linkin Park – Hybrid Theory (2000)",
        "The Raconteurs – Consolers of the Lonely (2008)",
        "Paramore – Riot! (2007)",
        "The Lumineers – The Lumineers (2012)",
        "Death Cab for Cutie – Plans (2005)",
        "The Strokes – First Impressions of Earth (2006)",
        "Tame Impala – Lonerism (2012)",
        "Hozier – Hozier (2014)",
        "Wolf Alice – My Love Is Cool (2015)",
        "Arctic Monkeys – AM (2013)",
        "Imagine Dragons – Night Visions (2012)",
        "Foo Fighters – Wasting Light (2011)",
        "Tatsuro Yamashita – For You (1982)",
        "Mariya Takeuchi – Plastic Love (1984)",
        "Anri – Timely!! (1983)",
        "Kiyotaka Sugiyama – The Best (1985)",
        "Yumi Matsutoya – Hikaru uta (1980)",
        "Masaki Ueda – Kimi to Boku (1985)",
        "Toshiki Kadomatsu – Sea Breeze (1986)",
        "Hiromi Go – Hiromi Go (1986)",
        "Kengo Suzuki – Kengo (1983)",
        "Kahimi Karie – K. (1995)",
        "Haruomi Hosono – Hosono House (1973)",
        "Junko Ohashi – I Love You So (1983)",
        "Yasuaki Shimizu – Kakashi (1982)",
        "Shinji Tanimura – The Best of Shinji Tanimura (1985)",
        "Toshinobu Kubota – L.O.K. (1991)",
        "Yukari Tamura – Hoshikuzu no Ringo (1982)",
        "Kiyotaka Sugiyama & Omega Tribe – AAD (1986)",
        "Masayoshi Yamazaki – Kimi ni Aitakute (1995)",
        "Akira Tanaami – I Am (1985)",
        "Keiko Fuji – The Best (1980)",
        "Rina Aiuchi – Rina Aiuchi (1998)",
        "Kensuke Yamauchi – My Favorite Songs (1987)",
        "Nana Kato – Sweet Dancer (1984)",
        "Masayuki Suzuki – The Best (1994)",
        "Akiko Yano – Tadaima (1981)",
        "Shoko Nakagawa – Shokotan (2007)",
        "Aqua Timez – One for All (2006)",
        "Yukari Tamura – The Best of Yukari Tamura (2008)",
        "Hiroshi Sato – Orient (1982)",
        "Chara – Sweet (1992)",
        "Mariko Takahashi – Mariko (1982)",
        "Koda Kumi – Best ~first things~ (2006)",
        "Tomoko Aran – Fuyu no Hi no Yuki (1983)",
        "Ryuichi Sakamoto – Left Handed Dream (1981)",
        "Kumi Koda – Koda Kumi 15th Anniversary Best (2016)",
        "Aiko Kitahara – With You (1987)",
        "Akina Nakamori – Best 1000 (1987)",
        "Shinobu Otake – Neon (1982)",
        "Masaki Matsubara – Kimi no Hitomi ni Koishiteru (1982)",
        "Yoko Oginome – The Best (1989)",
        "Hiroshi Satoh – Blue Horizon (1984)",
        "Takako Matsu – Takako Matsu (1994)",
        "Chitose Hajime – Chitose (2000)",
        "Kumiko – Kumiko (1984)",
        "Yuko Matsutake – Album (1981)",
        "Seiko Matsuda – The Best (1989)",
        "Shizuka Kudo – The Best (1991)",
        "Miki Matsubara – Pocket Park (1980)",
        "Masami Tsuchiya – Kizu (1987)",
        "Sanae Kato – Mellow Mood (1989)",
        "Mika Nakashima – Love (2006)",
        "Akira Inoue – Summer Breeze (1984)",
        "Kenshi Yonezu – STRAY SHEEP (2020)",
        "Tomita – Kosmos (1979)",
    ];
    
    // Random index from that very very long list of albums
    const randomIndex = Math.floor(Math.random() * albums.length);
    
    document.getElementById("randomAlbum").innerText = albums[randomIndex];
}

button.onclick = randomAlbum;
