import React from 'react';

export const iconData = {
  "id": "UlceraRaft",
  "name": "UlceraRaft",
  "category": "XP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.93 14.10 L 20.78 4.09 L 13.82 16.40 L 10.73 11.61 L 2.94 16.44 L 9.78 3.86 L 19.72 5.46 L 9.72 6.03"
      }
    ],
    [
      "path",
      {
        "d": "M 7.30 6.79 A 2.26 3.60 0 0 0 18.66 7.57"
      }
    ],
    [
      "path",
      {
        "d": "M 21.11 17.81 L 2.50 19.93"
      }
    ],
    [
      "path",
      {
        "d": "M 16.34 16.91 C 10.22 11.26, 5.51 17.51, 9.77 18.54"
      }
    ],
    [
      "path",
      {
        "d": "M 9.65 13.18 Q 18.98 16.96 8.70 14.50"
      }
    ]
  ]
};

export const UlceraRaft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.93 14.10 L 20.78 4.09 L 13.82 16.40 L 10.73 11.61 L 2.94 16.44 L 9.78 3.86 L 19.72 5.46 L 9.72 6.03" />
      <path d="M 7.30 6.79 A 2.26 3.60 0 0 0 18.66 7.57" />
      <path d="M 21.11 17.81 L 2.50 19.93" />
      <path d="M 16.34 16.91 C 10.22 11.26, 5.51 17.51, 9.77 18.54" />
      <path d="M 9.65 13.18 Q 18.98 16.96 8.70 14.50" />
      {children}
    </svg>
  );
});

export default UlceraRaft;
