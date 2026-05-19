import React from 'react';

export const iconData = {
  "id": "PhantoThousand",
  "name": "PhantoThousand",
  "category": "UT",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.43 13.03 L 3.70 5.03 L 2.92 17.34 L 16.64 11.60 L 6.35 16.18 L 18.29 3.17"
      }
    ],
    [
      "circle",
      {
        "cx": "15.43",
        "cy": "13.03",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "3.70",
        "cy": "5.03",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "2.92",
        "cy": "17.34",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "16.64",
        "cy": "11.60",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "6.35",
        "cy": "16.18",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "18.29",
        "cy": "3.17",
        "r": "1.31"
      }
    ]
  ]
};

export const PhantoThousand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.43 13.03 L 3.70 5.03 L 2.92 17.34 L 16.64 11.60 L 6.35 16.18 L 18.29 3.17" />
      <circle cx="15.43" cy="13.03" r="1.22" />
      <circle cx="3.70" cy="5.03" r="1.34" />
      <circle cx="2.92" cy="17.34" r="0.54" />
      <circle cx="16.64" cy="11.60" r="1.11" />
      <circle cx="6.35" cy="16.18" r="0.81" />
      <circle cx="18.29" cy="3.17" r="1.31" />
      {children}
    </svg>
  );
});

export default PhantoThousand;
