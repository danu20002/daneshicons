import React from 'react';

export const iconData = {
  "id": "AviHappen",
  "name": "AviHappen",
  "category": "RB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.93 7.96 L 19.09 6.94"
      }
    ],
    [
      "path",
      {
        "d": "M 18.31 5.43 L 19.09 6.94"
      }
    ],
    [
      "circle",
      {
        "cx": "3.93",
        "cy": "7.96",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "18.31",
        "cy": "5.43",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "19.09",
        "cy": "6.94",
        "r": "1.5"
      }
    ]
  ]
};

export const AviHappen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.93 7.96 L 19.09 6.94" />
      <path d="M 18.31 5.43 L 19.09 6.94" />
      <circle cx="3.93" cy="7.96" r="1.5" />
      <circle cx="18.31" cy="5.43" r="1.5" />
      <circle cx="19.09" cy="6.94" r="1.5" />
      {children}
    </svg>
  );
});

export default AviHappen;
