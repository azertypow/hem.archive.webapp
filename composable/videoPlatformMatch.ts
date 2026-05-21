export function videoPlatformMatch(url: string): {
  videoPlatform: "switch" | "vimeo" | "youtube";
  src: string
} | null {

  const switchMatch = url.match(
    /tube\.switch\.ch\/videos\/([a-zA-Z0-9]+)/
  )
  const vimeoMatch = url.match(
    /vimeo\.com\/([a-zA-Z0-9]+)/
  )
  const youtubeMatch = url.match(
    /youtu\.be\/([a-zA-Z0-9]+)/
  )
  const youtubeVarianteMatch = url.match(
    /youtube\.com\/([a-zA-Z0-9]+)/
  )



  console.log(switchMatch, vimeoMatch, youtubeMatch, youtubeVarianteMatch, url)

  if (switchMatch) {
    return {
      videoPlatform: "switch",
      src: "https://tube.switch.ch/embed/" + switchMatch[1],
    }
  }
  else if(vimeoMatch) {
    return {
      videoPlatform: "vimeo",
      src: "https://player.vimeo.com/video/" + vimeoMatch[1],
    }
  }
  else if(youtubeMatch) {
    return {
      videoPlatform: "youtube",
      src: "https://www.youtube.com/embed/" + youtubeMatch[1],
    }
  }
  else if(youtubeVarianteMatch) {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get('v');


    return {
      videoPlatform: "youtube",
      src: "https://www.youtube.com/embed/" + videoId,
    }
  }

  console.error('url invalid: ', url)

  return null
}
