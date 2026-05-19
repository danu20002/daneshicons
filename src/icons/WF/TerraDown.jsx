import React from 'react';

export const iconData = {
  "id": "TerraDown",
  "name": "TerraDown",
  "category": "WF",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.55 4.16 L 21.67 14.46 L 19.68 19.55 L 13.58 15.86 L 10.79 19.14 L 12.50 21.09 L 16.16 19.02"
      }
    ],
    [
      "circle",
      {
        "cx": "11.55",
        "cy": "4.16",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "21.67",
        "cy": "14.46",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "19.68",
        "cy": "19.55",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "13.58",
        "cy": "15.86",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "10.79",
        "cy": "19.14",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "12.50",
        "cy": "21.09",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "16.16",
        "cy": "19.02",
        "r": "0.98"
      }
    ]
  ]
};

export const TerraDown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.55 4.16 L 21.67 14.46 L 19.68 19.55 L 13.58 15.86 L 10.79 19.14 L 12.50 21.09 L 16.16 19.02" />
      <circle cx="11.55" cy="4.16" r="0.68" />
      <circle cx="21.67" cy="14.46" r="0.98" />
      <circle cx="19.68" cy="19.55" r="1.43" />
      <circle cx="13.58" cy="15.86" r="0.83" />
      <circle cx="10.79" cy="19.14" r="0.58" />
      <circle cx="12.50" cy="21.09" r="1.43" />
      <circle cx="16.16" cy="19.02" r="0.98" />
      {children}
    </svg>
  );
});

export default TerraDown;
