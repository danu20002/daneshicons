import React from 'react';

export const iconData = {
  "id": "VistaScrub",
  "name": "VistaScrub",
  "category": "KN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.91 9.98 L 3.22 3.59 L 13.71 11.43 L 13.61 8.18 L 16.97 5.60"
      }
    ],
    [
      "circle",
      {
        "cx": "9.91",
        "cy": "9.98",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "3.22",
        "cy": "3.59",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "13.71",
        "cy": "11.43",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "13.61",
        "cy": "8.18",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "16.97",
        "cy": "5.60",
        "r": "1.07"
      }
    ]
  ]
};

export const VistaScrub = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.91 9.98 L 3.22 3.59 L 13.71 11.43 L 13.61 8.18 L 16.97 5.60" />
      <circle cx="9.91" cy="9.98" r="1.45" />
      <circle cx="3.22" cy="3.59" r="1.31" />
      <circle cx="13.71" cy="11.43" r="0.73" />
      <circle cx="13.61" cy="8.18" r="1.33" />
      <circle cx="16.97" cy="5.60" r="1.07" />
      {children}
    </svg>
  );
});

export default VistaScrub;
