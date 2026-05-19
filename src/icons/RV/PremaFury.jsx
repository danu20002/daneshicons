import React from 'react';

export const iconData = {
  "id": "PremaFury",
  "name": "PremaFury",
  "category": "RV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.38 3.20 L 21.36 18.10 L 2.05 19.49 L 20.22 6.13 L 14.67 18.61 L 20.36 14.05 L 9.53 6.36"
      }
    ],
    [
      "circle",
      {
        "cx": "4.38",
        "cy": "3.20",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "21.36",
        "cy": "18.10",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "2.05",
        "cy": "19.49",
        "r": "1.24"
      }
    ],
    [
      "circle",
      {
        "cx": "20.22",
        "cy": "6.13",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "14.67",
        "cy": "18.61",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "20.36",
        "cy": "14.05",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "9.53",
        "cy": "6.36",
        "r": "1.24"
      }
    ]
  ]
};

export const PremaFury = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.38 3.20 L 21.36 18.10 L 2.05 19.49 L 20.22 6.13 L 14.67 18.61 L 20.36 14.05 L 9.53 6.36" />
      <circle cx="4.38" cy="3.20" r="0.63" />
      <circle cx="21.36" cy="18.10" r="1.27" />
      <circle cx="2.05" cy="19.49" r="1.24" />
      <circle cx="20.22" cy="6.13" r="1.36" />
      <circle cx="14.67" cy="18.61" r="0.69" />
      <circle cx="20.36" cy="14.05" r="0.76" />
      <circle cx="9.53" cy="6.36" r="1.24" />
      {children}
    </svg>
  );
});

export default PremaFury;
