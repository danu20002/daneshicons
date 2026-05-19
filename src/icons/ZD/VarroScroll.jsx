import React from 'react';

export const iconData = {
  "id": "VarroScroll",
  "name": "VarroScroll",
  "category": "ZD",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.47 3.67 L 14.49 19.99 L 21.43 3.60 L 10.66 7.09 L 18.36 19.15 L 14.84 7.51 L 20.43 13.62"
      }
    ],
    [
      "circle",
      {
        "cx": "17.47",
        "cy": "3.67",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "14.49",
        "cy": "19.99",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "21.43",
        "cy": "3.60",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "10.66",
        "cy": "7.09",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "18.36",
        "cy": "19.15",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "14.84",
        "cy": "7.51",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "20.43",
        "cy": "13.62",
        "r": "0.98"
      }
    ]
  ]
};

export const VarroScroll = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.47 3.67 L 14.49 19.99 L 21.43 3.60 L 10.66 7.09 L 18.36 19.15 L 14.84 7.51 L 20.43 13.62" />
      <circle cx="17.47" cy="3.67" r="1.07" />
      <circle cx="14.49" cy="19.99" r="0.96" />
      <circle cx="21.43" cy="3.60" r="1.30" />
      <circle cx="10.66" cy="7.09" r="1.00" />
      <circle cx="18.36" cy="19.15" r="1.01" />
      <circle cx="14.84" cy="7.51" r="1.13" />
      <circle cx="20.43" cy="13.62" r="0.98" />
      {children}
    </svg>
  );
});

export default VarroScroll;
