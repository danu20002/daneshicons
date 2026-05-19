import React from 'react';

export const iconData = {
  "id": "UmbraFeed",
  "name": "UmbraFeed",
  "category": "GD",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.80 21.50 L 4.26 6.54 L 4.53 6.89 L 20.40 18.10"
      }
    ],
    [
      "circle",
      {
        "cx": "14.80",
        "cy": "21.50",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "4.26",
        "cy": "6.54",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "4.53",
        "cy": "6.89",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "20.40",
        "cy": "18.10",
        "r": "1.08"
      }
    ]
  ]
};

export const UmbraFeed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.80 21.50 L 4.26 6.54 L 4.53 6.89 L 20.40 18.10" />
      <circle cx="14.80" cy="21.50" r="0.60" />
      <circle cx="4.26" cy="6.54" r="1.07" />
      <circle cx="4.53" cy="6.89" r="0.71" />
      <circle cx="20.40" cy="18.10" r="1.08" />
      {children}
    </svg>
  );
});

export default UmbraFeed;
