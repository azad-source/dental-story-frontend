import * as React from 'react';

interface Props {
    className?: string;
}

export const BackIcon: React.FC<Props> = ({ className }) => {
    return (
        <svg fill="currentColor" baseProfile="tiny" width="14" height="14" viewBox="0 0 42 42">
            <polygon
                fillRule="evenodd"
                points="31,38.32 13.391,21 31,3.68 28.279,1 8,21.01 28.279,41 "
            />
        </svg>
    );
};
