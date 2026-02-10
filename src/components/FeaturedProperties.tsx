import PropertyCard from "./PropertyCard";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=1000&auto=format&fit=crop",
    title: "Luxury Cliffside Villa",
    price: "$1,250,000",
    location: "Uluwatu, Bali",
    beds: 4,
    baths: 5,
    sqft: 450,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    title: "Modern Ricefield Retreat",
    price: "$850,000",
    location: "Canggu, Bali",
    beds: 3,
    baths: 3,
    sqft: 280,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600596542815-e328701102b9?q=80&w=1000&auto=format&fit=crop",
    title: "Tropical Jungle Sanctuary",
    price: "$2,100,000",
    location: "Ubud, Bali",
    beds: 5,
    baths: 6,
    sqft: 600,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
    title: "Beachfront Paradise",
    price: "$3,500,000",
    location: "Seminyak, Bali",
    beds: 6,
    baths: 7,
    sqft: 800,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    title: "Minimalist Studio",
    price: "$450,000",
    location: "Pererenan, Bali",
    beds: 1,
    baths: 1,
    sqft: 120,
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-medium tracking-wider text-sm uppercase bg-emerald-100 px-3 py-1 rounded-full">
            Exclusive Listings
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mt-4 mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our hand-picked selection of the most exquisite villas and
            estates available in Bali today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {properties.map((property) => (
            <div key={property.id} className={property.className}>
              <PropertyCard {...property} className="h-full" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 border border-emerald-600 text-emerald-600 font-medium rounded-full hover:bg-emerald-600 hover:text-white transition-all hover:scale-105">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
