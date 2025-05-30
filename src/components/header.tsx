'use client'

import Link from 'next/link';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
    Button,
    Avatar,
} from '@nextui-org/react';
import { auth } from '@/auth';

export default async function Header() {
    const session = await auth();

    return (
        <Navbar className="shadow mb-6">
            <NavbarBrand>
                <Link href="/" className="fonst-bold">
                    Discuss
                </Link>
            </NavbarBrand>
            <NavbarContent justify="center">
                <NavbarItem>
                    <Input />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    {
                        session?.user ? <div>signed In</div> : <div>Signed Out</div>
                    }
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
