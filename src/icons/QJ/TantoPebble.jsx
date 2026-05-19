import React from 'react';

export const iconData = {
  "id": "TantoPebble",
  "name": "TantoPebble",
  "category": "QJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.70 15.25 L 18.79 13.82 L 10.72 19.89 L 6.05 12.24"
      }
    ],
    [
      "circle",
      {
        "cx": "8.70",
        "cy": "15.25",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "18.79",
        "cy": "13.82",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "10.72",
        "cy": "19.89",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "6.05",
        "cy": "12.24",
        "r": "0.90"
      }
    ]
  ]
};

export const TantoPebble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.70 15.25 L 18.79 13.82 L 10.72 19.89 L 6.05 12.24" />
      <circle cx="8.70" cy="15.25" r="1.37" />
      <circle cx="18.79" cy="13.82" r="1.43" />
      <circle cx="10.72" cy="19.89" r="0.92" />
      <circle cx="6.05" cy="12.24" r="0.90" />
      {children}
    </svg>
  );
});

export default TantoPebble;
