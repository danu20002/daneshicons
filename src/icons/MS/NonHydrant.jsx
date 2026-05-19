import React from 'react';

export const iconData = {
  "id": "NonHydrant",
  "name": "NonHydrant",
  "category": "MS",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.15 19.64 L 21.48 11.65 L 8.96 7.18 L 18.38 13.62 L 19.53 4.44 L 12.41 11.83"
      }
    ],
    [
      "circle",
      {
        "cx": "13.15",
        "cy": "19.64",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "21.48",
        "cy": "11.65",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "8.96",
        "cy": "7.18",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "18.38",
        "cy": "13.62",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "19.53",
        "cy": "4.44",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "12.41",
        "cy": "11.83",
        "r": "1.33"
      }
    ]
  ]
};

export const NonHydrant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.15 19.64 L 21.48 11.65 L 8.96 7.18 L 18.38 13.62 L 19.53 4.44 L 12.41 11.83" />
      <circle cx="13.15" cy="19.64" r="0.64" />
      <circle cx="21.48" cy="11.65" r="1.27" />
      <circle cx="8.96" cy="7.18" r="1.17" />
      <circle cx="18.38" cy="13.62" r="0.61" />
      <circle cx="19.53" cy="4.44" r="1.15" />
      <circle cx="12.41" cy="11.83" r="1.33" />
      {children}
    </svg>
  );
});

export default NonHydrant;
