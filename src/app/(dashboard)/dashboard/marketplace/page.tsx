import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Star, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Solar Panel Kit",
    seller: "GreenTech Solutions",
    price: "$450",
    rating: 4.8,
    reviews: 124,
    location: "Lagos, Nigeria",
    image: "/solar-panel-installation.png",
    badge: "Verified",
  },
  {
    id: 2,
    name: "Agricultural Seeds Bundle",
    seller: "FarmDirect Co.",
    price: "$85",
    rating: 4.9,
    reviews: 89,
    location: "Nairobi, Kenya",
    image: "/assorted-seeds.png",
    badge: "Top Seller",
  },
  {
    id: 3,
    name: "Mobile POS Terminal",
    seller: "PayTech Africa",
    price: "$120",
    rating: 4.7,
    reviews: 156,
    location: "Accra, Ghana",
    image: "/pos-terminal.jpg",
    badge: "Verified",
  },
  {
    id: 4,
    name: "Water Purification System",
    seller: "CleanWater Ltd",
    price: "$280",
    rating: 4.6,
    reviews: 67,
    location: "Kampala, Uganda",
    image: "/water-filter-kitchen.png",
    badge: "New",
  },
  {
    id: 5,
    name: "Motorcycle Parts Kit",
    seller: "AutoParts Hub",
    price: "$195",
    rating: 4.5,
    reviews: 203,
    location: "Dar es Salaam, Tanzania",
    image: "/motorcycle-parts-display.png",
    badge: "Verified",
  },
  {
    id: 6,
    name: "Textile Manufacturing Tools",
    seller: "Fashion Factory",
    price: "$340",
    rating: 4.8,
    reviews: 91,
    location: "Kigali, Rwanda",
    image: "/textile-tools.jpg",
    badge: "Top Seller",
  },
];

export default function MarketplacePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          SME Marketplace
        </h1>
        <p className="text-muted-foreground">
          Discover verified suppliers and grow your business
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="glass-card p-6 border-2">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products, suppliers..."
              className="pl-9 bg-background/50 border-border focus:border-primary"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="border-border hover:border-primary bg-transparent"
            >
              Category
            </Button>
            <Button
              variant="outline"
              className="border-border hover:border-primary bg-transparent"
            >
              Location
            </Button>
            <Button
              variant="outline"
              className="border-border hover:border-primary bg-transparent"
            >
              Price
            </Button>
          </div>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="glass-card p-4 border-2">
          <p className="text-sm text-muted-foreground mb-1">Total Products</p>
          <p className="text-2xl font-bold text-foreground">12,450</p>
        </Card>
        <Card className="glass-card p-4 border-2">
          <p className="text-sm text-muted-foreground mb-1">Verified Sellers</p>
          <p className="text-2xl font-bold text-foreground">3,280</p>
        </Card>
        <Card className="glass-card p-4 border-2">
          <p className="text-sm text-muted-foreground mb-1">Active Orders</p>
          <p className="text-2xl font-bold text-foreground">1,567</p>
        </Card>
        <Card className="glass-card p-4 border-2">
          <p className="text-sm text-muted-foreground mb-1">Avg. Rating</p>
          <p className="text-2xl font-bold text-foreground">4.7★</p>
        </Card>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card
            key={product.id}
            className="glass-card overflow-hidden border-2 hover:border-primary transition-colors"
          >
            <div className="aspect-square bg-secondary/50 relative">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                {product.badge}
              </Badge>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-foreground mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {product.seller}
              </p>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                  <span className="text-sm font-medium text-foreground">
                    {product.rating}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                <MapPin className="w-3 h-3" />
                {product.location}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-foreground">
                  {product.price}
                </span>
                <Link href={`/dashboard/marketplace/${product.id}`}>
                <Button
                  size="sm"
                  className="bg-linear-to-r from-primary to-accent"
                >
                  View Details
                </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
