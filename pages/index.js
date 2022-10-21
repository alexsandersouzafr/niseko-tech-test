import Head from "next/head";
import { useState } from "react";
import PropertyCard from "../packages/components/PropertyCard";
import properties from "../src/properties.json";

export default function Home() {
  const [propertyList, setPropertyList] = useState(properties);
  const [filter, setFilter] = useState("");

  const handleSearch = () => {
    let filtered = [];
    properties.map((property) => {
      if (
        property.name.toLowerCase().includes(filter.toLowerCase()) ||
        property.description.toLowerCase().includes(filter.toLowerCase())
      ) {
        filtered = [...filtered, property];
      }
      setPropertyList(filtered);
    });
  };

  return (
    <div>
      <Head>
        <title>NTM Technical Test</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className="flex flex-col gap-4 p-8">
        <div className="flex gap-8 text-center rounded-b-full bg-gray-800 p-4 text-white">
          <label>search</label>
          <input
            type="text"
            className="flex-1 px-4 rounded-xl text-gray-900"
            onChange={(e) => {
              setFilter(e.target.value);
              handleSearch();
            }}
            value={filter}
          />
        </div>

        <div>
          {filter !== "" ? (
            <button
              className="px-4 bg-red-500 text-red-100"
              onClick={() => {
                setPropertyList(properties);
                setFilter("");
              }}
            >
              clear search
            </button>
          ) : null}
        </div>

        <div className="flex flex-col gap-8 px-2">
          {propertyList.length ? (
            propertyList.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div>No matches found. :(</div>
          )}
        </div>
      </div>
    </div>
  );
}
