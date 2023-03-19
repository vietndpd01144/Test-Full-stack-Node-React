import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark/500 w-full h-32 sm:h-auto sm:py-5">
            <div className="max-w-[60rem] lg:max-w-[40rem] sm:max-w-[18rem] mx-auto my-0 p-0 flex items-center h-full">
                <div className="flex sm:flex-wrap sm:justify-center ">
                    <div className="pr-11 sm:pr-0 w-full text-center">
                        <Link
                            to="#"
                            className="footer-link text-light  fw-light font-Noto_Sans_JP hover:underline  sm:text-[15px]"
                        >
                            会員登録
                        </Link>
                    </div>
                    <div className="pr-11 sm:pr-0 w-full text-center">
                        <Link
                            to="#"
                            className="footer-link text-light  fw-light font-Noto_Sans_JP hover:underline  sm:text-[15px]"
                        >
                            運営会社
                        </Link>
                    </div>
                    <div className="pr-11 sm:pr-0 w-full text-center">
                        <Link
                            to="#"
                            className="footer-link text-light  fw-light font-Noto_Sans_JP hover:underline  sm:text-[15px]"
                        >
                            利用規約
                        </Link>
                    </div>
                    <div className="pr-11 sm:pr-0 w-full text-center">
                        <Link
                            to="#"
                            className="footer-link text-light  fw-light font-Noto_Sans_JP hover:underline  sm:text-[15px]"
                        >
                            個人情報の取扱について
                        </Link>
                    </div>
                    <div className="pr-11 sm:pr-0 w-full text-center">
                        <Link
                            to="#"
                            className="footer-link text-light  fw-light font-Noto_Sans_JP hover:underline  sm:text-[15px]"
                        >
                            特定商取引法に基づく表記
                        </Link>
                    </div>
                    <div className="pr-11 sm:pr-0 w-full text-center">
                        <Link
                            to="#"
                            className="footer-link text-light  fw-light font-Noto_Sans_JP hover:underline  sm:text-[15px]"
                        >
                            お問い合わせ
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
