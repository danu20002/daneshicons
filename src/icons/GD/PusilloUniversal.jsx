import React from 'react';

export const iconData = {
  "id": "PusilloUniversal",
  "name": "PusilloUniversal",
  "category": "GD",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.09 14.40 L 7.99 4.51 L 2.91 2.29 L 14.57 8.59 L 11.73 2.80 L 17.51 13.74 L 5.49 13.20 L 19.11 9.53"
      }
    ],
    [
      "circle",
      {
        "cx": "11.09",
        "cy": "14.40",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "7.99",
        "cy": "4.51",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "2.91",
        "cy": "2.29",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "14.57",
        "cy": "8.59",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "11.73",
        "cy": "2.80",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "17.51",
        "cy": "13.74",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "5.49",
        "cy": "13.20",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "19.11",
        "cy": "9.53",
        "r": "0.86"
      }
    ]
  ]
};

export const PusilloUniversal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.09 14.40 L 7.99 4.51 L 2.91 2.29 L 14.57 8.59 L 11.73 2.80 L 17.51 13.74 L 5.49 13.20 L 19.11 9.53" />
      <circle cx="11.09" cy="14.40" r="0.99" />
      <circle cx="7.99" cy="4.51" r="1.17" />
      <circle cx="2.91" cy="2.29" r="0.72" />
      <circle cx="14.57" cy="8.59" r="1.28" />
      <circle cx="11.73" cy="2.80" r="1.08" />
      <circle cx="17.51" cy="13.74" r="1.00" />
      <circle cx="5.49" cy="13.20" r="0.57" />
      <circle cx="19.11" cy="9.53" r="0.86" />
      {children}
    </svg>
  );
});

export default PusilloUniversal;
