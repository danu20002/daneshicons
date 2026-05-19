import React from 'react';

export const iconData = {
  "id": "ZelanteVote",
  "name": "ZelanteVote",
  "category": "HN",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.87 13.82 L 19.40 19.61"
      }
    ],
    [
      "path",
      {
        "d": "M 8.79 16.31 Q 2.82 17.76 8.75 5.82"
      }
    ],
    [
      "path",
      {
        "d": "M 3.61 6.71 L 14.25 4.31"
      }
    ]
  ]
};

export const ZelanteVote = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 19.87 13.82 L 19.40 19.61" />
      <path d="M 8.79 16.31 Q 2.82 17.76 8.75 5.82" />
      <path d="M 3.61 6.71 L 14.25 4.31" />
      {children}
    </svg>
  );
});

export default ZelanteVote;
