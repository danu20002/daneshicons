import React from 'react';

export const iconData = {
  "id": "ViolaBristle",
  "name": "ViolaBristle",
  "category": "EO",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.42 12.00 Q 14.91 12.94 19.62 17.53"
      }
    ],
    [
      "path",
      {
        "d": "M 19.62 17.53 Q 13.80 14.47 14.91 20.95"
      }
    ],
    [
      "path",
      {
        "d": "M 14.91 20.95 Q 12.00 15.06 9.09 20.95"
      }
    ],
    [
      "path",
      {
        "d": "M 9.09 20.95 Q 10.20 14.47 4.38 17.53"
      }
    ],
    [
      "path",
      {
        "d": "M 4.38 17.53 Q 9.09 12.94 2.58 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.58 12.00 Q 9.09 11.06 4.38 6.47"
      }
    ],
    [
      "path",
      {
        "d": "M 4.38 6.47 Q 10.20 9.53 9.09 3.05"
      }
    ],
    [
      "path",
      {
        "d": "M 9.09 3.05 Q 12.00 8.94 14.91 3.05"
      }
    ],
    [
      "path",
      {
        "d": "M 14.91 3.05 Q 13.80 9.53 19.62 6.47"
      }
    ],
    [
      "path",
      {
        "d": "M 19.62 6.47 Q 14.91 11.06 21.42 12.00"
      }
    ]
  ]
};

export const ViolaBristle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.42 12.00 Q 14.91 12.94 19.62 17.53" />
      <path d="M 19.62 17.53 Q 13.80 14.47 14.91 20.95" />
      <path d="M 14.91 20.95 Q 12.00 15.06 9.09 20.95" />
      <path d="M 9.09 20.95 Q 10.20 14.47 4.38 17.53" />
      <path d="M 4.38 17.53 Q 9.09 12.94 2.58 12.00" />
      <path d="M 2.58 12.00 Q 9.09 11.06 4.38 6.47" />
      <path d="M 4.38 6.47 Q 10.20 9.53 9.09 3.05" />
      <path d="M 9.09 3.05 Q 12.00 8.94 14.91 3.05" />
      <path d="M 14.91 3.05 Q 13.80 9.53 19.62 6.47" />
      <path d="M 19.62 6.47 Q 14.91 11.06 21.42 12.00" />
      {children}
    </svg>
  );
});

export default ViolaBristle;
