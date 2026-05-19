import React from 'react';

export const iconData = {
  "id": "VirileGlacier",
  "name": "VirileGlacier",
  "category": "PQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.15 8.34 L 6.14 10.40 L 3.21 20.09 L 16.20 15.17 L 10.43 11.09 L 8.29 5.86"
      }
    ],
    [
      "circle",
      {
        "cx": "6.15",
        "cy": "8.34",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "6.14",
        "cy": "10.40",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "3.21",
        "cy": "20.09",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "16.20",
        "cy": "15.17",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "10.43",
        "cy": "11.09",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "8.29",
        "cy": "5.86",
        "r": "1.26"
      }
    ]
  ]
};

export const VirileGlacier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.15 8.34 L 6.14 10.40 L 3.21 20.09 L 16.20 15.17 L 10.43 11.09 L 8.29 5.86" />
      <circle cx="6.15" cy="8.34" r="0.54" />
      <circle cx="6.14" cy="10.40" r="0.76" />
      <circle cx="3.21" cy="20.09" r="1.12" />
      <circle cx="16.20" cy="15.17" r="1.30" />
      <circle cx="10.43" cy="11.09" r="1.44" />
      <circle cx="8.29" cy="5.86" r="1.26" />
      {children}
    </svg>
  );
});

export default VirileGlacier;
