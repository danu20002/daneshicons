import React from 'react';

export const iconData = {
  "id": "MuroTicket",
  "name": "MuroTicket",
  "category": "EC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.49 12.00 a 7.51 7.51 0 1 0 15.02 0 a 7.51 7.51 0 1 0 -15.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.44 12.00 a 4.56 4.56 0 1 1 9.13 0 a 4.56 4.56 0 1 1 -9.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.01 12.00 L 21.01 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.51 18.07 L 16.51 19.80"
      }
    ],
    [
      "path",
      {
        "d": "M 8.49 18.07 L 7.49 19.80"
      }
    ],
    [
      "path",
      {
        "d": "M 4.99 12.00 L 2.99 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.49 5.93 L 7.49 4.20"
      }
    ],
    [
      "path",
      {
        "d": "M 15.51 5.93 L 16.51 4.20"
      }
    ]
  ]
};

export const MuroTicket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.49 12.00 a 7.51 7.51 0 1 0 15.02 0 a 7.51 7.51 0 1 0 -15.02 0" />
      <path d="M 7.44 12.00 a 4.56 4.56 0 1 1 9.13 0 a 4.56 4.56 0 1 1 -9.13 0" />
      <path d="M 19.01 12.00 L 21.01 12.00" />
      <path d="M 15.51 18.07 L 16.51 19.80" />
      <path d="M 8.49 18.07 L 7.49 19.80" />
      <path d="M 4.99 12.00 L 2.99 12.00" />
      <path d="M 8.49 5.93 L 7.49 4.20" />
      <path d="M 15.51 5.93 L 16.51 4.20" />
      {children}
    </svg>
  );
});

export default MuroTicket;
