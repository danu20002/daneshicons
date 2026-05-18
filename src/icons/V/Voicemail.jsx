import React from 'react';

export const iconData = {
  id: "Voicemail",
  name: "Voicemail",
  category: "V",
  nodes: [["circle",{"cx":"6","cy":"12","r":"4"}],["circle",{"cx":"18","cy":"12","r":"4"}],["line",{"x1":"6","x2":"18","y1":"16","y2":"16"}]]
};

export const Voicemail = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6" cy="12" r="4" />
      <circle cx="18" cy="12" r="4" />
      <line x1="6" x2="18" y1="16" y2="16" />
      {children}
    </svg>
  );
});

export default Voicemail;
