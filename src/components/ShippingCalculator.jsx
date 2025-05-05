import React from "react";

const ShippingCalculator = () => {
  return (
    <div className="bg-[#F7F9FB] py-10 flex justify-center">
      <div className="text-center max-w-4xl w-full px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Calculate Shipping Fees
        </h2>
        <p className="text-gray-700 mb-8">
          We ship to more than 220 countries and territories using the best in
          class shipping partners, check it out here
        </p>

        <form className="bg-white p-6 rounded-xl shadow-md flex flex-wrap justify-center gap-4">
          {/* Ship from */}
          <div className="flex flex-col text-left">
            <label className="font-semibold mb-1">Ship from</label>
            <select className="border rounded px-4 py-2 w-48">
              <option value="us"> United States</option>
            </select>
          </div>

          {/* Ship to */}
          <div className="flex flex-col text-left">
            <label className="font-semibold mb-1">Ship to</label>
            <select className="border rounded px-4 py-2 w-48 bg-gray-200 text-black">
              <option>Choose Option</option>
              <option>Choose Option</option>
              <option>Choose Option</option>
              <option>Choose Option</option>
              <option>Choose Option</option>
              <option>Choose Option</option>
              <option>Choose Option</option>
              <option>Choose Option</option>
              <option>Choose Option</option>
              <option>Choose Option</option>
            </select>
          </div>

          {/* Parcel weight */}
          <div className="flex flex-col text-left">
            <label className="font-semibold mb-1">Parcel weight?</label>
            <input
              type="text"
              className="border rounded px-4 py-2 w-48"
            />
          </div>

          {/* Weight Unit */}
          <div className="flex flex-col text-left">
            <label className="font-semibold mb-1">Weight Unit</label>
            <select className="border rounded px-4 py-2 w-48 bg-gray-200 text-black">
              <option>Choose Option</option>
              <option>Choose Option</option>
              <option>Choose Option</option>
              <option>Choose Option</option>
              <option>Choose Option</option>
              <option>Choose Option</option>
              <option>Choose Option</option>
              <option>Choose Option</option>
              <option>Choose Option</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="w-full mt-6">
            <button
              type="submit"
              className=" text-white font-semibold py-3 w-full rounded"
              style={{
                backgroundColor: "rgba(1, 0, 252, 1)",
              }}
            >
              CALCULATE SHIPPING COST
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShippingCalculator;
