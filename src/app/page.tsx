"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { ChefHat, Coffee, Heart, Instagram, Facebook, Leaf, MapPin, MessageCircle, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="large"
      background="gradientBars"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Location", id: "location" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Brunch Bistro"
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Brunch Bistro"
          description="Where every morning becomes a celebration of flavors, crafted with passion and served with elegance"
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Reserve Table", href: "contact" }
          ]}
          imageSrc="https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763220198131-jgkp2ce2.jpg"
          imageAlt="Elegant brunch bistro interior"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Crafted with Love, Served with Style"
          description="At Brunch Bistro, we believe every meal should be an experience. Our chefs carefully select the finest ingredients to create dishes that not only taste exceptional but tell a story of culinary artistry."
          tag="Our Story"
          tagIcon={Heart}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Farm-to-Table Fresh",
              description: "We source ingredients from local farms daily, ensuring peak freshness and supporting our community",
              icon: Leaf
            },
            {
              title: "Artisan Preparation",
              description: "Each dish is handcrafted by our experienced chefs using traditional techniques and modern flair",
              icon: ChefHat
            },
            {
              title: "Welcoming Atmosphere",
              description: "Our warm, inviting space creates the perfect backdrop for memorable dining experiences",
              icon: Coffee
            }
          ]}
          imageSrc="https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763220201758-cucf9yu5.jpg"
          imageAlt="Modern brunch restaurant dining atmosphere"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Signature Brunch Selections"
          description="Discover our most beloved dishes, each crafted to perfection with premium ingredients"
          tag="Featured Menu"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Truffle Avocado Toast",
              price: "$18",
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763220198881-zvn99l64.jpg",
              imageAlt: "Gourmet avocado toast with truffle"
            },
            {
              id: "2",
              name: "Classic Eggs Benedict",
              price: "$22",
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763220199616-96j3dxet.jpg",
              imageAlt: "Traditional eggs benedict with hollandaise"
            },
            {
              id: "3",
              name: "Brioche French Toast",
              price: "$16",
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763220200279-9je11rc3.jpg",
              imageAlt: "Artisan brioche french toast with berries"
            },
            {
              id: "4",
              name: "Harvest Bowl",
              price: "$20",
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763220201032-yq06ptco.jpg",
              imageAlt: "Healthy breakfast bowl with granola and fruits"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Guests Are Saying"
          description="Real experiences from our valued customers who keep coming back for more"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah",
              handle: "@sarahfoodie",
              testimonial: "The most incredible brunch experience! Every dish was perfectly crafted and the atmosphere is simply divine. I'll definitely be back.",
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763220202451-8heyvfe7.jpg",
              imageAlt: "Happy customer Sarah"
            },
            {
              id: "2",
              name: "Michael",
              handle: "@mike_eats",
              testimonial: "Outstanding service and phenomenal food. The eggs benedict was the best I've ever had, and the ambiance is perfect for any occasion.",
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763220203143-p2i4durw.jpg",
              imageAlt: "Satisfied customer Michael"
            },
            {
              id: "3",
              name: "Emma",
              handle: "@emma_brunches",
              testimonial: "A hidden gem! The attention to detail in every dish shows the chef's passion. This is now my go-to brunch spot.",
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763220204186-m2os43we.jpg",
              imageAlt: "Happy couple Emma and partner"
            },
            {
              id: "4",
              name: "Jennifer",
              handle: "@jen_dining",
              testimonial: "Exceptional quality and presentation. The farm-to-table approach really makes a difference in taste. Highly recommended!",
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763220204762-h4pmkczk.jpg",
              imageAlt: "Professional woman Jennifer"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          tagIcon={MapPin}
          title="Reserve Your Table Today"
          description="Join us for an unforgettable brunch experience. Make your reservation and let us create memorable moments for you."
          inputPlaceholder="Enter your email for reservation"
          buttonText="Reserve Now"
          termsText="We'll contact you within 24 hours to confirm your reservation details."
          imageSrc="https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763220205529-yz12iuy8.jpg"
          imageAlt="Welcoming restaurant interior"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Brunch Bistro"
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Brunch Classics", href: "menu" },
                { label: "Signature Dishes", href: "menu" },
                { label: "Beverages", href: "menu" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Chef's Philosophy", href: "about" },
                { label: "Sustainability", href: "about" }
              ]
            },
            {
              title: "Visit",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Location", href: "contact" },
                { label: "Hours", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/brunchbistro",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/brunchbistro",
              ariaLabel: "Facebook"
            }
          ]}
          copyrightText="© 2025 Brunch Bistro. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}