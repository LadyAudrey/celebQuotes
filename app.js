// variables to hold the quotes for each celebrity
const ts = [
  "No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind.",
  `People haven't always been there for me but music always has.`,
  `I took a chance, I took a shot
  And you may think I’m bullet-proof, but I’m not. You took a swing, I took it hard. And down here from the ground I see who you are`,
  `Everybody has that point in their life where you hit a crossroads and you've had a bunch of bad days and there's different ways you can deal with it and the way I dealt with it was I just turned completely to music.`,
  `I’m intimidated by the fear of being average.`,
];

const ow = [
  "Turn your wounds into wisdom.",
  "You can have it all. Just not all at once.",
  `Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough.`,
  `Everyone wants to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.`,
  `The biggest adventure you can ever take is to live the life of your dreams.`,
  `If a man wants you, nothing can keep him away. If he doesn't want you, nothing can make him stay`,
  `Surround yourself only with people who are going to take you higher.`,
];

const hf = [
  "Education is preeminently a matter of quality, not amount",
  `Don’t find fault, find a remedy: anyone can complain.`,
  `If you think you can do a thing or think you can’t do a thing, you’re right.`,
  `nyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young`,
  `One of the greatest discoveries a person makes, one of their great surprises, is to find they can do what they were afraid they couldn’t do.`,
  `If everyone is moving forward together, then success takes care of itself.`,
];
const sh = [
  `God is the name people give to the reason we are here.`,
  `God may exist, but science can explain the universe without the need for a creator`,
  `However difficult life may seem, there is always something you can do and succeed at.`,
  `I am just a child who has never grown up. I still keep asking these 'how' and 'why' questions. Occasionally, I find an answer.`,
  `I believe alien life is quite common in the universe, although intelligent life is less so. Some say it has yet to appear on planet Earth.`,
  `In my opinion, there is no aspect of reality beyond the reach of the human mind.`,
  `Intelligence is the ability to adapt to change.`,
];

// accessing the elements with IDs
const tsBtn = document.getElementById("TSBtn");
const owBtn = document.getElementById("OWBtn");
const hfBtn = document.getElementById("HFBtn");
const shBtn = document.getElementById("SHBtn");
const randomBtn = document.getElementById("randomBtn");

const printQuotes = document.getElementById("printed-quotes");

// helper function to get random quote
const randomQuote = (celebQuotes) => {
  const randomNum = Math.floor(Math.random() * celebQuotes.length);
  return celebQuotes[randomNum];
};

// function to update the quote div
const printQuote = function (quote) {
  printQuotes.innerHTML = quote;
};

// Event handlers use the above functions
tsBtn.addEventListener("click", function () {
  const newQuote = randomQuote(ts);
  printQuote(newQuote);
});

owBtn.addEventListener("click", function () {
  const newQuote = randomQuote(ow);
  printQuote(newQuote);
});

hfBtn.addEventListener("click", function () {
  const newQuote = randomQuote(hf);
  printQuote(newQuote);
});

shBtn.addEventListener("click", function () {
  const newQuote = randomQuote(sh);
  printQuote(newQuote);
});
