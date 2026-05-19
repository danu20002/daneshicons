import React from 'react';

export const iconData = {
  "id": "StalloShrine",
  "name": "StalloShrine",
  "category": "RV",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.69 8.77 L 21.88 3.31 L 13.66 3.51 L 18.41 19.80 L 18.51 15.98"
      }
    ],
    [
      "circle",
      {
        "cx": "13.69",
        "cy": "8.77",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "21.88",
        "cy": "3.31",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "13.66",
        "cy": "3.51",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "18.41",
        "cy": "19.80",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "18.51",
        "cy": "15.98",
        "r": "1.38"
      }
    ]
  ]
};

export const StalloShrine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.69 8.77 L 21.88 3.31 L 13.66 3.51 L 18.41 19.80 L 18.51 15.98" />
      <circle cx="13.69" cy="8.77" r="0.63" />
      <circle cx="21.88" cy="3.31" r="1.07" />
      <circle cx="13.66" cy="3.51" r="0.63" />
      <circle cx="18.41" cy="19.80" r="1.46" />
      <circle cx="18.51" cy="15.98" r="1.38" />
      {children}
    </svg>
  );
});

export default StalloShrine;
