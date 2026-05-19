import React from 'react';

export const iconData = {
  "id": "BrunoDignity",
  "name": "BrunoDignity",
  "category": "BV",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.47 12.00 a 9.53 9.53 0 1 0 19.06 0 a 9.53 9.53 0 1 0 -19.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.38 6.28 a 7.62 2.2867567318305375 0 1 0 15.25 0 a 7.62 2.2867567318305375 0 1 0 -15.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.66 10.09 a 9.34 2.800693579429642 0 1 0 18.67 0 a 9.34 2.800693579429642 0 1 0 -18.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.66 13.91 a 9.34 2.800693579429642 0 1 0 18.67 0 a 9.34 2.800693579429642 0 1 0 -18.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.38 17.72 a 7.62 2.286756731830537 0 1 0 15.25 0 a 7.62 2.286756731830537 0 1 0 -15.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.47 A 2 2 0 0 0 12.00 21.53"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.47 A 2 2 0 0 1 12.00 21.53"
      }
    ]
  ]
};

export const BrunoDignity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.47 12.00 a 9.53 9.53 0 1 0 19.06 0 a 9.53 9.53 0 1 0 -19.06 0" />
      <path d="M 4.38 6.28 a 7.62 2.2867567318305375 0 1 0 15.25 0 a 7.62 2.2867567318305375 0 1 0 -15.25 0" />
      <path d="M 2.66 10.09 a 9.34 2.800693579429642 0 1 0 18.67 0 a 9.34 2.800693579429642 0 1 0 -18.67 0" />
      <path d="M 2.66 13.91 a 9.34 2.800693579429642 0 1 0 18.67 0 a 9.34 2.800693579429642 0 1 0 -18.67 0" />
      <path d="M 4.38 17.72 a 7.62 2.286756731830537 0 1 0 15.25 0 a 7.62 2.286756731830537 0 1 0 -15.25 0" />
      <path d="M 12.00 2.47 A 2 2 0 0 0 12.00 21.53" />
      <path d="M 12.00 2.47 A 2 2 0 0 1 12.00 21.53" />
      {children}
    </svg>
  );
});

export default BrunoDignity;
