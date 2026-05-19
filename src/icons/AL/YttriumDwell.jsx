import React from 'react';

export const iconData = {
  "id": "YttriumDwell",
  "name": "YttriumDwell",
  "category": "AL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.68 12.00 a 8.32 8.32 0 1 0 16.64 0 a 8.32 8.32 0 1 0 -16.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.62 12.00 a 6.38 6.38 0 1 1 12.76 0 a 6.38 6.38 0 1 1 -12.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.82 12.00 L 21.82 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.53 17.53 L 18.94 18.94"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.82 L 12.00 21.82"
      }
    ],
    [
      "path",
      {
        "d": "M 6.47 17.53 L 5.06 18.94"
      }
    ],
    [
      "path",
      {
        "d": "M 4.18 12.00 L 2.18 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.47 6.47 L 5.06 5.06"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.18 L 12.00 2.18"
      }
    ],
    [
      "path",
      {
        "d": "M 17.53 6.47 L 18.94 5.06"
      }
    ]
  ]
};

export const YttriumDwell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.68 12.00 a 8.32 8.32 0 1 0 16.64 0 a 8.32 8.32 0 1 0 -16.64 0" />
      <path d="M 5.62 12.00 a 6.38 6.38 0 1 1 12.76 0 a 6.38 6.38 0 1 1 -12.76 0" />
      <path d="M 19.82 12.00 L 21.82 12.00" />
      <path d="M 17.53 17.53 L 18.94 18.94" />
      <path d="M 12.00 19.82 L 12.00 21.82" />
      <path d="M 6.47 17.53 L 5.06 18.94" />
      <path d="M 4.18 12.00 L 2.18 12.00" />
      <path d="M 6.47 6.47 L 5.06 5.06" />
      <path d="M 12.00 4.18 L 12.00 2.18" />
      <path d="M 17.53 6.47 L 18.94 5.06" />
      {children}
    </svg>
  );
});

export default YttriumDwell;
