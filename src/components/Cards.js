import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function Cards() {
  return (
    <>
      <div className="cards" id="scrollpoint-cards">
        <h1 id="card-title">Didn't hit the drop? No problem! We got you.</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items hideme">
              {/* <li className="cards__item cards-text-area">
                    <h1 id="card-title">Didn't hit the drop? <h1 id="card-title-red">WE GOT YOU!</h1> All of your favorite exclusive products are available.</h1>
                    <p></p>
                    </li> */}
              <CardItem
                src="images/shoes1.jpg"
                text="The latest sneakers that Nike has to offer."
                label='Nike'
                path='/'
              />
              <CardItem
                src="images/jordans.jpg"
                text="The most hyped models Air Jordan has in it's catalog"
                label='Jordan'
                path='/'
              />
              <CardItem
                src="images/NB.jpg"
                text="Sneakers from the Boston based New Balance."
                label='New Balance'
                path='/'
              />
            </ul>
            <br></br>


          </div>
          <h1>Here's what our customers have to say:</h1>
          <div className="cards__wrapper">
            <ul className="tweets__items hideme">
              <li className="tweets__item">
                <TwitterTweetEmbed
                  tweetId={'1388094915545030659'}
                  options={{ conversation: 'none', theme: 'dark' }}
                />
              </li>
              <li className="tweets__item">
                <TwitterTweetEmbed
                  tweetId={'1374034082594754560'}
                  options={{ conversation: 'none', theme: 'dark' }}
                />
              </li>
              <li className="tweets__item">
                <TwitterTweetEmbed
                  tweetId={'1465643766929244171'}
                  options={{ conversation: 'none', theme: 'dark' }}
                />
              </li>
              <li className="tweets__item">
                <TwitterTweetEmbed
                  tweetId={'1582142340701249537'}
                  options={{ conversation: 'none', theme: 'dark' }}
                />
              </li>
            </ul>
          </div>
          <div className="cards__wrapper">
            <ul className="tweets__items hideme">
              <li className="tweets__item">
                <TwitterTweetEmbed
                  tweetId={'1595056799551557634'}
                  options={{ conversation: 'none', theme: 'dark' }}
                />
              </li>
              <li className="tweets__item">
                <TwitterTweetEmbed
                  tweetId={'1563462158201278464'}
                  options={{ conversation: 'none', theme: 'dark' }}
                />
              </li>
              <li className="tweets__item">
                <TwitterTweetEmbed
                  tweetId={'1564698171967737859'}
                  options={{ conversation: 'none', theme: 'dark' }}
                />
              </li>
              <li className="tweets__item">
                <TwitterTweetEmbed
                  tweetId={'1480683460935270400'}
                  options={{ conversation: 'none', theme: 'dark' }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards