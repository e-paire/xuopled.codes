import React from "react"

const Camera = (props) => (
  <g fill="none" stroke="#fff" strokeWidth="2" {...props}>
    <path d="M35 12h-6c-4 0-2 4-6 4H9c-1 0-2 1-2 2v28c0 1 1 2 2 2h42c1 0 2-1 2-2V18c0-1-1-2-2-2h-4c-4 0-2-4-6-4h-6z" />
    <path d="M35 20c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z" />
    <path d="M35 24c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z" />
    <path d="M11 16v-2h5v2" />
    <circle cx="48" cy="21" r="1" />
    <path d="M19 16v32" />
  </g>
)

export default Camera
