import React from 'react';

export const iconData = {
  "id": "XericoTrojan",
  "name": "XericoTrojan",
  "category": "Q",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.81 12.00 a 9.19 9.19 0 1 0 18.39 0 a 9.19 9.19 0 1 0 -18.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 7.40 a 7.96 2.388888101670882 0 1 0 15.93 0 a 7.96 2.388888101670882 0 1 0 -15.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.81 12.00 a 9.19 2.7584503771271556 0 1 0 18.39 0 a 9.19 2.7584503771271556 0 1 0 -18.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 16.60 a 7.96 2.388888101670882 0 1 0 15.93 0 a 7.96 2.388888101670882 0 1 0 -15.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.60 4.04 A 2 2 0 0 0 16.60 19.96"
      }
    ],
    [
      "path",
      {
        "d": "M 16.60 4.04 A 2 2 0 0 1 16.60 19.96"
      }
    ],
    [
      "path",
      {
        "d": "M 7.40 4.04 A 2 2 0 0 0 7.40 19.96"
      }
    ],
    [
      "path",
      {
        "d": "M 7.40 4.04 A 2 2 0 0 1 7.40 19.96"
      }
    ]
  ]
};

export const XericoTrojan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.81 12.00 a 9.19 9.19 0 1 0 18.39 0 a 9.19 9.19 0 1 0 -18.39 0" />
      <path d="M 4.04 7.40 a 7.96 2.388888101670882 0 1 0 15.93 0 a 7.96 2.388888101670882 0 1 0 -15.93 0" />
      <path d="M 2.81 12.00 a 9.19 2.7584503771271556 0 1 0 18.39 0 a 9.19 2.7584503771271556 0 1 0 -18.39 0" />
      <path d="M 4.04 16.60 a 7.96 2.388888101670882 0 1 0 15.93 0 a 7.96 2.388888101670882 0 1 0 -15.93 0" />
      <path d="M 16.60 4.04 A 2 2 0 0 0 16.60 19.96" />
      <path d="M 16.60 4.04 A 2 2 0 0 1 16.60 19.96" />
      <path d="M 7.40 4.04 A 2 2 0 0 0 7.40 19.96" />
      <path d="M 7.40 4.04 A 2 2 0 0 1 7.40 19.96" />
      {children}
    </svg>
  );
});

export default XericoTrojan;
