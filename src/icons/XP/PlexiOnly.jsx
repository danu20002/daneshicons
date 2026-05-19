import React from 'react';

export const iconData = {
  "id": "PlexiOnly",
  "name": "PlexiOnly",
  "category": "XP",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.17 11.29 L 21.49 16.19 L 9.40 17.01 L 7.03 11.31 L 8.55 6.33 L 3.95 2.54 L 7.70 5.51 L 21.60 5.68"
      }
    ],
    [
      "path",
      {
        "d": "M 7.00 5.83 C 9.07 15.37, 5.16 19.00, 18.38 7.73"
      }
    ],
    [
      "path",
      {
        "d": "M 21.07 12.72 C 15.33 17.08, 8.59 20.08, 5.17 16.16"
      }
    ],
    [
      "path",
      {
        "d": "M 3.85 10.57 Q 21.12 21.09 8.69 18.19"
      }
    ],
    [
      "path",
      {
        "d": "M 12.68 4.34 A 2.34 2.25 100 0 1 21.29 14.10"
      }
    ]
  ]
};

export const PlexiOnly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.17 11.29 L 21.49 16.19 L 9.40 17.01 L 7.03 11.31 L 8.55 6.33 L 3.95 2.54 L 7.70 5.51 L 21.60 5.68" />
      <path d="M 7.00 5.83 C 9.07 15.37, 5.16 19.00, 18.38 7.73" />
      <path d="M 21.07 12.72 C 15.33 17.08, 8.59 20.08, 5.17 16.16" />
      <path d="M 3.85 10.57 Q 21.12 21.09 8.69 18.19" />
      <path d="M 12.68 4.34 A 2.34 2.25 100 0 1 21.29 14.10" />
      {children}
    </svg>
  );
});

export default PlexiOnly;
