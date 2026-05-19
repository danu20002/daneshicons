import React from 'react';

export const iconData = {
  "id": "QuintSlave",
  "name": "QuintSlave",
  "category": "DF",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.10 21.15 L 3.66 20.02 L 8.29 19.78 L 19.64 6.84 L 8.42 17.93"
      }
    ],
    [
      "circle",
      {
        "cx": "8.10",
        "cy": "21.15",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "3.66",
        "cy": "20.02",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "8.29",
        "cy": "19.78",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "19.64",
        "cy": "6.84",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "8.42",
        "cy": "17.93",
        "r": "0.54"
      }
    ]
  ]
};

export const QuintSlave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.10 21.15 L 3.66 20.02 L 8.29 19.78 L 19.64 6.84 L 8.42 17.93" />
      <circle cx="8.10" cy="21.15" r="0.89" />
      <circle cx="3.66" cy="20.02" r="0.78" />
      <circle cx="8.29" cy="19.78" r="0.87" />
      <circle cx="19.64" cy="6.84" r="1.42" />
      <circle cx="8.42" cy="17.93" r="0.54" />
      {children}
    </svg>
  );
});

export default QuintSlave;
