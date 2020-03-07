import React from 'react'
import thumb01 from '../assets/img/gallery/thumbs/01.jpg'
import thumb02 from '../assets/img/gallery/thumbs/02.jpg'
import thumb03 from '../assets/img/gallery/thumbs/03.jpg'
import thumb04 from '../assets/img/gallery/thumbs/04.jpg'
import thumb05 from '../assets/img/gallery/thumbs/05.jpg'
import thumb06 from '../assets/img/gallery/thumbs/06.jpg'
import thumb07 from '../assets/img/gallery/thumbs/07.jpg'
import thumb08 from '../assets/img/gallery/thumbs/08.jpg'
import thumb09 from '../assets/img/gallery/thumbs/09.jpg'
import thumb10 from '../assets/img/gallery/thumbs/10.jpg'
import pic01 from '../assets/img/pic01.jpg'
import pic02 from '../assets/img/pic02.jpg'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <section className="intro">
      <header>
        <h1>Paradigm Shift</h1>
        <p>
          A free responsive site template designed by{' '}
          <a href="https://twitter.com/ajlkn">@ajlkn</a> /{' '}
          <a href="https://html5up.net">HTML5 UP</a>
        </p>
        <ul className="actions">
          <li>
            <a href="#first" className="arrow scrolly">
              <span className="label">Next</span>
            </a>
          </li>
        </ul>
      </header>
      <div className="content">
        <span className="image fill" data-position="center">
          <img src={pic01} alt="" />
        </span>
      </div>
    </section>

    <section id="first">
      <header>
        <h2>Magna sed nullam nisl adipiscing</h2>
      </header>
      <div className="content">
        <p>
          <strong>Lorem ipsum dolor</strong> sit amet consectetur adipiscing
          elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Etiam
          tristique libero eu nibh porttitor amet fermentum. Nullam venenatis
          erat id vehicula ultrices sed ultricies condimentum. Magna sed etiam
          consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
          dolor libero, feugiat magna tempus, sed et lorem adipiscing.
        </p>
        <span className="image main">
          <img src={pic02} alt="" />
        </span>
      </div>
    </section>

    <section>
      <header>
        <h2>Feugiat consequat tempus ultrices</h2>
      </header>
      <div className="content">
        <p>
          <strong>Etiam tristique libero</strong> eu nibh porttitor amet
          fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies
          condimentum.
        </p>
        <ul className="feature-icons">
          <li className="icon solid fa-laptop">Consequat tempus</li>
          <li className="icon solid fa-bolt">Etiam adipiscing</li>
          <li className="icon solid fa-signal">Libero nullam</li>
          <li className="icon solid fa-cog">Blandit condimentum</li>
          <li className="icon solid fa-map-marker-alt">Lorem ipsum dolor</li>
          <li className="icon solid fa-code">Nibh amet venenatis</li>
        </ul>
        <p>
          Vehicula ultrices sed ultricies condimentum. Magna sed etiam
          consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
          dolor libero, feugiat magna tempus, sed et lorem adipiscing.
        </p>
      </div>
    </section>

    <section>
      <header>
        <h2>Ultrices erat magna sed condimentum</h2>
      </header>
      <div className="content">
        <p>
          <strong>Integer mollis egestas</strong> nam maximus erat id euismod
          egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.
        </p>

        <section>
          <header>
            <h3>Erat aliquam</h3>
            <p>
              Vehicula ultrices dolor amet ultricies et condimentum. Magna sed
              etiam consequat, et lorem adipiscing sed dolor sit amet,
              consectetur amet do eiusmod tempor incididunt ipsum suspendisse
              ultrices gravida.
            </p>
          </header>
          <div className="content">
            <div className="gallery">
              <a href="images/gallery/fulls/01.jpg" className="landscape">
                <img src={thumb01} alt="" />
              </a>
              <a href="images/gallery/fulls/02.jpg">
                <img src={thumb02} alt="" />
              </a>
              <a href="images/gallery/fulls/03.jpg">
                <img src={thumb03} alt="" />
              </a>
              <a href="images/gallery/fulls/04.jpg" className="landscape">
                <img src={thumb04} alt="" />
              </a>
            </div>
          </div>
        </section>

        <section>
          <header>
            <h3>Nisl consequat</h3>
            <p>
              Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
              aliquam sed facilisis ante interdum congue. Integer mollis, nisl
              amet convallis, porttitor magna ullamcorper, amet mauris. Ut magna
              finibus nisi nec lacinia ipsum maximus.
            </p>
          </header>
          <div className="content">
            <div className="gallery">
              <a href="images/gallery/fulls/05.jpg" className="landscape">
                <img src={thumb05} alt="" />
              </a>
              <a href="images/gallery/fulls/06.jpg">
                <img src={thumb06} alt="" />
              </a>
              <a href="images/gallery/fulls/07.jpg">
                <img src={thumb07} alt="" />
              </a>
            </div>
          </div>
        </section>

        <section>
          <header>
            <h3>Lorem gravida</h3>
            <p>
              Proin aliquam facilisis ante interdum. Sed nulla amet lorem
              feugiat tempus aenean ornare velit lacus, ac varius sed enim lorem
              ullamcorper dolore. ac varius enim lorem ullamcorper dolore. Proin
              aliquam facilisis.
            </p>
          </header>
          <div className="content">
            <div className="gallery">
              <a href="images/gallery/fulls/08.jpg" className="portrait">
                <img src={thumb08} alt="" />
              </a>
              <a href="images/gallery/fulls/09.jpg" className="portrait">
                <img src={thumb09} alt="" />
              </a>
              <a href="images/gallery/fulls/10.jpg" className="landscape">
                <img src={thumb10} alt="" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section>
      <header>
        <h2>Duis sed adpiscing veroeros amet</h2>
      </header>
      <div className="content">
        <p>
          <strong>Proin tempus feugiat</strong> sed varius enim lorem
          ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim
          lorem ullamcorper dolore.
        </p>
        <ul className="actions">
          <li>
            <a href="#" className="button primary large">
              Get Started
            </a>
          </li>
          <li>
            <a href="#" className="button large">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section>
      <header>
        <h2>Get in touch</h2>
      </header>
      <div className="content">
        <p>
          <strong>Auctor commodo</strong> interdum et malesuada fames ac ante
          ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
          mattis sagittis.
        </p>
        <form>
          <div className="fields">
            <div className="field half">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="field half">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="field">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="7"
              ></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input
                type="submit"
                value="Send Message"
                className="button primary"
              />
            </li>
          </ul>
        </form>
      </div>
      <footer>
        <ul className="items">
          <li>
            <h3>Email</h3>
            <a href="#">information@untitled.ext</a>
          </li>
          <li>
            <h3>Phone</h3>
            <a href="#">(000) 000-0000</a>
          </li>
          <li>
            <h3>Address</h3>
            <span>1234 Somewhere Road, Nashville, TN 00000</span>
          </li>
          <li>
            <h3>Elsewhere</h3>
            <ul className="icons">
              <li>
                <a href="#" className="icon brands fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-facebook-f">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-linkedin-in">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-codepen">
                  <span className="label">Codepen</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </section>

    <div className="copyright">
      &copy; Untitled. All rights reserved. Design:{' '}
      <a href="https://html5up.net">HTML5 UP</a>.
    </div>
  </Layout>
)

export default IndexPage
