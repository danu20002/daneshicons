import React from 'react';

export const iconData = {
  "id": "RufoResume",
  "name": "RufoResume",
  "category": "VJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.98 12.00 Q 15.54 13.47 18.35 18.35"
      }
    ],
    [
      "path",
      {
        "d": "M 18.35 18.35 Q 13.47 15.54 12.00 20.98"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.98 Q 10.53 15.54 5.65 18.35"
      }
    ],
    [
      "path",
      {
        "d": "M 5.65 18.35 Q 8.46 13.47 3.02 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.02 12.00 Q 8.46 10.53 5.65 5.65"
      }
    ],
    [
      "path",
      {
        "d": "M 5.65 5.65 Q 10.53 8.46 12.00 3.02"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.02 Q 13.47 8.46 18.35 5.65"
      }
    ],
    [
      "path",
      {
        "d": "M 18.35 5.65 Q 15.54 10.53 20.98 12.00"
      }
    ]
  ]
};

export const RufoResume = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.98 12.00 Q 15.54 13.47 18.35 18.35" />
      <path d="M 18.35 18.35 Q 13.47 15.54 12.00 20.98" />
      <path d="M 12.00 20.98 Q 10.53 15.54 5.65 18.35" />
      <path d="M 5.65 18.35 Q 8.46 13.47 3.02 12.00" />
      <path d="M 3.02 12.00 Q 8.46 10.53 5.65 5.65" />
      <path d="M 5.65 5.65 Q 10.53 8.46 12.00 3.02" />
      <path d="M 12.00 3.02 Q 13.47 8.46 18.35 5.65" />
      <path d="M 18.35 5.65 Q 15.54 10.53 20.98 12.00" />
      {children}
    </svg>
  );
});

export default RufoResume;
