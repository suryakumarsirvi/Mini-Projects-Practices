// getting video data and adding UI into feed

function renderVideos(feed, videosData) {
    feed.innerHTML = '';

    videosData.forEach(({ title, channel, views, uploaded, duration, thumbnail }) => {
        feed.innerHTML += `
        <div class="video-card">

            <div class="thumbnail">
              <img
                src="${thumbnail}"
                alt="video"
              />
              <span class="duration">${duration}</span>
            </div>

            <div class="video-info">

              <div class="channel-icon">
                <img src="https://i.pravatar.cc/150?img=12" alt="channel" />
              </div>

              <div class="meta">
                <h3 class="title">
                  ${title}
                </h3>
                <p class="channel-name">${channel}</p>
                <p class="stats">${views} • ${uploaded}</p>
              </div>
              
            </div>

        </div>`;
    })
}

export default renderVideos;