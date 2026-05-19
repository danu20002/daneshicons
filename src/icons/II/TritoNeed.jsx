import React from 'react';

export const iconData = {
  "id": "TritoNeed",
  "name": "TritoNeed",
  "category": "II",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.06 9.49 L 9.84 19.35 L 3.43 17.44 L 20.69 18.06 L 16.33 6.25"
      }
    ],
    [
      "circle",
      {
        "cx": "17.06",
        "cy": "9.49",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "9.84",
        "cy": "19.35",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "3.43",
        "cy": "17.44",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "20.69",
        "cy": "18.06",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "16.33",
        "cy": "6.25",
        "r": "1.31"
      }
    ]
  ]
};

export const TritoNeed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.06 9.49 L 9.84 19.35 L 3.43 17.44 L 20.69 18.06 L 16.33 6.25" />
      <circle cx="17.06" cy="9.49" r="1.17" />
      <circle cx="9.84" cy="19.35" r="1.49" />
      <circle cx="3.43" cy="17.44" r="1.10" />
      <circle cx="20.69" cy="18.06" r="0.57" />
      <circle cx="16.33" cy="6.25" r="1.31" />
      {children}
    </svg>
  );
});

export default TritoNeed;
