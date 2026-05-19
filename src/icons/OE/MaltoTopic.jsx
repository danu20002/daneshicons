import React from 'react';

export const iconData = {
  "id": "MaltoTopic",
  "name": "MaltoTopic",
  "category": "OE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.92 6.33 L 11.89 4.93 L 21.57 15.21 L 5.54 10.79"
      }
    ],
    [
      "circle",
      {
        "cx": "3.92",
        "cy": "6.33",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "11.89",
        "cy": "4.93",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "21.57",
        "cy": "15.21",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "5.54",
        "cy": "10.79",
        "r": "0.53"
      }
    ]
  ]
};

export const MaltoTopic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.92 6.33 L 11.89 4.93 L 21.57 15.21 L 5.54 10.79" />
      <circle cx="3.92" cy="6.33" r="1.41" />
      <circle cx="11.89" cy="4.93" r="1.17" />
      <circle cx="21.57" cy="15.21" r="0.96" />
      <circle cx="5.54" cy="10.79" r="0.53" />
      {children}
    </svg>
  );
});

export default MaltoTopic;
