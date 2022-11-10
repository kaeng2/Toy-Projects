<template>
  <div id="app" class="container">
    <img id="logo" src="@/assets/logo.png" alt="logo" />
    <the-search-bar @input-change="onInputChange"></the-search-bar>
    <video-detail
      v-if="mostPopularVideo"
      :mostPopularVideo="mostPopularVideo"
      :videoLink="mostPopularVideoLink"
    />
    <video-list :videos="searchedVideos" />
  </div>
</template>

<script>
import Axios from "axios"
import TheSearchBar from "./components/TheSearchBar"
import VideoDetail from "./components/VideoDetail"
import VideoList from "./components/VideoList"

// const API_KEY = 'AIzaSyAp69ryCoG67a_wEQlI0tBWx4QSq3GBJ5A'

export default {
  name: "App",
  components: {
    TheSearchBar,
    VideoDetail,
    VideoList,
  },
  data() {
    return {
      inputData: null,
      searchedVideos: null,
      mostPopularVideo: null,
      mostPopularVideoLink: null,
    }
  },
  methods: {
    onInputChange(keyword) {
      this.inputData = keyword
      this.getVideo(keyword)
    },

    getVideoDetail(video) {
      Axios({
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/videos",
        params: {
          // key 숨기는법 찾아보기 .env
          id: video.id.videoId,
          key: "AIzaSyAp69ryCoG67a_wEQlI0tBWx4QSq3GBJ5A",
          part: "statistics",
        },
      }).then(function (response) {
        video.statistics = response.data.items[0].statistics
      })
    },

    getChannelImg(video) {
      Axios({
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/channels",
        params: {
          // key 숨기는법 찾아보기 .env
          id: video.snippet.channelId,
          key: "AIzaSyAp69ryCoG67a_wEQlI0tBWx4QSq3GBJ5A",
          part: "snippet",
        },
      }).then(function (response) {
        video.channelImg = response.data.items[0].snippet.thumbnails.default.url
      })
    },

    getVideo(keyword) {
      const app = this
      Axios({
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/search",
        params: {
          // key 숨기는법 찾아보기 .env
          key: "AIzaSyAp69ryCoG67a_wEQlI0tBWx4QSq3GBJ5A",
          part: "snippet",
          type: "video",
          q: keyword,
        },
      })
        .then(function (response) {
          app.searchedVideos = response.data.items

          app.searchedVideos.forEach((video) => {
            app.getVideoDetail(video)
            app.getChannelImg(video)
          })
        })
        .then(function () {
          const mostPopular = app.searchedVideos.reduce((prev, cur) =>
            prev.viewCount > cur.viewCount ? prev : cur
          )
          app.mostPopularVideo = mostPopular
          app.mostPopularVideoLink = mostPopular.id.videoId
        })
    },
  },
}
</script>

<style>
#app {
  font-family: "Gowun Dodum", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}

#logo {
  height: 200px;
  width: 600px;
}
</style>
