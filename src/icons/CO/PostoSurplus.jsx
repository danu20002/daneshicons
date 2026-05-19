import React from 'react';

export const iconData = {
  "id": "PostoSurplus",
  "name": "PostoSurplus",
  "category": "CO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.04 12.00 a 8.96 8.96 0 1 0 17.92 0 a 8.96 8.96 0 1 0 -17.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.24 7.52 a 7.76 2.327783589411213 0 1 0 15.52 0 a 7.76 2.327783589411213 0 1 0 -15.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.04 12.00 a 8.96 2.6878929639235136 0 1 0 17.92 0 a 8.96 2.6878929639235136 0 1 0 -17.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.24 16.48 a 7.76 2.327783589411213 0 1 0 15.52 0 a 7.76 2.327783589411213 0 1 0 -15.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.48 4.24 A 2 2 0 0 0 16.48 19.76"
      }
    ],
    [
      "path",
      {
        "d": "M 16.48 4.24 A 2 2 0 0 1 16.48 19.76"
      }
    ],
    [
      "path",
      {
        "d": "M 7.52 4.24 A 2 2 0 0 0 7.52 19.76"
      }
    ],
    [
      "path",
      {
        "d": "M 7.52 4.24 A 2 2 0 0 1 7.52 19.76"
      }
    ]
  ]
};

export const PostoSurplus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.04 12.00 a 8.96 8.96 0 1 0 17.92 0 a 8.96 8.96 0 1 0 -17.92 0" />
      <path d="M 4.24 7.52 a 7.76 2.327783589411213 0 1 0 15.52 0 a 7.76 2.327783589411213 0 1 0 -15.52 0" />
      <path d="M 3.04 12.00 a 8.96 2.6878929639235136 0 1 0 17.92 0 a 8.96 2.6878929639235136 0 1 0 -17.92 0" />
      <path d="M 4.24 16.48 a 7.76 2.327783589411213 0 1 0 15.52 0 a 7.76 2.327783589411213 0 1 0 -15.52 0" />
      <path d="M 16.48 4.24 A 2 2 0 0 0 16.48 19.76" />
      <path d="M 16.48 4.24 A 2 2 0 0 1 16.48 19.76" />
      <path d="M 7.52 4.24 A 2 2 0 0 0 7.52 19.76" />
      <path d="M 7.52 4.24 A 2 2 0 0 1 7.52 19.76" />
      {children}
    </svg>
  );
});

export default PostoSurplus;
