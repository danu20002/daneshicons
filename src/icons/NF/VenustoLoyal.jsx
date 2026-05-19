import React from 'react';

export const iconData = {
  "id": "VenustoLoyal",
  "name": "VenustoLoyal",
  "category": "NF",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "0.30"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "0.43"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.42"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "0.38"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.49"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.31"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "1.05"
      }
    ]
  ]
};

export const VenustoLoyal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="1.01" />
      <circle cx="5.60" cy="8.80" r="1.07" />
      <circle cx="5.60" cy="12.00" r="0.80" />
      <circle cx="5.60" cy="15.20" r="0.30" />
      <circle cx="5.60" cy="18.40" r="0.43" />
      <circle cx="8.80" cy="5.60" r="0.59" />
      <circle cx="8.80" cy="8.80" r="0.81" />
      <circle cx="8.80" cy="12.00" r="0.69" />
      <circle cx="8.80" cy="15.20" r="0.75" />
      <circle cx="8.80" cy="18.40" r="0.42" />
      <circle cx="12.00" cy="5.60" r="0.89" />
      <circle cx="12.00" cy="8.80" r="0.38" />
      <circle cx="12.00" cy="12.00" r="0.77" />
      <circle cx="12.00" cy="15.20" r="1.00" />
      <circle cx="12.00" cy="18.40" r="0.49" />
      <circle cx="15.20" cy="5.60" r="0.31" />
      <circle cx="15.20" cy="8.80" r="0.89" />
      <circle cx="15.20" cy="12.00" r="1.03" />
      <circle cx="15.20" cy="15.20" r="0.60" />
      <circle cx="15.20" cy="18.40" r="0.94" />
      <circle cx="18.40" cy="5.60" r="1.07" />
      <circle cx="18.40" cy="8.80" r="0.89" />
      <circle cx="18.40" cy="12.00" r="0.61" />
      <circle cx="18.40" cy="15.20" r="1.08" />
      <circle cx="18.40" cy="18.40" r="1.05" />
      {children}
    </svg>
  );
});

export default VenustoLoyal;
