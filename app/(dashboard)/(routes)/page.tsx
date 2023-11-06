import { UserButton } from "@clerk/nextjs";

export default function Home()
{
    return (
        <div>
            <UserButton
             afterSignOutUrl="/"/>
        </div>
    )
}
/*
function Home() 
{
    return(
        <p>This is a protected page</p>
    )
}
export default Home;*/
