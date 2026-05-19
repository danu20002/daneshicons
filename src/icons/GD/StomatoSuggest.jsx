import React from 'react';

export const iconData = {
  "id": "StomatoSuggest",
  "name": "StomatoSuggest",
  "category": "GD",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.61 18.41 L 3.52 21.64 L 14.79 13.54 L 16.80 12.67"
      }
    ],
    [
      "circle",
      {
        "cx": "15.61",
        "cy": "18.41",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "3.52",
        "cy": "21.64",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "14.79",
        "cy": "13.54",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "16.80",
        "cy": "12.67",
        "r": "1.48"
      }
    ]
  ]
};

export const StomatoSuggest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.61 18.41 L 3.52 21.64 L 14.79 13.54 L 16.80 12.67" />
      <circle cx="15.61" cy="18.41" r="0.79" />
      <circle cx="3.52" cy="21.64" r="1.21" />
      <circle cx="14.79" cy="13.54" r="1.16" />
      <circle cx="16.80" cy="12.67" r="1.48" />
      {children}
    </svg>
  );
});

export default StomatoSuggest;
