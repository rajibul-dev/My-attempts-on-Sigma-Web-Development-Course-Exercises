function createCard(title, cName, views, monthOld, duration, thumbnail) {
  const videosEl = document.getElementById("videos");

  const formattedViews = formatNumber(views);

  const htmlString = `<li class="video-li">
  <div class="thumbnail-container">
    <img
      class="thumbnail"
      src="${thumbnail}"
      alt=""
    />
    <span class="duration">${duration}</span>
  </div>
  <div class="details-container">
    <p class="title">
      ${title}
    </p>
    <p class="details">
      <span>${cName}</span>
      <span class="devider">•</span>
      <span>${formattedViews} views</span>
      <span class="devider">•</span>
      <span>${monthOld} month${monthOld > 1 && "s"} ago</span>
    </p>
  </div>
</li>`;

  const cardElement = createElementFromHTML(htmlString);

  videosEl.appendChild(cardElement);
}

// helper functions
function createElementFromHTML(htmlString) {
  const div = document.createElement("div");
  div.innerHTML = htmlString.trim();

  return div.firstChild;
}

function formatNumber(num) {
  const absNum = Math.abs(num);

  const suffixes = ["", "k", "M", "B", "T"];
  const order = Math.min(
    Math.floor(Math.log10(absNum) / 3),
    suffixes.length - 1,
  );

  let roundedNum = num / Math.pow(10, order * 3);

  // Check if the number is a whole number
  if (roundedNum % 1 === 0) {
    roundedNum = roundedNum.toFixed(0);
  } else {
    roundedNum = roundedNum.toFixed(1);
  }

  return `${roundedNum}${suffixes[order]}`;
}

// calling the create card function
createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  5440000,
  7,
  "48:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw",
);
