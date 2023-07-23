import * as React from 'react';

interface Props {
    className?: string;
}

export const ReportIcon: React.FC<Props> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width="20"
            height="20"
            viewBox="0 0 90 90"
            className={className}
        >
            <path d="M39 32h22c1.1 0 2-.9 2-2v-4a6.02 6.02 0 0 0-6-6H43a6.02 6.02 0 0 0-6 6v4c0 1.1.9 2 2 2zm33-7h-2a.94.94 0 0 0-1 1v4c0 4.4-3.6 8-8 8H39c-4.4 0-8-3.6-8-8v-4a.94.94 0 0 0-1-1h-2a6.02 6.02 0 0 0-6 6v43a6.02 6.02 0 0 0 6 6h44a6.02 6.02 0 0 0 6-6V31a6.02 6.02 0 0 0-6-6zM43 66c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2V56c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v10zm10 0c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2V47c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v19zm10 0c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2V51c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v15z" />
        </svg>
    );
};
