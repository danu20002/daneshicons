import React from 'react';

export const iconData = {
  "id": "SpanoChunk",
  "name": "SpanoChunk",
  "category": "HP",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.17 6.67 L 3.99 17.86 L 19.36 7.98 L 14.90 20.40"
      }
    ],
    [
      "circle",
      {
        "cx": "12.17",
        "cy": "6.67",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "3.99",
        "cy": "17.86",
        "r": "1.24"
      }
    ],
    [
      "circle",
      {
        "cx": "19.36",
        "cy": "7.98",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "14.90",
        "cy": "20.40",
        "r": "1.35"
      }
    ]
  ]
};

export const SpanoChunk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.17 6.67 L 3.99 17.86 L 19.36 7.98 L 14.90 20.40" />
      <circle cx="12.17" cy="6.67" r="1.04" />
      <circle cx="3.99" cy="17.86" r="1.24" />
      <circle cx="19.36" cy="7.98" r="0.91" />
      <circle cx="14.90" cy="20.40" r="1.35" />
      {children}
    </svg>
  );
});

export default SpanoChunk;
