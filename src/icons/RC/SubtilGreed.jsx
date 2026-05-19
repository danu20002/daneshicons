import React from 'react';

export const iconData = {
  "id": "SubtilGreed",
  "name": "SubtilGreed",
  "category": "RC",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.86 7.06 L 16.41 3.55 L 12.85 14.30 L 17.91 9.18 L 20.97 4.99 L 4.94 3.56 L 8.07 2.87"
      }
    ],
    [
      "circle",
      {
        "cx": "15.86",
        "cy": "7.06",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "16.41",
        "cy": "3.55",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "12.85",
        "cy": "14.30",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "17.91",
        "cy": "9.18",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "20.97",
        "cy": "4.99",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "4.94",
        "cy": "3.56",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "8.07",
        "cy": "2.87",
        "r": "0.76"
      }
    ]
  ]
};

export const SubtilGreed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.86 7.06 L 16.41 3.55 L 12.85 14.30 L 17.91 9.18 L 20.97 4.99 L 4.94 3.56 L 8.07 2.87" />
      <circle cx="15.86" cy="7.06" r="1.48" />
      <circle cx="16.41" cy="3.55" r="1.26" />
      <circle cx="12.85" cy="14.30" r="0.57" />
      <circle cx="17.91" cy="9.18" r="1.32" />
      <circle cx="20.97" cy="4.99" r="0.57" />
      <circle cx="4.94" cy="3.56" r="0.62" />
      <circle cx="8.07" cy="2.87" r="0.76" />
      {children}
    </svg>
  );
});

export default SubtilGreed;
