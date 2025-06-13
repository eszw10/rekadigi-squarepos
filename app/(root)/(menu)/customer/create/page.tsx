"use client";

import { addCustomer } from "@/lib/customerSlice";
import { useAppDispatch } from "@/lib/hooks";
import { ArrowLeft } from "iconsax-reactjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const CreateCustomerPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    dispatch(
      addCustomer({
        id: Math.floor(Math.random() * 1000),
        ...data,
      })
    );

    router.push("/customer");
  }
  return (
    <div className="h-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-4 m-auto p-5 border-2 border-iris rounded-lg"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-dark">Add Customer</h2>
          <p className="">Fill all the fields below to add a new customer</p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold">
            Customer Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            minLength={3}
            placeholder="customer name.."
            className="border-2 border-iris rounded-lg p-2 ring-iris-100 focus:ring-1 outline-none"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="level" className="font-semibold">
            Customer Level
          </label>
          <select
            name="level"
            id="level"
            className="border-2 border-iris rounded-lg p-2"
            required
          >
            <option value="Warga">Warga</option>
            <option value="Juragan">Juragan</option>
            <option value="Sultan">Sultan</option>
            <option value="Konglomerat">Konglomerat</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="favMenu" className="font-semibold">
            Customer&apos;s Favourite Menu
          </label>
          <input
            id="favMenu"
            type="text"
            name="favMenu"
            minLength={3}
            placeholder="customer favourite menu.."
            className="border-2 border-iris rounded-lg p-2 ring-iris-100 focus:ring-1 outline-none"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="favMenu" className="font-semibold">
            Total Transaction
          </label>
          <input
            type="text"
            name="totalTransaction"
            required
            placeholder="total of customer's transaction.."
            className="border-2 border-iris rounded-lg p-2 ring-iris-100 focus:ring-1 outline-none"
          />
        </div>
        <div className="flex items-center justify-between">
          <Link
            href="/customer"
            className="bg-iris py-3 px-4 rounded-lg  text-white font-semibold flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </Link>
          <button
            className="bg-iris py-3 px-4 rounded-lg w-[200px] text-white font-semibold cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateCustomerPage;
