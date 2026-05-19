import React from 'react';

export const iconData = {
  "id": "SteatoButter",
  "name": "SteatoButter",
  "category": "II",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.02 14.03 L 14.33 7.10 L 15.43 15.91 L 9.63 13.15 L 18.99 20.96 L 9.55 20.92"
      }
    ],
    [
      "circle",
      {
        "cx": "19.02",
        "cy": "14.03",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "14.33",
        "cy": "7.10",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "15.43",
        "cy": "15.91",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "9.63",
        "cy": "13.15",
        "r": "1.19"
      }
    ],
    [
      "circle",
      {
        "cx": "18.99",
        "cy": "20.96",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "9.55",
        "cy": "20.92",
        "r": "1.24"
      }
    ]
  ]
};

export const SteatoButter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.02 14.03 L 14.33 7.10 L 15.43 15.91 L 9.63 13.15 L 18.99 20.96 L 9.55 20.92" />
      <circle cx="19.02" cy="14.03" r="0.86" />
      <circle cx="14.33" cy="7.10" r="1.14" />
      <circle cx="15.43" cy="15.91" r="0.76" />
      <circle cx="9.63" cy="13.15" r="1.19" />
      <circle cx="18.99" cy="20.96" r="0.97" />
      <circle cx="9.55" cy="20.92" r="1.24" />
      {children}
    </svg>
  );
});

export default SteatoButter;
