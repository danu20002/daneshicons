import React from 'react';

export const iconData = {
  "id": "ZenitSpine",
  "name": "ZenitSpine",
  "category": "XR",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.13 5.23 L 20.55 15.74 L 20.24 19.53 L 13.26 18.37"
      }
    ],
    [
      "circle",
      {
        "cx": "10.13",
        "cy": "5.23",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "20.55",
        "cy": "15.74",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "20.24",
        "cy": "19.53",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "13.26",
        "cy": "18.37",
        "r": "0.60"
      }
    ]
  ]
};

export const ZenitSpine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.13 5.23 L 20.55 15.74 L 20.24 19.53 L 13.26 18.37" />
      <circle cx="10.13" cy="5.23" r="1.37" />
      <circle cx="20.55" cy="15.74" r="1.23" />
      <circle cx="20.24" cy="19.53" r="0.56" />
      <circle cx="13.26" cy="18.37" r="0.60" />
      {children}
    </svg>
  );
});

export default ZenitSpine;
