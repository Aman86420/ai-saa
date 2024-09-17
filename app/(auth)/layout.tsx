import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


const AuthLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        
            <div className="flex items-center justify-center h-full">
                {children}
            </div>
                
    );
}
export default AuthLayout;


    
