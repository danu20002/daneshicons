import React from 'react';

export const iconData = {
  "id": "ErgoZest",
  "name": "ErgoZest",
  "category": "BA",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.05 18.12 L 6.62 7.07 L 19.14 10.42 L 15.40 21.89 L 4.44 6.16 L 17.39 18.24"
      }
    ],
    [
      "circle",
      {
        "cx": "11.05",
        "cy": "18.12",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "6.62",
        "cy": "7.07",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "19.14",
        "cy": "10.42",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "15.40",
        "cy": "21.89",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "4.44",
        "cy": "6.16",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "17.39",
        "cy": "18.24",
        "r": "0.86"
      }
    ]
  ]
};

export const ErgoZest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.05 18.12 L 6.62 7.07 L 19.14 10.42 L 15.40 21.89 L 4.44 6.16 L 17.39 18.24" />
      <circle cx="11.05" cy="18.12" r="1.38" />
      <circle cx="6.62" cy="7.07" r="0.72" />
      <circle cx="19.14" cy="10.42" r="0.57" />
      <circle cx="15.40" cy="21.89" r="1.31" />
      <circle cx="4.44" cy="6.16" r="0.84" />
      <circle cx="17.39" cy="18.24" r="0.86" />
      {children}
    </svg>
  );
});

export default ErgoZest;
