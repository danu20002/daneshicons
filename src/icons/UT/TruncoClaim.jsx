import React from 'react';

export const iconData = {
  "id": "TruncoClaim",
  "name": "TruncoClaim",
  "category": "UT",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.49 4.32 L 3.51 4.98 L 13.30 6.24 L 18.47 13.71"
      }
    ],
    [
      "circle",
      {
        "cx": "8.49",
        "cy": "4.32",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "3.51",
        "cy": "4.98",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "13.30",
        "cy": "6.24",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "18.47",
        "cy": "13.71",
        "r": "1.20"
      }
    ]
  ]
};

export const TruncoClaim = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.49 4.32 L 3.51 4.98 L 13.30 6.24 L 18.47 13.71" />
      <circle cx="8.49" cy="4.32" r="0.52" />
      <circle cx="3.51" cy="4.98" r="0.93" />
      <circle cx="13.30" cy="6.24" r="0.67" />
      <circle cx="18.47" cy="13.71" r="1.20" />
      {children}
    </svg>
  );
});

export default TruncoClaim;
