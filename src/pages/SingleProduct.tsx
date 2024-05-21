import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  customFetch,
  formatAsDollars,
  type SingleProductResponse
} from "@/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SelectProductColor, SelectProductAmount } from "@/components";

import { type LoaderFunction } from "react-router-dom";

export const loader: LoaderFunction = async ({ params }) => {
  console.log(params);
  return null;
};

const SingleProduct = () => {
  return <h1 className="text-4xl">SingleProduct Page</h1>;
};
export default SingleProduct;
