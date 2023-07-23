import * as React from 'react';

interface Props {
    className?: string;
}

export const ArrowupIcon: React.FC<Props> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path
                d="M18.293 15.289a1 1 0 0 0 0-1.414l-4.892-4.887a2 2 0 0 0-2.828.001l-4.89 4.89a1 1 0 0 0 1.414 1.414l4.186-4.186a1 1 0 0 1 1.414 0l4.182 4.182a1 1 0 0 0 1.414 0z"
                fill="currentColor"
            />
        </svg>
    );
};
