import React from 'react';

export const iconData = {
  "id": "JunctoPlank",
  "name": "JunctoPlank",
  "category": "TH",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.09 11.21 L 11.33 2.54 L 18.78 6.74 L 21.92 5.67 L 8.88 13.46 L 7.54 13.15 L 12.34 2.70"
      }
    ],
    [
      "circle",
      {
        "cx": "21.09",
        "cy": "11.21",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "11.33",
        "cy": "2.54",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "18.78",
        "cy": "6.74",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "21.92",
        "cy": "5.67",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "8.88",
        "cy": "13.46",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "7.54",
        "cy": "13.15",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "12.34",
        "cy": "2.70",
        "r": "0.86"
      }
    ]
  ]
};

export const JunctoPlank = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.09 11.21 L 11.33 2.54 L 18.78 6.74 L 21.92 5.67 L 8.88 13.46 L 7.54 13.15 L 12.34 2.70" />
      <circle cx="21.09" cy="11.21" r="0.67" />
      <circle cx="11.33" cy="2.54" r="1.33" />
      <circle cx="18.78" cy="6.74" r="0.53" />
      <circle cx="21.92" cy="5.67" r="1.49" />
      <circle cx="8.88" cy="13.46" r="0.82" />
      <circle cx="7.54" cy="13.15" r="0.61" />
      <circle cx="12.34" cy="2.70" r="0.86" />
      {children}
    </svg>
  );
});

export default JunctoPlank;
