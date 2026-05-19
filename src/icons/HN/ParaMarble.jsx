import React from 'react';

export const iconData = {
  "id": "ParaMarble",
  "name": "ParaMarble",
  "category": "HN",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.62 17.66 C 3.77 13.12, 10.54 19.67, 21.79 5.54"
      }
    ],
    [
      "path",
      {
        "d": "M 17.79 11.39 L 12.82 19.04 L 2.84 13.85 L 3.00 15.39 L 8.55 19.79 L 6.14 21.55 L 7.51 10.27 L 13.93 15.21"
      }
    ]
  ]
};

export const ParaMarble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.62 17.66 C 3.77 13.12, 10.54 19.67, 21.79 5.54" />
      <path d="M 17.79 11.39 L 12.82 19.04 L 2.84 13.85 L 3.00 15.39 L 8.55 19.79 L 6.14 21.55 L 7.51 10.27 L 13.93 15.21" />
      {children}
    </svg>
  );
});

export default ParaMarble;
