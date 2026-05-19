import React from 'react';

export const iconData = {
  "id": "PostoRaid",
  "name": "PostoRaid",
  "category": "UV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.15 12.00 a 8.85 8.85 0 1 0 17.70 0 a 8.85 8.85 0 1 0 -17.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.66 9.05 a 8.34 2.5030691318160625 0 1 0 16.69 0 a 8.34 2.5030691318160625 0 1 0 -16.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.66 14.95 a 8.34 2.5030691318160634 0 1 0 16.69 0 a 8.34 2.5030691318160634 0 1 0 -16.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.15 A 2 2 0 0 0 12.00 20.85"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.15 A 2 2 0 0 1 12.00 20.85"
      }
    ]
  ]
};

export const PostoRaid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.15 12.00 a 8.85 8.85 0 1 0 17.70 0 a 8.85 8.85 0 1 0 -17.70 0" />
      <path d="M 3.66 9.05 a 8.34 2.5030691318160625 0 1 0 16.69 0 a 8.34 2.5030691318160625 0 1 0 -16.69 0" />
      <path d="M 3.66 14.95 a 8.34 2.5030691318160634 0 1 0 16.69 0 a 8.34 2.5030691318160634 0 1 0 -16.69 0" />
      <path d="M 12.00 3.15 A 2 2 0 0 0 12.00 20.85" />
      <path d="M 12.00 3.15 A 2 2 0 0 1 12.00 20.85" />
      {children}
    </svg>
  );
});

export default PostoRaid;
