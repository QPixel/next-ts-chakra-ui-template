import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
    children?: ReactNode;
};

const Layout = ({ children }: Props) => (
    <div>
        <header>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>{" "}
                |{" "}
                <Link href="/about">
                    <a>About</a>
                </Link>{" "}
                |{" "}
                <Link href="/users">
                    <a>Users List</a>
                </Link>{" "}
                | <a href="/api/users">Users API</a>
            </nav>
        </header>
        {children}
        <footer>
            <hr />
            <span>I'm here to stay (Footer)</span>
        </footer>
    </div>
);

export default Layout;
