import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return(
        <div>LandingPage (unprotected)<div>
                <Link href="/sign-up">
                    <Button>
                        Login
                    </Button>
                </Link>
            </div>
        </div>
    );
}
export default LandingPage;