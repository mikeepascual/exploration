import NavBar from "./components/nav";
import './assets/css/style.css';
function App() {
  return (
   <>
    <NavBar/>
    <div class="hero-container">
        <div class="hero-animation">
            <span class="firstslide">
                <span class="first">Infinite Discoveries and Possibilities</span>
            </span>
            <br />
            <span class="secondslide">
                <span class="second">Across the UNIVERSE</span>
            </span>
        </div>
    </div>

    <div class="blank1">
    </div>

   <section>
        <div id="explore" class="container1">
            <div class="image">
                <img src="https://www.saintleo.edu/sites/default/files/legacy-blog/Moon-landing.jpg" alt="" />
            </div>
            <div class="article">
                <span>The Moon Landing</span>
                <div class="text">
                    On the morning of July 16, 1969. Apollo 11 astronauts Neil Armstrong, Buzz Aldrin and Michael Collins sit atop another Saturn V at Launch Complex 39A at the Kennedy Space Center. The three-stage 363-foot rocket will use its 7.5 million pounds of thrust to propel them into space and into history. At 9:32 a.m. EDT, the engines fire and Apollo 11 clears the tower. About 12 minutes later, the crew is in Earth orbit
                </div>
                <div class="readbtn">
                    <button><a href="#">Read more</a></button>
                </div>
            </div>
        </div>
    </section>

    <div class="apollo11">
        <div class="moonland">
            <h1>
                APOLLO 11
            </h1>
        </div>
        <div class="astronauts">
            <div class="astro">
                <div class="neil">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Neil_Armstrong_pose.jpg/1200px-Neil_Armstrong_pose.jpg" alt="" />
                </div>
                <div class="consulting">
                    
                    <span>Neil Armstrong</span>
                    <h5>Commander</h5>
                    <p>When Armstrong first stepped onto the lunar surface, he famously said: "That's one small step for a man, one giant leap for mankind." It was broadcast live to an estimated 530 million viewers worldwide...</p>
                </div>
            </div>
    
            <div class="astro">
                <div class="michael">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Michael_Collins_%28S69-31742%2C_restoration%29.jpg" alt="" />
                </div>
                <div class="consulting">
                    
                    <span>Michael Collins</span>
                    <h5>Command Module Pilot</h5>
                    <p>On the 1969 Apollo 11 mission, he became one of 24 people to fly to the Moon, which he orbited thirty times. He was the fourth person (and third American) to perform a spacewalk, the first person to have performed more than one spacewalk...</p>
                </div>
            </div>
    
            <div class="astro">
                <div class="buzz">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Buzz_Aldrin.jpg/1200px-Buzz_Aldrin.jpg" alt="" />
                </div>
                <div class="consulting">
                    
                    <span>Edwin Buzz Aldrin</span>
                    <h5>Lunar Module Pilot</h5>
                    <p>His first space flight was in 1966 on Gemini 12, during which he spent over five hours on extravehicular activity. Three years later, Aldrin set foot on the Moon at 03:15:16 on July 21, 1969, nineteen minutes after Armstrong first touched the surface...</p>
                </div>
            </div>
        </div>
    </div>

    <div class="card-group">
        <div class="card">
          <img src="https://techcrunch.com/wp-content/uploads/2019/12/crs-19-spacex.gif?w=680" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Elon Musk's SpaceX Rocket</h5>
            <p class="card-text">A recent launch by Elon Musk‘s space exploration company SpaceX has caused a temporary hole in the Earth’s ionosphere, Newsweek reports. The Falcon 9 rocket, which was launched from the Vandenberg Space Force Base in California, left a faint red glow in the sky, a sign of the ionospheric hole.</p>
            <button><a href="">Read more</a></button>
            <p class="card-text"><small class="text-body-secondary">Last updated 2 hrs ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="https://images.thequint.com/thequint/2022-05/c10c1720-d884-4964-a01c-21930c2e85e0/elonmuskgif.gif" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Colonization of Mars</h5>
            <p class="card-text">Musk, who is the CEO of SpaceX, said that a manned mission is to reach Mars this decade. He founded SpaceX in 2002 with the goal to reduce transportation costs and colonize Mars. Musk believes making life multi-planetary will ease life on an overcrowded earth.</p>
            <button><a href="">Read more</a></button>
            <p class="card-text"><small class="text-body-secondary">Last updated 1 week ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="https://gizmodo.com.au/wp-content/uploads/2020/08/26/ryj3yjyqtg9fwblwqp62.gif?quality=75" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">NASA thinks space is teeming with planets that have gone rogue</h5>
            <p class="card-text">The team believes our galaxy holds 20 times more rogue planets than stars — that's trillions of starless space nomads. Though scientists have tried before to estimate the population of these skulking orphan worlds, the new study is the first that is sensitive to detecting relatively lightweight planets like Earth.</p>
            <button><a href="">Read more</a></button>
            <p class="card-text"><small class="text-body-secondary">Last updated 2days ago</small></p>
          </div>
        </div>
      </div>

      <div class="card-group">
        <div class="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Kepler-452b_artist_concept_-_animated_300px.gif" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Earth-like planet, KEPLER 452b</h5>
            <p class="card-text">It is a planet a little more than one and a half times as big in radius as Earth. Known as Kepler 452b, it circles a sunlike star in an orbit that takes 385 days, just slightly longer than our own year, putting it firmly in the “Goldilocks” habitable zone where the temperatures are lukewarm and suitable for liquid water on the surface — if it has a surface.</p>
            <button><a href="">Read more</a></button>
            <p class="card-text"><small class="text-body-secondary">Last updated 16 hrs ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="https://media.tenor.com/Pt3WqGJBXLUAAAAd/blackhole-space.gif" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Supermassive Black Hole</h5>
            <p class="card-text">Using the James Webb Space Telescope (JWST), have identified the farthest active supermassive black hole ever recorded. Located in galaxy CEERS 1019, this black hole was active about 570 million years following the Big Bang and is unique in that it is smaller than any other discovered from this early epoch of the universe.</p>
            <button><a href="">Read more</a></button>
            <p class="card-text"><small class="text-body-secondary">Last updated 5 days ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="https://cdn.pixabay.com/animation/2022/11/16/14/56/14-56-49-778_512.gif" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">The Milky Way Galaxy</h5>
            <p class="card-text">Like early explorers mapping the continents of our globe, astronomers are busy charting the spiral structure of our galaxy, the Milky Way. Using infrared images from NASA's Spitzer Space Telescope, scientists have discovered that the Milky Way's elegant spiral structure is dominated by just two arms wrapping off the ends of a central bar of stars. Previously, our galaxy was thought to possess four major arms..</p>
            <button><a href="">Read more</a></button>
            <p class="card-text"><small class="text-body-secondary">Last updated 2 mins ago</small></p>
          </div>
        </div>
      </div>

    <div class="cardbody">
        <div class="card-container">
            <div class="card" style={{color:"#009688"}}>
                <div class="imgbx">
                    <img src="image/bepicolombo.jpg" alt="" />
                </div>
                <div class="content">
                    <h6>BepiColombo</h6>
                    <p>The two spacecraft of the BepiColombo mission are the first European and Japanese spacecraft to explore Mercury. They will arrive in orbit in 2025</p>
                    <a href="#">Read more</a>
                </div>
            </div>
            <div class="card" style={{color:"#ff3e7f"}}>
                <div class="imgbx">
                    <img src="image/genesis.jpg" alt="" />
                </div>
                <div class="content">
                    <h6>Genesis</h6>
                    <p>Genesis returned to Earth the first extraterrestrial material particle of the solar wind collected beyond the lunar orbit</p>
                    <a href="#">Read more</a>
                </div>
            </div>
            <div class="card" style={{color:"#03a9f4"}}>
                <div class="imgbx">
                    <img src="image/interstella-BEX.jpg" alt="" />
                </div>
                <div class="content">
                    <h6>Interstellar Boundary Explorer</h6>
                    <p>IBEX is designed to detect the edge of our solar system</p>
                    <a href="#">Read more</a>
                </div>
            </div>
            <div class="card" style={{color:"#009688"}}>
                <div class="imgbx">
                    <img src="image/mars-odyssy.jpg" alt="" />
                </div>
                <div class="content">
                    <h6>Mars Odyssey</h6>
                    <p>Still in orbit around Mars, NASA's 2001 Mars Odyssey spacecraft has collected more than 130,000 images and continues to send information to Earth about martian geology, climate and atmosphere</p>
                    <a href="#">Read more</a>
                </div>
            </div>
            <div class="card" style={{color:"#ff3e7f"}}>
                <div class="imgbx">
                    <img src="image/MESSENGER.jpg" alt="" />
                </div>
                <div class="content">
                    <h6>Messenger</h6>
                    <p>NASA's Mercury Surface, Space Environment, Geochemistry and Ranging mission, better known as "Messenger", was designed to map the surface composition</p>
                    <a href="#">Read more</a>
                </div>
            </div>
            <div class="card" style={{color:"#03a9f4"}}>
                <div class="imgbx">
                    <img src="image/neowise.jpg" alt="" />
                </div>
                <div class="content">
                    <h6>WISE/NEOWISE</h6>
                    <p>Wise scanned the entire celestial sky in infrared light about 1.5 times. It captured more than 2.7 million images of objects in space, ranging from faraway galaxies</p>
                    <a href="#">Read more</a>
                </div>
            </div>
            <div class="card" style={{color:"#009688"}}>
                <div class="imgbx">
                    <img src="image/new-horizon.jpg" alt="" />
                </div>
                <div class="content">
                    <h6>New Horizon</h6>
                    <p>On July 14, 2015, New Horizons bacame the first spacecraft to explore Pluto and its five moons up close</p>
                    <a href="#">Read more</a>
                </div>
            </div>
            <div class="card" style={{color:"#ff3e7f"}}>
                <div class="imgbx">
                    <img src="image/Rosetta.jpg" alt="" />
                </div>
                <div class="content">
                    <h6>Rosetta/Philae</h6>
                    <p>ESA's Rosetta studied comet 67/Churyumov Gerasimenko from orbit and deployed the small Philae lander, the first spacecraft to land on a comet</p>
                    <a href="#">Read more</a>
                </div>
            </div>
            <div class="card" style={{color:"#03a9f4"}}>
                <div class="imgbx">
                    <img src="image/spirit.jpg" alt="" />
                </div>
                <div class="content">
                    <h6>Spirit</h6>
                    <p>NASA's Mars Exploration Rovers "Opportunity" and its twin "Spirit" were designed to study the history of climate and water at sites on Mars where conditions may once have been favorable</p>
                    <a href="#">Read more</a>
                </div>
            </div>
            <div class="card" style={{color:"#03a9f4"}}>
                <div class="imgbx">
                    <img src="image/venusexpress.jpg" alt="" />
                </div>
                <div class="content">
                    <h6>Venus Express</h6>
                    <p>The European Spase Agency's Venus Express was designed to study the atmosphere of Venus, from the surface to the ionsphere</p>
                    <a href="#">Read more</a>
                </div>
            </div>
        </div>
        
    </div>

    <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
        </div>
        <div class="carousel-inner">
            <div>
                <h1>MORE DESTINATIONS</h1>
            </div>
          <div class="carousel-item active">
            <img src="https://media.tenor.com/MxEByQ9qK2UAAAAC/venus-planet.gif" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>VENUS</h5>
              <button>Book a tour</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://media.tenor.com/fIxO84SMp1kAAAAC/neptune-neptune101.gif" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>NEPTUNE</h5>
              <button>Book a tour</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://media.tenor.com/B5rhORIWexIAAAAC/planet-jupiter-moving-planet.gif" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Jupiter</h5>
              <button>Book a tour</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://media.tenor.com/_fvtnMZODy0AAAAd/planet-mars-mars.gif" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>MARS</h5>
              <button>Book a tour</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://image.forskning.no/2195217.webp?imageId=2195217&width=960&height=548&format=jpg" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>PLUTO</h5>
              <button>Book a tour</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://media.tenor.com/eyMFG_3EAtkAAAAC/gif-saturn-planet.gif" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>SATURN</h5>
              <button>Book a tour</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://imageio.forbes.com/specials-images/imageserve/648792456/Neptune/960x0.jpg?format=jpg&width=960" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>URANNUS</h5>
              <button>Book a tour</button>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    <div class="blank1"></div>

    


    <div class="blank1"></div>

    <div class="contactus-body" id="contactus">
        <section class="contactus">
            <div class="contact-content">
                <h3>Contact Us</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nesciunt neque libero doloribus fugit voluptate rerum est maiores, sint fugiat.</p>
            </div>
            <div class="contact-container">
                <div class="contactinfo">
                    <div class="contactbox">
                        <div class="contact-icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                        <div class="contact-text">
                            <h4>Address</h4>
                            <p>Zone 2A, Jagna Street, Brgy. Bula,<br />General Santos City, South Cotabato, 9500,<br />Mindanao, Philippines</p>
                        </div>
                    </div>
                    <div class="contactbox">
                        <div class="contact-icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                        <div class="contact-text">
                            <h4>Email</h4>
                            <p>arvinbacala94@gmail.com<br />arvinpiodosbacala@gmail.com</p>
                        </div>
                    </div>
                    <div class="contactbox">
                        <div class="contact-icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
                        <div class="contact-text">
                            <h4>Phone</h4>
                            <p>+63935 463 6989</p>
                        </div>
                    </div>
                </div>
                <div class="contactform">
                    <form>
                        <h3>Send Message</h3>
                        <div class="inputconbox">
                            <input type="text" name="" required="required" />
                            <span>Full Name</span>
                        </div>
                        <div class="inputconbox">
                            <input type="text" name="" required="required" />
                            <span>Email</span>
                        </div>
                        <div class="inputconbox">
                            <textarea required="required"></textarea>
                            <span>Talk to us</span>
                        </div>
                        <div class="inputconbox">
                            <input type="submit" name="" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
   </div>
   </>

  );
}

export default App;
