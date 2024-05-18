import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      <h1 className="text-4xl">cart page</h1>
      <Link to="/" className="text-7xl text-red-900">
        Back to home
      </Link>
      <Button asChild size="sm">
        <Link to="/">Back to home</Link>
      </Button>
    </div>
  );
}
export default Cart;
