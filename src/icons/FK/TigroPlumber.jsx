import React from 'react';

export const iconData = {
  "id": "TigroPlumber",
  "name": "TigroPlumber",
  "category": "FK",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.32 15.24 L 18.19 19.08 L 14.94 11.33 L 6.10 18.89 L 7.40 2.17 L 11.34 13.24"
      }
    ],
    [
      "circle",
      {
        "cx": "14.32",
        "cy": "15.24",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "18.19",
        "cy": "19.08",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "14.94",
        "cy": "11.33",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "6.10",
        "cy": "18.89",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "7.40",
        "cy": "2.17",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "11.34",
        "cy": "13.24",
        "r": "0.75"
      }
    ]
  ]
};

export const TigroPlumber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.32 15.24 L 18.19 19.08 L 14.94 11.33 L 6.10 18.89 L 7.40 2.17 L 11.34 13.24" />
      <circle cx="14.32" cy="15.24" r="1.38" />
      <circle cx="18.19" cy="19.08" r="1.49" />
      <circle cx="14.94" cy="11.33" r="1.45" />
      <circle cx="6.10" cy="18.89" r="0.76" />
      <circle cx="7.40" cy="2.17" r="0.63" />
      <circle cx="11.34" cy="13.24" r="0.75" />
      {children}
    </svg>
  );
});

export default TigroPlumber;
