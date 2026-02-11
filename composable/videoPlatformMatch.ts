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

  console.error('url invalid: ', url)

  return null
}
