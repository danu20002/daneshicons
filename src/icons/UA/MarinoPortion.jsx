import React from 'react';

export const iconData = {
  "id": "MarinoPortion",
  "name": "MarinoPortion",
  "category": "UA",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.02 10.47 L 14.32 18.56 L 2.73 18.52 L 18.00 10.22 L 3.26 4.72 L 19.40 17.07"
      }
    ],
    [
      "circle",
      {
        "cx": "13.02",
        "cy": "10.47",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "14.32",
        "cy": "18.56",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "2.73",
        "cy": "18.52",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.22",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "3.26",
        "cy": "4.72",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "19.40",
        "cy": "17.07",
        "r": "0.72"
      }
    ]
  ]
};

export const MarinoPortion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.02 10.47 L 14.32 18.56 L 2.73 18.52 L 18.00 10.22 L 3.26 4.72 L 19.40 17.07" />
      <circle cx="13.02" cy="10.47" r="1.13" />
      <circle cx="14.32" cy="18.56" r="0.67" />
      <circle cx="2.73" cy="18.52" r="0.79" />
      <circle cx="18.00" cy="10.22" r="1.08" />
      <circle cx="3.26" cy="4.72" r="1.38" />
      <circle cx="19.40" cy="17.07" r="0.72" />
      {children}
    </svg>
  );
});

export default MarinoPortion;
