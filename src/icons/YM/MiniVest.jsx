import React from 'react';

export const iconData = {
  "id": "MiniVest",
  "name": "MiniVest",
  "category": "YM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.48 12.00 a 8.52 8.52 0 1 0 17.04 0 a 8.52 8.52 0 1 0 -17.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.62 7.74 a 7.38 2.214172028694179 0 1 0 14.76 0 a 7.38 2.214172028694179 0 1 0 -14.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.48 12.00 a 8.52 2.5567056335974483 0 1 0 17.04 0 a 8.52 2.5567056335974483 0 1 0 -17.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.62 16.26 a 7.38 2.214172028694179 0 1 0 14.76 0 a 7.38 2.214172028694179 0 1 0 -14.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.26 4.62 A 2 2 0 0 0 16.26 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 16.26 4.62 A 2 2 0 0 1 16.26 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 7.74 4.62 A 2 2 0 0 0 7.74 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 7.74 4.62 A 2 2 0 0 1 7.74 19.38"
      }
    ]
  ]
};

export const MiniVest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.48 12.00 a 8.52 8.52 0 1 0 17.04 0 a 8.52 8.52 0 1 0 -17.04 0" />
      <path d="M 4.62 7.74 a 7.38 2.214172028694179 0 1 0 14.76 0 a 7.38 2.214172028694179 0 1 0 -14.76 0" />
      <path d="M 3.48 12.00 a 8.52 2.5567056335974483 0 1 0 17.04 0 a 8.52 2.5567056335974483 0 1 0 -17.04 0" />
      <path d="M 4.62 16.26 a 7.38 2.214172028694179 0 1 0 14.76 0 a 7.38 2.214172028694179 0 1 0 -14.76 0" />
      <path d="M 16.26 4.62 A 2 2 0 0 0 16.26 19.38" />
      <path d="M 16.26 4.62 A 2 2 0 0 1 16.26 19.38" />
      <path d="M 7.74 4.62 A 2 2 0 0 0 7.74 19.38" />
      <path d="M 7.74 4.62 A 2 2 0 0 1 7.74 19.38" />
      {children}
    </svg>
  );
});

export default MiniVest;
