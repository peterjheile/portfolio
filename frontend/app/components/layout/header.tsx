import { MenuButton } from "@/app/components/ui/MenuButton";


export function Header(){

    return (
        <header className="fixed w-full">
            <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
                
                {/* LEFT: Logo */}
                <div className="font-semibold text-lg">
                Logo
                </div>

                {/* RIGHT: Menu Button */}
                <div>
                <MenuButton />
                </div>

            </nav>
        </header>
    )


}