import React from "react"

const VimeoVideo = () => (
  <div
    style={{
      width: "100%",
      height: "0px",
      position: "relative",
      paddingBottom: "50.469%",
    }}
  >
    <iframe
      src="https://streamable.com/e/y4em5v?loop=0"
      frameBorder="0"
      width="100%"
      height="100%"
      allowFullScreen
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        left: "0px",
        top: "0px",
        overflow: "hidden",
      }}
      title="Streamable Video"
    ></iframe>
  </div>
)

export default VimeoVideo
