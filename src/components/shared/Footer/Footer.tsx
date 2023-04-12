import { SITE_NAME } from 'variables';

export const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row center">
                    Copyright © {SITE_NAME} {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    );
};
