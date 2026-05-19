import React from 'react';

export const iconData = {
  "id": "TendoTraffic",
  "name": "TendoTraffic",
  "category": "VO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.09 12.00 a 9.91 9.91 0 1 0 19.83 0 a 9.91 9.91 0 1 0 -19.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.41 7.04 a 8.59 2.5759626670127473 0 1 0 17.17 0 a 8.59 2.5759626670127473 0 1 0 -17.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.09 12.00 a 9.91 2.974465478444472 0 1 0 19.83 0 a 9.91 2.974465478444472 0 1 0 -19.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.41 16.96 a 8.59 2.5759626670127473 0 1 0 17.17 0 a 8.59 2.5759626670127473 0 1 0 -17.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.96 3.41 A 2 2 0 0 0 16.96 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 16.96 3.41 A 2 2 0 0 1 16.96 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 7.04 3.41 A 2 2 0 0 0 7.04 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 7.04 3.41 A 2 2 0 0 1 7.04 20.59"
      }
    ]
  ]
};

export const TendoTraffic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.09 12.00 a 9.91 9.91 0 1 0 19.83 0 a 9.91 9.91 0 1 0 -19.83 0" />
      <path d="M 3.41 7.04 a 8.59 2.5759626670127473 0 1 0 17.17 0 a 8.59 2.5759626670127473 0 1 0 -17.17 0" />
      <path d="M 2.09 12.00 a 9.91 2.974465478444472 0 1 0 19.83 0 a 9.91 2.974465478444472 0 1 0 -19.83 0" />
      <path d="M 3.41 16.96 a 8.59 2.5759626670127473 0 1 0 17.17 0 a 8.59 2.5759626670127473 0 1 0 -17.17 0" />
      <path d="M 16.96 3.41 A 2 2 0 0 0 16.96 20.59" />
      <path d="M 16.96 3.41 A 2 2 0 0 1 16.96 20.59" />
      <path d="M 7.04 3.41 A 2 2 0 0 0 7.04 20.59" />
      <path d="M 7.04 3.41 A 2 2 0 0 1 7.04 20.59" />
      {children}
    </svg>
  );
});

export default TendoTraffic;
