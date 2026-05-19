import React from 'react';

export const iconData = {
  "id": "VastoSlump",
  "name": "VastoSlump",
  "category": "GV",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.65 14.99 L 15.97 12.60"
      }
    ],
    [
      "path",
      {
        "d": "M 15.97 12.60 L 19.62 10.53"
      }
    ],
    [
      "circle",
      {
        "cx": "11.65",
        "cy": "14.99",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "15.97",
        "cy": "12.60",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "19.62",
        "cy": "10.53",
        "r": "1.5"
      }
    ]
  ]
};

export const VastoSlump = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.65 14.99 L 15.97 12.60" />
      <path d="M 15.97 12.60 L 19.62 10.53" />
      <circle cx="11.65" cy="14.99" r="1.5" />
      <circle cx="15.97" cy="12.60" r="1.5" />
      <circle cx="19.62" cy="10.53" r="1.5" />
      {children}
    </svg>
  );
});

export default VastoSlump;
