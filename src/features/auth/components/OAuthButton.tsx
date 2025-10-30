import { Button } from "@/components/ui/button";
import { FaApple, FaGoogle } from "react-icons/fa";

const OAuthButton = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Button
        type="button"
        variant="outline"
        className="border-border hover:border-primary hover:text-primary bg-transparent"
      >
        <FaGoogle />
        Google
      </Button>
      <Button
        type="button"
        variant="outline"
        className="border-border hover:border-primary hover:text-primary bg-transparent"
      >
        <FaApple />
        Apple
      </Button>
    </div>
  );
};

export default OAuthButton;
