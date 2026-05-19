import React from 'react';

export const iconData = {
  "id": "StrobiloGenius",
  "name": "StrobiloGenius",
  "category": "OZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.13 12.00 a 9.87 9.87 0 1 0 19.74 0 a 9.87 9.87 0 1 0 -19.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.45 7.07 a 8.55 2.5639070532381956 0 1 0 17.09 0 a 8.55 2.5639070532381956 0 1 0 -17.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.13 12.00 a 9.87 2.960544854728505 0 1 0 19.74 0 a 9.87 2.960544854728505 0 1 0 -19.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.45 16.93 a 8.55 2.5639070532381956 0 1 0 17.09 0 a 8.55 2.5639070532381956 0 1 0 -17.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.93 3.45 A 2 2 0 0 0 16.93 20.55"
      }
    ],
    [
      "path",
      {
        "d": "M 16.93 3.45 A 2 2 0 0 1 16.93 20.55"
      }
    ],
    [
      "path",
      {
        "d": "M 7.07 3.45 A 2 2 0 0 0 7.07 20.55"
      }
    ],
    [
      "path",
      {
        "d": "M 7.07 3.45 A 2 2 0 0 1 7.07 20.55"
      }
    ]
  ]
};

export const StrobiloGenius = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.13 12.00 a 9.87 9.87 0 1 0 19.74 0 a 9.87 9.87 0 1 0 -19.74 0" />
      <path d="M 3.45 7.07 a 8.55 2.5639070532381956 0 1 0 17.09 0 a 8.55 2.5639070532381956 0 1 0 -17.09 0" />
      <path d="M 2.13 12.00 a 9.87 2.960544854728505 0 1 0 19.74 0 a 9.87 2.960544854728505 0 1 0 -19.74 0" />
      <path d="M 3.45 16.93 a 8.55 2.5639070532381956 0 1 0 17.09 0 a 8.55 2.5639070532381956 0 1 0 -17.09 0" />
      <path d="M 16.93 3.45 A 2 2 0 0 0 16.93 20.55" />
      <path d="M 16.93 3.45 A 2 2 0 0 1 16.93 20.55" />
      <path d="M 7.07 3.45 A 2 2 0 0 0 7.07 20.55" />
      <path d="M 7.07 3.45 A 2 2 0 0 1 7.07 20.55" />
      {children}
    </svg>
  );
});

export default StrobiloGenius;
