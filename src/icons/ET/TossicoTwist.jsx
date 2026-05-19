import React from 'react';

export const iconData = {
  "id": "TossicoTwist",
  "name": "TossicoTwist",
  "category": "ET",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.08 12.00 a 9.92 9.92 0 1 0 19.84 0 a 9.92 9.92 0 1 0 -19.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.06 6.05 a 7.94 2.381169203929603 0 1 0 15.87 0 a 7.94 2.381169203929603 0 1 0 -15.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.28 10.02 a 9.72 2.916324770428374 0 1 0 19.44 0 a 9.72 2.916324770428374 0 1 0 -19.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.28 13.98 a 9.72 2.916324770428374 0 1 0 19.44 0 a 9.72 2.916324770428374 0 1 0 -19.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.06 17.95 a 7.94 2.381169203929603 0 1 0 15.87 0 a 7.94 2.381169203929603 0 1 0 -15.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.08 A 2 2 0 0 0 12.00 21.92"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.08 A 2 2 0 0 1 12.00 21.92"
      }
    ]
  ]
};

export const TossicoTwist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.08 12.00 a 9.92 9.92 0 1 0 19.84 0 a 9.92 9.92 0 1 0 -19.84 0" />
      <path d="M 4.06 6.05 a 7.94 2.381169203929603 0 1 0 15.87 0 a 7.94 2.381169203929603 0 1 0 -15.87 0" />
      <path d="M 2.28 10.02 a 9.72 2.916324770428374 0 1 0 19.44 0 a 9.72 2.916324770428374 0 1 0 -19.44 0" />
      <path d="M 2.28 13.98 a 9.72 2.916324770428374 0 1 0 19.44 0 a 9.72 2.916324770428374 0 1 0 -19.44 0" />
      <path d="M 4.06 17.95 a 7.94 2.381169203929603 0 1 0 15.87 0 a 7.94 2.381169203929603 0 1 0 -15.87 0" />
      <path d="M 12.00 2.08 A 2 2 0 0 0 12.00 21.92" />
      <path d="M 12.00 2.08 A 2 2 0 0 1 12.00 21.92" />
      {children}
    </svg>
  );
});

export default TossicoTwist;
