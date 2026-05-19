import React from 'react';

export const iconData = {
  "id": "YeastPeer",
  "name": "YeastPeer",
  "category": "XR",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.33 19.93 L 19.83 3.82 L 13.73 20.72 L 3.53 17.80 L 2.09 7.26 L 5.24 21.77"
      }
    ],
    [
      "circle",
      {
        "cx": "10.33",
        "cy": "19.93",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "19.83",
        "cy": "3.82",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "13.73",
        "cy": "20.72",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "3.53",
        "cy": "17.80",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "2.09",
        "cy": "7.26",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "5.24",
        "cy": "21.77",
        "r": "1.26"
      }
    ]
  ]
};

export const YeastPeer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.33 19.93 L 19.83 3.82 L 13.73 20.72 L 3.53 17.80 L 2.09 7.26 L 5.24 21.77" />
      <circle cx="10.33" cy="19.93" r="1.30" />
      <circle cx="19.83" cy="3.82" r="1.16" />
      <circle cx="13.73" cy="20.72" r="0.70" />
      <circle cx="3.53" cy="17.80" r="1.10" />
      <circle cx="2.09" cy="7.26" r="1.23" />
      <circle cx="5.24" cy="21.77" r="1.26" />
      {children}
    </svg>
  );
});

export default YeastPeer;
