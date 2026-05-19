import React from 'react';

export const iconData = {
  "id": "TutoreSupply",
  "name": "TutoreSupply",
  "category": "DE",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.54 7.47 L 14.52 10.70"
      }
    ],
    [
      "path",
      {
        "d": "M 11.54 7.47 L 17.80 17.22"
      }
    ],
    [
      "path",
      {
        "d": "M 14.52 10.70 L 17.80 17.22"
      }
    ],
    [
      "circle",
      {
        "cx": "11.54",
        "cy": "7.47",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "14.52",
        "cy": "10.70",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "17.80",
        "cy": "17.22",
        "r": "1.5"
      }
    ]
  ]
};

export const TutoreSupply = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.54 7.47 L 14.52 10.70" />
      <path d="M 11.54 7.47 L 17.80 17.22" />
      <path d="M 14.52 10.70 L 17.80 17.22" />
      <circle cx="11.54" cy="7.47" r="1.5" />
      <circle cx="14.52" cy="10.70" r="1.5" />
      <circle cx="17.80" cy="17.22" r="1.5" />
      {children}
    </svg>
  );
});

export default TutoreSupply;
