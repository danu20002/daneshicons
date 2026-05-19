import React from 'react';

export const iconData = {
  "id": "TerraOath",
  "name": "TerraOath",
  "category": "DF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.43 21.49 L 5.67 19.03 L 15.07 19.81 L 6.21 8.57"
      }
    ],
    [
      "circle",
      {
        "cx": "4.43",
        "cy": "21.49",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "5.67",
        "cy": "19.03",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "15.07",
        "cy": "19.81",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "6.21",
        "cy": "8.57",
        "r": "1.48"
      }
    ]
  ]
};

export const TerraOath = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.43 21.49 L 5.67 19.03 L 15.07 19.81 L 6.21 8.57" />
      <circle cx="4.43" cy="21.49" r="1.01" />
      <circle cx="5.67" cy="19.03" r="1.09" />
      <circle cx="15.07" cy="19.81" r="0.63" />
      <circle cx="6.21" cy="8.57" r="1.48" />
      {children}
    </svg>
  );
});

export default TerraOath;
