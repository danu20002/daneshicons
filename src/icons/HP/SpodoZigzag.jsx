import React from 'react';

export const iconData = {
  "id": "SpodoZigzag",
  "name": "SpodoZigzag",
  "category": "HP",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.11 20.79 L 6.67 19.09 L 5.62 13.02 L 13.15 10.71 L 15.14 16.36 L 19.52 5.58"
      }
    ],
    [
      "circle",
      {
        "cx": "13.11",
        "cy": "20.79",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "6.67",
        "cy": "19.09",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "5.62",
        "cy": "13.02",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "13.15",
        "cy": "10.71",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "15.14",
        "cy": "16.36",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "19.52",
        "cy": "5.58",
        "r": "0.87"
      }
    ]
  ]
};

export const SpodoZigzag = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.11 20.79 L 6.67 19.09 L 5.62 13.02 L 13.15 10.71 L 15.14 16.36 L 19.52 5.58" />
      <circle cx="13.11" cy="20.79" r="1.21" />
      <circle cx="6.67" cy="19.09" r="1.42" />
      <circle cx="5.62" cy="13.02" r="0.59" />
      <circle cx="13.15" cy="10.71" r="1.06" />
      <circle cx="15.14" cy="16.36" r="0.89" />
      <circle cx="19.52" cy="5.58" r="0.87" />
      {children}
    </svg>
  );
});

export default SpodoZigzag;
