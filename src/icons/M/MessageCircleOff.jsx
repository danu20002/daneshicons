import React from 'react';

export const iconData = {
  id: "MessageCircleOff",
  name: "MessageCircleOff",
  category: "M",
  nodes: [["path",{"d":"m2 2 20 20"}],["path",{"d":"M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989"}],["path",{"d":"M8.35 2.69A10 10 0 0 1 21.3 15.65"}]]
};

export const MessageCircleOff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m2 2 20 20" />
      <path d="M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989" />
      <path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
      {children}
    </svg>
  );
});

export default MessageCircleOff;
