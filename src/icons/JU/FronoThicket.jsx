import React from 'react';

export const iconData = {
  "id": "FronoThicket",
  "name": "FronoThicket",
  "category": "JU",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.52 11.62 L 17.74 12.41 L 14.09 13.36 L 8.21 7.23 L 19.09 16.21 L 4.50 18.40"
      }
    ],
    [
      "circle",
      {
        "cx": "8.52",
        "cy": "11.62",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "17.74",
        "cy": "12.41",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "14.09",
        "cy": "13.36",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "8.21",
        "cy": "7.23",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "19.09",
        "cy": "16.21",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "4.50",
        "cy": "18.40",
        "r": "0.88"
      }
    ]
  ]
};

export const FronoThicket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.52 11.62 L 17.74 12.41 L 14.09 13.36 L 8.21 7.23 L 19.09 16.21 L 4.50 18.40" />
      <circle cx="8.52" cy="11.62" r="1.31" />
      <circle cx="17.74" cy="12.41" r="1.43" />
      <circle cx="14.09" cy="13.36" r="1.45" />
      <circle cx="8.21" cy="7.23" r="1.31" />
      <circle cx="19.09" cy="16.21" r="1.49" />
      <circle cx="4.50" cy="18.40" r="0.88" />
      {children}
    </svg>
  );
});

export default FronoThicket;
