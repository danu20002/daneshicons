import React from 'react';

export const iconData = {
  "id": "FronoRobin",
  "name": "FronoRobin",
  "category": "EA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.79 12.00 a 9.21 9.21 0 1 0 18.41 0 a 9.21 9.21 0 1 0 -18.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.03 7.40 a 7.97 2.3919519292681732 0 1 0 15.95 0 a 7.97 2.3919519292681732 0 1 0 -15.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.79 12.00 a 9.21 2.761988180503249 0 1 0 18.41 0 a 9.21 2.761988180503249 0 1 0 -18.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.03 16.60 a 7.97 2.3919519292681732 0 1 0 15.95 0 a 7.97 2.3919519292681732 0 1 0 -15.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.60 4.03 A 2 2 0 0 0 16.60 19.97"
      }
    ],
    [
      "path",
      {
        "d": "M 16.60 4.03 A 2 2 0 0 1 16.60 19.97"
      }
    ],
    [
      "path",
      {
        "d": "M 7.40 4.03 A 2 2 0 0 0 7.40 19.97"
      }
    ],
    [
      "path",
      {
        "d": "M 7.40 4.03 A 2 2 0 0 1 7.40 19.97"
      }
    ]
  ]
};

export const FronoRobin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.79 12.00 a 9.21 9.21 0 1 0 18.41 0 a 9.21 9.21 0 1 0 -18.41 0" />
      <path d="M 4.03 7.40 a 7.97 2.3919519292681732 0 1 0 15.95 0 a 7.97 2.3919519292681732 0 1 0 -15.95 0" />
      <path d="M 2.79 12.00 a 9.21 2.761988180503249 0 1 0 18.41 0 a 9.21 2.761988180503249 0 1 0 -18.41 0" />
      <path d="M 4.03 16.60 a 7.97 2.3919519292681732 0 1 0 15.95 0 a 7.97 2.3919519292681732 0 1 0 -15.95 0" />
      <path d="M 16.60 4.03 A 2 2 0 0 0 16.60 19.97" />
      <path d="M 16.60 4.03 A 2 2 0 0 1 16.60 19.97" />
      <path d="M 7.40 4.03 A 2 2 0 0 0 7.40 19.97" />
      <path d="M 7.40 4.03 A 2 2 0 0 1 7.40 19.97" />
      {children}
    </svg>
  );
});

export default FronoRobin;
