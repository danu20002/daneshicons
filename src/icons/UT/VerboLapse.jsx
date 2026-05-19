import React from 'react';

export const iconData = {
  "id": "VerboLapse",
  "name": "VerboLapse",
  "category": "UT",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.13 12.78 L 11.52 16.88 L 9.78 20.98 L 2.43 14.14 L 10.40 17.41 L 7.81 2.56"
      }
    ],
    [
      "circle",
      {
        "cx": "20.13",
        "cy": "12.78",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "11.52",
        "cy": "16.88",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "9.78",
        "cy": "20.98",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "2.43",
        "cy": "14.14",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "10.40",
        "cy": "17.41",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "7.81",
        "cy": "2.56",
        "r": "0.60"
      }
    ]
  ]
};

export const VerboLapse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.13 12.78 L 11.52 16.88 L 9.78 20.98 L 2.43 14.14 L 10.40 17.41 L 7.81 2.56" />
      <circle cx="20.13" cy="12.78" r="0.99" />
      <circle cx="11.52" cy="16.88" r="0.97" />
      <circle cx="9.78" cy="20.98" r="0.77" />
      <circle cx="2.43" cy="14.14" r="1.11" />
      <circle cx="10.40" cy="17.41" r="0.74" />
      <circle cx="7.81" cy="2.56" r="0.60" />
      {children}
    </svg>
  );
});

export default VerboLapse;
