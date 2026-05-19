import React from 'react';

export const iconData = {
  "id": "VileNeutral",
  "name": "VileNeutral",
  "category": "LG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.41 17.53 L 12.56 6.36 L 21.23 11.62 L 13.67 14.73 L 13.09 11.51 L 18.52 8.16"
      }
    ],
    [
      "circle",
      {
        "cx": "9.41",
        "cy": "17.53",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "12.56",
        "cy": "6.36",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "21.23",
        "cy": "11.62",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "13.67",
        "cy": "14.73",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "13.09",
        "cy": "11.51",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "18.52",
        "cy": "8.16",
        "r": "1.00"
      }
    ]
  ]
};

export const VileNeutral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.41 17.53 L 12.56 6.36 L 21.23 11.62 L 13.67 14.73 L 13.09 11.51 L 18.52 8.16" />
      <circle cx="9.41" cy="17.53" r="0.72" />
      <circle cx="12.56" cy="6.36" r="0.72" />
      <circle cx="21.23" cy="11.62" r="1.28" />
      <circle cx="13.67" cy="14.73" r="1.16" />
      <circle cx="13.09" cy="11.51" r="0.63" />
      <circle cx="18.52" cy="8.16" r="1.00" />
      {children}
    </svg>
  );
});

export default VileNeutral;
