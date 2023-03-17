import { Link, NavLink } from 'react-router-dom';

import logo from '@assets/icons/logo.png';
import memo from '@assets/icons/memo.svg';
import challenge from '@assets/icons/challenge.svg';
import info from '@assets/icons/info.svg';
import menu from '@assets/icons/menu.svg';
import close from '@assets/icons/icon_close.png';
import classNames from 'classnames';
import { useState } from 'react';

const Header = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    return (
        <header className="fixed top-0 left-0 right-0 bg-dark/500 h-16 z-50">
            <div className="max-w-[60rem] mx-auto my-0">
                <div className="flex justify-between">
                    <Link className="navbar-brand m-0" to="/">
                        <img className="logo" src={logo} />
                    </Link>
                    <div className="flex">
                        <div className="flex my-2">
                            <div className="flex items-center group mr-8">
                                <div className="navlink-info p-1">
                                    <img className="navlink-logo" src={memo} />
                                </div>
                                <NavLink
                                    className={({ isActive }) => {
                                        return classNames('group-hover:text-primary/400 text-light', {
                                            'text-primary/400': isActive
                                        });
                                    }}
                                    to="/my-record"
                                >
                                    自分の記録
                                </NavLink>
                            </div>
                            <div className="flex items-center group mr-8">
                                <div className="navlink-info p-1">
                                    <img className="navlink-logo" src={challenge} />
                                </div>
                                <NavLink
                                    className={({ isActive }) => {
                                        return classNames('group-hover:text-primary/400 text-light', {
                                            'text-primary/400': isActive
                                        });
                                    }}
                                    to="/any"
                                >
                                    チャレンジ
                                </NavLink>
                            </div>
                            <div className="flex items-center group mr-8">
                                <div className="relative p-1">
                                    <img className="navlink-logo" src={info} />
                                    <span className=" absolute top-0 right-0 w-4 h-4 rounded-full bg-primary/500 flex justify-center items-center rounded-circle ">
                                        1
                                    </span>
                                </div>
                                <NavLink
                                    className={({ isActive }) => {
                                        return classNames('group-hover:text-primary/400 text-light', {
                                            'text-primary/400': isActive
                                        });
                                    }}
                                    to="/any"
                                >
                                    お知らせ
                                </NavLink>
                            </div>
                        </div>
                        <div className="flex items-center ml-4 relative">
                            <div className=" cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                                <img src={menu} />
                            </div>
                            {showMenu && (
                                <div className="absolute w-[17rem] top-full right-0 ">
                                    <div className="flex justify-end">
                                        <div
                                            className="w-8 h-8 bg-dark/600 cursor-pointer"
                                            onClick={() => {
                                                setShowMenu(false);
                                            }}
                                        >
                                            <img src={close} alt="" />
                                        </div>
                                    </div>
                                    <ul className="bg-dark/400">
                                        <li className="  hover:bg-primary/400">
                                            <Link
                                                className="pl-8 w-full flex items-center text-lg h-14 font-Noto_Sans_JP"
                                                to="#"
                                            >
                                                自分の記録
                                            </Link>
                                        </li>
                                        <div className="h-0.5 mix-blend-normal bg-light opacity-[0.15] "></div>

                                        <li className="  hover:bg-primary/400">
                                            <Link
                                                className="pl-8 w-full flex items-center text-lg h-14 font-Noto_Sans_JP"
                                                to="#"
                                            >
                                                体重グラフ
                                            </Link>
                                        </li>
                                        <div className="h-0.5 mix-blend-normal bg-light opacity-[0.15] "></div>

                                        <li className="  hover:bg-primary/400">
                                            <Link
                                                className="pl-8 w-full flex items-center text-lg h-14 font-Noto_Sans_JP"
                                                to="#"
                                            >
                                                目標
                                            </Link>
                                        </li>
                                        <div className="h-0.5 mix-blend-normal bg-light opacity-[0.15] "></div>

                                        <li className="  hover:bg-primary/400">
                                            <Link
                                                className="pl-8 w-full flex items-center text-lg h-14 font-Noto_Sans_JP"
                                                to="#"
                                            >
                                                選択中のコース
                                            </Link>
                                        </li>
                                        <div className="h-0.5 mix-blend-normal bg-light opacity-[0.15] "></div>
                                        <li className=" hover:bg-primary/400">
                                            <Link
                                                className="pl-8 w-full flex items-center text-lg h-14 font-Noto_Sans_JP"
                                                to="/blog"
                                            >
                                                コラム一覧
                                            </Link>
                                        </li>
                                        <div className="h-0.5 mix-blend-normal bg-light opacity-[0.15] "></div>
                                        <li className="  hover:bg-primary/400">
                                            <Link
                                                className="pl-8 w-full flex items-center text-lg h-14 font-Noto_Sans_JP"
                                                to="#"
                                            >
                                                設定
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
