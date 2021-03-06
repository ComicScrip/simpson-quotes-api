'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');

const quotes = [
  {
    quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
      characterDirection: 'Right'
  },
  {
    quote: "Nothing you say can upset us. We're the MTV generation.",
    character: "Bart Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
      characterDirection: 'Right'
  },
  {
    quote: "That's where I saw the leprechaun...He told me to burn things.",
    character: "Ralph Wiggum",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
      characterDirection: 'Left'
  },
  {
    quote:
      "Hello, Simpson. I'm riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone. She was right to do it.",
    character: "Principal Skinner",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460",
      characterDirection: 'Right'
  },
  {
    quote:
      "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
    character: 'Lisa Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
    characterDirection: 'Right'
  },
  {
    quote:
      'I live in a single room above a bowling alley...and below another bowling alley.',
    character: 'Frank Grimes',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FFrankGrimes.png?1497567511887',
    characterDirection: 'Left'
  },
  {
    quote: 'Ahh! Sweet liquor eases the pain.',
    character: 'Troy McClure',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112',
    characterDirection: 'Right'
  },
  {
    quote:
      'Shoplifting is a victimless crime, like punching someone in the dark.',
    character: 'Nelson Muntz',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185',
    characterDirection: 'Left'
  },
  {
    quote:
      "You're turning me into a criminal when all I want to be is a petty thug.",
    character: 'Bart Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638',
    characterDirection: 'Right'
  },
  {
    quote: "But my mom says I'm cool.",
    character: 'Milhouse Van Houten',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002',
    characterDirection: 'Right'
  },
  {
    quote:
      'For once maybe someone will call me "sir" without adding, "You\'re making a scene."',
    character: 'Homer Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
    characterDirection: 'Right'
  },
  {
    quote: "Nothing you say can upset us. We're the MTV generation.",
    character: 'Bart Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638',
    characterDirection: 'Right'
  },
  {
    quote: 'Oh, so they have Internet on computers now!',
    character: 'Homer Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
    characterDirection: 'Right'
  },
  {
    quote: 'Ahh! Sweet liquor eases the pain.',
    character: 'Troy McClure',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112',
    characterDirection: 'Right'
  }
];

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const router = express.Router();
router.get('/randomquote', (req, res) => res.json(quotes[randomInteger(0, quotes.length - 1)]));
router.get('/allquotes', (req, res) => res.json(quotes));

app.use(cors());
app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
