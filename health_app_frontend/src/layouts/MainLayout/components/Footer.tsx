import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

type NavItem = {
    name: string;
    path: string;
    icon: React.FC<{ isActive: boolean }>;
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark/500 w-full h-32">
            <div className="max-w-[60rem] mx-auto my-0 p-0 flex items-center h-full">
                <div className="flex">
                    <div className="pr-11">
                        <Link to="#" className="footer-link text-light fw-light jp-font hover:underline">
                            会員登録
                        </Link>
                    </div>
                    <div className="pr-11">
                        <Link to="#" className="footer-link text-light fw-light jp-font hover:underline">
                            運営会社
                        </Link>
                    </div>
                    <div className="pr-11">
                        <Link to="#" className="footer-link text-light fw-light jp-font hover:underline">
                            利用規約
                        </Link>
                    </div>
                    <div className="pr-11">
                        <Link to="#" className="footer-link text-light fw-light jp-font hover:underline">
                            個人情報の取扱について
                        </Link>
                    </div>
                    <div className="pr-11">
                        <Link to="#" className="footer-link text-light fw-light jp-font hover:underline">
                            特定商取引法に基づく表記
                        </Link>
                    </div>
                    <div className="pr-11">
                        <Link to="#" className="footer-link text-light fw-light jp-font hover:underline">
                            お問い合わせ
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
